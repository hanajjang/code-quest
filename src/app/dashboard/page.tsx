// src/app/dashboard/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';
import { useFirestore } from '@/hooks/useFirestore';
import Navbar from '@/components/Navbar';
import Worldmap from '@/components/Worldmap';
import { REGIONS, LEVEL_ICONS, LEVEL_NAMES } from '@/lib/constants';
import { Region } from '@/types';

export default function Dashboard() {
  const router = useRouter();
  const { user, loading } = useUser();
  const [regions, setRegions] = useState<Region[]>(REGIONS);
  const firestore = useFirestore(user?.deviceId || '');

  // Firestore에서 진행도 로드
  useEffect(() => {
    if (!user?.deviceId) return;

    const loadProgress = async () => {
      const projects = await firestore.loadAllProjects();

      // 지역별 진행도 계산
      const updatedRegions = REGIONS.map((region) => {
        const regionProjects = projects.filter((p) =>
          region.projects.some((rp) => rp.id === p.id)
        );

        if (regionProjects.length === 0) return region;

        const completed = regionProjects.filter((p) => p.status === 'completed').length;
        const inProgress = regionProjects.some((p) => p.status === 'in_progress');
        const progress = Math.round((completed / regionProjects.length) * 100);

       return {
          ...region,
          progress,
          status: (completed === regionProjects.length
            ? 'completed'
            : inProgress
            ? 'in_progress'
            : 'locked') as 'completed' | 'in_progress' | 'locked',
          projects: regionProjects.length > 0 ? regionProjects : region.projects,
        };
      setRegions(updatedRegions);
    };

    loadProgress();
  }, [user?.deviceId, firestore]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-slate-400">로딩 중...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const levelIndex = Math.min(user.level - 1, 3);
  const levelIcon = LEVEL_ICONS[levelIndex];
  const levelName = LEVEL_NAMES[levelIndex];

  return (
    <>
      <Navbar user={user} currentPage="dashboard" />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* 헤더: 사용자 정보 */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-5xl">{levelIcon}</div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    👋 {user.nickname}님, 환영합니다!
                  </h1>
                  <p className="text-slate-400 text-sm mt-1">
                    Lv.{user.level} {levelName} • 총 {user.totalExp} EXP
                  </p>
                </div>
              </div>

              <div className="hidden md:flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">
                    {user.completedProjects}
                  </div>
                  <div className="text-xs text-slate-400">완료</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">
                    {user.currentStreak}
                  </div>
                  <div className="text-xs text-slate-400">연속</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">
                    {user.level}
                  </div>
                  <div className="text-xs text-slate-400">레벨</div>
                </div>
              </div>
            </div>

            {/* 경험치 바 */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-slate-400">경험치</span>
                <span className="text-xs text-slate-400">
                  {user.totalExp % 100}/100
                </span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full transition-all duration-500"
                  style={{ width: `${(user.totalExp % 100) / 100 * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* 스트릭 경고 */}
          {user.currentStreak === 0 && (
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mb-6 flex items-center gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="text-sm font-medium text-yellow-300">
                  오늘도 미션을 완료하세요!
                </p>
                <p className="text-xs text-yellow-200">
                  연속 진행 기록을 유지하면 추가 보상을 받습니다.
                </p>
              </div>
            </div>
          )}

          {/* 월드맵 */}
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">🗺️ 코드맵</h2>
            <Worldmap regions={regions} completedProjects={user.completedProjects} />
          </div>

          {/* 다음 단계 추천 */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: '💡',
                title: '개념 복습',
                desc: '배운 개념을 다시 확인하세요',
                action: '복습하기',
              },
              {
                icon: '🏆',
                title: '뱃지 수집',
                desc: '특정 조건으로 뱃지를 획득하세요',
                action: '확인하기',
              },
              {
                icon: '👥',
                title: '프로필',
                desc: '당신의 학습 기록을 관리하세요',
                action: '보기',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-blue-500 transition cursor-pointer"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mb-3">{item.desc}</p>
                <button className="text-xs text-blue-400 hover:text-blue-300">
                  {item.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
