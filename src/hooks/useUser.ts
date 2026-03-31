// src/hooks/useUser.ts

import { useState, useEffect } from 'react';
import { User } from '@/types';
import { DEFAULT_USER } from '@/lib/constants';

/**
 * Device ID 기반 사용자 관리
 * 로컬스토리지에서 Device ID를 가져오거나 생성
 */
export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // 첫 마운트 시 Device ID 초기화
  useEffect(() => {
    const initializeUser = () => {
      let deviceId = localStorage.getItem('deviceId');

      if (!deviceId) {
        // Device ID 생성 (UUID 대신 간단한 ID)
        deviceId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('deviceId', deviceId);
      }

      // 로컬스토리지에서 사용자 정보 로드
      const savedUser = localStorage.getItem('user');
      const currentUser: User = savedUser
        ? JSON.parse(savedUser)
        : {
            ...DEFAULT_USER,
            deviceId,
          };

      setUser(currentUser);
      setLoading(false);
    };

    initializeUser();
  }, []);

  // 사용자 정보 업데이트 (로컬스토리지 + 상태)
  const updateUser = (updates: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = { ...prev, ...updates, lastUpdated: new Date() };
      localStorage.setItem('user', JSON.stringify(updated));
      return updated;
    });
  };

  // 닉네임 설정
  const setNickname = (nickname: string) => {
    updateUser({ nickname });
  };

  // 레벨 업데이트 (경험치 기반)
  const addExp = (exp: number) => {
    setUser((prev) => {
      if (!prev) return null;

      const newExp = prev.totalExp + exp;
      const newLevel = Math.floor(newExp / 100) + 1; // 100 exp = 1 레벨

      const updated: User = {
        ...prev,
        totalExp: newExp,
        level: newLevel,
        lastUpdated: new Date(),
      };

      localStorage.setItem('user', JSON.stringify(updated));
      return updated;
    });
  };

  // 완료 프로젝트 증가
  const incrementCompletedProjects = () => {
    updateUser({ completedProjects: (user?.completedProjects || 0) + 1 });
  };

  // 스트릭 업데이트
  const setStreak = (streak: number) => {
    updateUser({ currentStreak: streak });
  };

  return {
    user,
    loading,
    updateUser,
    setNickname,
    addExp,
    incrementCompletedProjects,
    setStreak,
  };
}
