// src/hooks/useFirestore.ts

import { useCallback, useState } from 'react';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Project, User, Badge, UserStats } from '@/types';
import { FIRESTORE_SYNC_INTERVAL } from '@/lib/constants';

/**
 * Firestore CRUD 작업
 * 자동 스케줄링으로 3초마다 데이터 동기화
 */
export function useFirestore(deviceId: string) {
  const [syncing, setSyncing] = useState(false);

  // ============= 사용자 =============

  const saveUser = useCallback(
    async (user: User) => {
      try {
        await setDoc(doc(db, 'users', deviceId), {
          ...user,
          lastUpdated: new Date(),
        });
      } catch (error) {
        console.error('사용자 저장 실패:', error);
      }
    },
    [deviceId]
  );

  const loadUser = useCallback(async () => {
    try {
      const snap = await getDoc(doc(db, 'users', deviceId));
      return snap.exists() ? (snap.data() as User) : null;
    } catch (error) {
      console.error('사용자 로드 실패:', error);
      return null;
    }
  }, [deviceId]);

  // ============= 프로젝트 =============

  const saveProject = useCallback(
    async (projectId: string, project: Project) => {
      try {
        await setDoc(
          doc(db, 'users', deviceId, 'projects', projectId),
          {
            ...project,
            lastSaved: new Date(),
          },
          { merge: true }
        );
      } catch (error) {
        console.error('프로젝트 저장 실패:', error);
      }
    },
    [deviceId]
  );

  const loadProject = useCallback(
    async (projectId: string) => {
      try {
        const snap = await getDoc(
          doc(db, 'users', deviceId, 'projects', projectId)
        );
        return snap.exists() ? (snap.data() as Project) : null;
      } catch (error) {
        console.error('프로젝트 로드 실패:', error);
        return null;
      }
    },
    [deviceId]
  );

  const loadAllProjects = useCallback(async () => {
    try {
      const snap = await getDocs(
        collection(db, 'users', deviceId, 'projects')
      );
      return snap.docs.map((doc) => doc.data() as Project);
    } catch (error) {
      console.error('모든 프로젝트 로드 실패:', error);
      return [];
    }
  }, [deviceId]);

  // ============= 통계 =============

  const saveStats = useCallback(
    async (stats: UserStats) => {
      try {
        await setDoc(doc(db, 'stats', deviceId), stats);
      } catch (error) {
        console.error('통계 저장 실패:', error);
      }
    },
    [deviceId]
  );

  const loadStats = useCallback(async () => {
    try {
      const snap = await getDoc(doc(db, 'stats', deviceId));
      return snap.exists() ? (snap.data() as UserStats) : null;
    } catch (error) {
      console.error('통계 로드 실패:', error);
      return null;
    }
  }, [deviceId]);

  // ============= 뱃지 =============

  const earnBadge = useCallback(
    async (badgeId: string) => {
      try {
        await setDoc(
          doc(db, 'users', deviceId, 'badges', badgeId),
          {
            earned: true,
            earnedAt: new Date(),
          }
        );
      } catch (error) {
        console.error('뱃지 저장 실패:', error);
      }
    },
    [deviceId]
  );

  // ============= 자동 동기화 =============

  const syncUserData = useCallback(
    async (user: User, stats: UserStats) => {
      if (syncing) return;

      setSyncing(true);
      try {
        await Promise.all([saveUser(user), saveStats(stats)]);
      } finally {
        setSyncing(false);
      }
    },
    [saveUser, saveStats, syncing]
  );

  return {
    // 사용자
    saveUser,
    loadUser,
    // 프로젝트
    saveProject,
    loadProject,
    loadAllProjects,
    // 통계
    saveStats,
    loadStats,
    // 뱃지
    earnBadge,
    // 동기화
    syncUserData,
    syncing,
  };
}
