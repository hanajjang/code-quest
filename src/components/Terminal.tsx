// src/components/Terminal.tsx

'use client';

import { CompileResult } from '@/types';

interface TerminalProps {
  result?: CompileResult;
  isRunning?: boolean;
  onRun?: () => void;
}

export default function Terminal({ result, isRunning = false, onRun }: TerminalProps) {
  return (
    <div className="h-full bg-black border border-slate-700 rounded-lg flex flex-col">
      {/* 헤더 */}
      <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-slate-300">▶ 실행 결과</span>
        </div>
        <button
          onClick={onRun}
          disabled={isRunning}
          className="px-3 py-1 text-xs font-medium bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded transition"
        >
          {isRunning ? '⏳ 실행 중...' : '▶ Run (Ctrl+Enter)'}
        </button>
      </div>

      {/* 출력 영역 */}
      <div className="flex-1 p-4 overflow-y-auto font-mono text-sm">
        {!result && (
          <div className="text-gray-500 text-xs">
            코드를 작성하고 Run 버튼을 눌러주세요.
          </div>
        )}

        {result && result.success && (
          <>
            <div className="text-gray-400 mb-2">
              $ {result.output.split('\n')[0] || ''}
            </div>
            {result.output.split('\n').map((line, idx) => (
              <div key={idx} className="text-green-400 mb-1">
                {line}
              </div>
            ))}
            <div className="text-gray-500 text-xs mt-2">
              ✓ 완료 ({result.executionTime}ms)
            </div>
          </>
        )}

        {result && !result.success && (
          <>
            <div className="text-red-400 font-semibold mb-2">❌ 에러</div>
            <div className="text-red-300 text-xs whitespace-pre-wrap">
              {result.error}
            </div>
          </>
        )}

        {isRunning && (
          <div className="text-yellow-400 animate-pulse">⏳ 실행 중...</div>
        )}
      </div>

      {/* 푸터 */}
      <div className="bg-slate-800 px-4 py-2 border-t border-slate-700 text-xs text-gray-500">
        WebAssembly + Python (Pyodide) 기반 실행 환경
      </div>
    </div>
  );
}
