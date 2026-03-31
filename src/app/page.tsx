// src/app/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';
import Navbar from '@/components/Navbar';

export default function LandingPage() {
  const router = useRouter();
  const { user, loading, setNickname } = useUser();
  const [nickname, setNicknameInput] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  // 이미 닉네임이 설정되었으면 대시보드로 이동
  useEffect(() => {
    if (!loading && user && user.nickname !== '신입 개발자') {
      router.push('/dashboard');
    }
  }, [loading, user, router]);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) return;

    setNickname(nickname);
    router.push('/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3 animate-spin">⚙️</div>
          <p className="text-slate-400">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar currentPage="landing" />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-black to-slate-900 relative overflow-hidden">
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-500 font-mono text-xs animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.2}s`,
              }}
            >
              {['int x = 5;', 'ptr *p = &x;', 'printf("%d", *p);', 'return 0;'][i % 4]}
            </div>
          ))}
        </div>

        {/* 메인 콘텐츠 */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
          {/* 로고 */}
          <div
            className={`text-center mb-8 transform transition-all duration-1000 ${
              isAnimated ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          >
            <div className="text-8xl mb-4 animate-bounce">🚀</div>
            <h1 className="text-5xl font-bold text-white mb-2">Code Horizon</h1>
            <p className="text-xl text-slate-400">
              C언어로 시작하는 코딩 모험
            </p>
          </div>

          {/* 설명 */}
          <div
            className={`text-center mb-12 max-w-md transform transition-all duration-1000 delay-300 ${
              isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-slate-300 mb-4">
              🤖 AI 튜터와 함께 프로젝트를 통해 배우세요
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>✨ 15개의 프로젝트로 C/Python 마스터</p>
              <p>🎮 게임처럼 진행되는 학습 경험</p>
              <p>🏆 뱃지와 경험치로 성장 추적</p>
            </div>
          </div>

          {/* 입력 폼 */}
          <form
            onSubmit={handleStart}
            className={`w-full max-w-sm transform transition-all duration-1000 delay-500 ${
              isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="nickname" className="block text-sm text-slate-300 mb-2">
                  당신의 닉네임을 입력하세요
                </label>
                <input
                  id="nickname"
                  type="text"
                  value={nickname}
                  onChange={(e) => setNicknameInput(e.target.value)}
                  placeholder="예: joon_dev"
                  maxLength={20}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                  autoFocus
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition"
                >
                  나중에
                </button>
                <button
                  type="submit"
                  disabled={!nickname.trim()}
                  className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition"
                >
                  → 모험 시작
                </button>
              </div>
            </div>
          </form>

          {/* 푸터 */}
          <div className="text-center text-xs text-slate-500 mt-12">
            로그인 없이 바로 시작하세요 • 기기에 데이터 저장됨
          </div>
        </div>

        {/* 스타일 */}
        <style jsx>{`
          @keyframes fall {
            0% {
              transform: translateY(-100px);
              opacity: 0;
            }
            10% {
              opacity: 0.5;
            }
            90% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(100vh);
              opacity: 0;
            }
          }
          .animate-fall {
            animation: fall 6s linear infinite;
          }
        `}</style>
      </div>
    </>
  );
}
