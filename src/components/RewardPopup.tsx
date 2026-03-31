// src/components/RewardPopup.tsx

'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface RewardPopupProps {
  isOpen: boolean;
  exp: number;
  concepts: string[];
  badgeEarned?: string;
  streak: number;
  onClose: () => void;
  onNext: () => void;
}

export default function RewardPopup({
  isOpen,
  exp,
  concepts,
  badgeEarned,
  streak,
  onClose,
  onNext,
}: RewardPopupProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-blue-500 rounded-xl p-6 max-w-sm w-full mx-4 animate-bounce">
        {/* 축하 이모지 */}
        <div className="text-center mb-4">
          <div className="text-6xl animate-bounce mb-3">🎉</div>
          <h2 className="text-2xl font-bold text-white mb-1">미션 완료!</h2>
          <p className="text-sm text-slate-400">멋진 진행이야요! 🌟</p>
        </div>

        {/* 보상 항목 */}
        <div className="space-y-3 mb-6">
          {/* 경험치 */}
          <div className="bg-slate-700 rounded-lg p-3 flex items-center justify-between">
            <span className="text-sm text-slate-300">경험치</span>
            <span className="text-lg font-bold text-green-400">+{exp} EXP</span>
          </div>

          {/* 개념 */}
          {concepts.length > 0 && (
            <div className="bg-slate-700 rounded-lg p-3">
              <span className="text-xs text-slate-400 block mb-2">배운 개념</span>
              <div className="flex flex-wrap gap-1">
                {concepts.map((concept) => (
                  <span
                    key={concept}
                    className="px-2 py-1 bg-blue-600 text-white text-xs rounded"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 뱃지 */}
          {badgeEarned && (
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-3 text-center">
              <div className="text-sm text-white font-semibold mb-1">
                🏆 새 뱃지 획득!
              </div>
              <div className="text-2xl">{badgeEarned}</div>
            </div>
          )}

          {/* 스트릭 */}
          <div className="bg-slate-700 rounded-lg p-3 text-center">
            <div className="text-sm text-slate-300 mb-1">연속 진행</div>
            <div className="text-2xl font-bold text-yellow-400">
              {'🔥'.repeat(streak)}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {streak}일 연속 진행 중!
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition"
          >
            쉬기
          </button>
          <button
            onClick={onNext}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition"
          >
            다음 미션 →
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
