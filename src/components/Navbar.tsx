// src/components/Navbar.tsx

'use client';

import Link from 'next/link';
import { User } from '@/types';
import { LEVEL_ICONS, LEVEL_NAMES } from '@/lib/constants';

interface NavbarProps {
  user?: User;
  currentPage?: 'landing' | 'dashboard' | 'workspace';
}

export default function Navbar({ user, currentPage = 'landing' }: NavbarProps) {
  const levelIndex = Math.min(user?.level || 1, 4) - 1;
  const icon = LEVEL_ICONS[levelIndex] || '🌱';
  const levelName = LEVEL_NAMES[levelIndex] || '초보자';

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-2xl">🚀</span>
          <div>
            <h1 className="text-sm font-bold text-white">Code Horizon</h1>
            <p className="text-xs text-slate-400">C언어로 시작하는 코딩 모험</p>
          </div>
        </Link>

        {/* 중앙 네비게이션 */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/dashboard"
            className={`text-xs font-medium transition ${
              currentPage === 'dashboard'
                ? 'text-blue-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🗺️ 월드맵
          </Link>
          <Link
            href="/dashboard"
            className={`text-xs font-medium transition ${
              currentPage === 'dashboard'
                ? 'text-blue-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📊 대시보드
          </Link>
        </div>

        {/* 사용자 정보 */}
        {user && (
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-slate-700 px-3 py-2 rounded-lg">
              <span className="text-lg">{icon}</span>
              <div className="text-xs">
                <div className="font-semibold text-white">{user.nickname}</div>
                <div className="text-slate-400">
                  Lv.{user.level} {levelName}
                </div>
              </div>
            </div>

            <div className="hidden xs:flex items-center gap-2 text-xs text-slate-300">
              <span>⚡ {user.totalExp}</span>
              <span>🔥 {user.currentStreak}</span>
            </div>

            {/* 프로필 메뉴 */}
            <button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white text-xs font-bold transition">
              {user.nickname.charAt(0).toUpperCase()}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
