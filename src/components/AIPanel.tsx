// src/components/AIPanel.tsx

'use client';

import { useState, useRef, useEffect } from 'react';
import { AIMessage } from '@/types';

interface AIPanelProps {
  projectTitle: string;
  code: string;
  onHint?: () => void;
}

export default function AIPanel({ projectTitle, code, onHint }: AIPanelProps) {
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      role: 'assistant',
      content: `안녕하세요! 📚 "${projectTitle}" 미션을 함께 진행합니다.\n\n지금 할 일:\n1. 아래 예제 코드를 읽어보세요\n2. 자신의 코드를 작성해보세요\n3. 문제가 생기면 "힌트" 버튼을 클릭하세요`,
      timestamp: new Date(),
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 자동 스크롤
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // AI 응답 생성
  const askAI = async (userMessage: string) => {
    // 사용자 메시지 추가
    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        content: userMessage,
        timestamp: new Date(),
      },
    ]);

    setLoading(true);

    try {
      // Vercel API Route로 요청
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          code,
          projectTitle,
        }),
      });

      const data = await response.json();

      // AI 응답 추가
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.response || '응답을 생성할 수 없습니다.',
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '죄송합니다. AI 응답을 생성할 수 없습니다.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-slate-900 border border-slate-700 rounded-lg flex flex-col">
      {/* 헤더 */}
      <div className="bg-slate-800 px-4 py-3 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-xs font-medium text-slate-300">🤖 AI 튜터</span>
        </div>
      </div>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded text-xs leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-100'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 text-slate-100 px-3 py-2 rounded text-xs">
              ⏳ AI가 생각 중입니다...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 빠른 액션 버튼 */}
      <div className="border-t border-slate-700 p-3 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => askAI('이 코드가 맞나요?')}
            disabled={loading || !code.trim()}
            className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 disabled:bg-gray-700 text-slate-200 rounded transition"
          >
            ✓ 검사
          </button>
          <button
            onClick={() => askAI('힌트를 주세요')}
            disabled={loading}
            className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 disabled:bg-gray-700 text-slate-200 rounded transition"
          >
            💡 힌트
          </button>
          <button
            onClick={() => askAI('이 코드는 왜 필요한가요?')}
            disabled={loading}
            className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 disabled:bg-gray-700 text-slate-200 rounded transition"
          >
            📚 설명
          </button>
          <button
            onClick={() => askAI('더 자세히 알려주세요')}
            disabled={loading}
            className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 disabled:bg-gray-700 text-slate-200 rounded transition"
          >
            🔍 상세
          </button>
        </div>
      </div>
    </div>
  );
}
