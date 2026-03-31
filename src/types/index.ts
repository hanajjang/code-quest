// src/types/index.ts

// ============= 사용자 관련 =============
export interface User {
  deviceId: string;
  nickname: string;
  level: number;
  totalExp: number;
  completedProjects: number;
  currentStreak: number;
  createdAt: Date;
  lastUpdated: Date;
}

// ============= 프로젝트 관련 =============
export type Language = 'c' | 'python' | 'javascript';
export type ProjectStatus = 'not_started' | 'in_progress' | 'completed';

export interface Project {
  id: string;
  title: string;
  description: string;
  language: Language;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  code: string;
  progress: number; // 0-100
  status: ProjectStatus;
  steps: ProjectStep[];
  concepts: string[];
  completedAt?: Date;
  createdAt: Date;
  lastSaved: Date;
}

export interface ProjectStep {
  stepNumber: number;
  title: string;
  description: string;
  completed: boolean;
}

// ============= 뱃지 & 통계 =============
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: Date;
  requirement: string;
}

export interface UserStats {
  totalHours: number;
  completedProjects: number;
  learnedConcepts: number;
  currentStreak: number;
  badges: Badge[];
  lastUpdated: Date;
}

// ============= AI & 코드 실행 =============
export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface CompileResult {
  success: boolean;
  output: string;
  error?: string;
  executionTime: number; // ms
}

export interface ExecuteCodeRequest {
  language: Language;
  code: string;
  timeout?: number; // ms
}

// ============= Firestore 문서 구조 =============
export interface FirestoreUser extends Omit<User, 'createdAt' | 'lastUpdated'> {
  createdAt: any; // Firestore Timestamp
  lastUpdated: any;
}

export interface FirestoreProject extends Omit<Project, 'createdAt' | 'lastSaved'> {
  createdAt: any;
  lastSaved: any;
}

// ============= 월드맵 관련 =============
export interface Region {
  id: string;
  name: string;
  emoji: string;
  description: string;
  projects: Project[];
  progress: number; // 0-100
  status: 'completed' | 'in_progress' | 'locked';
  prerequisites?: string[]; // Region IDs
}

// ============= 로컬 상태 =============
export interface LocalState {
  user: User | null;
  currentProject: Project | null;
  regions: Region[];
  stats: UserStats | null;
  lastSyncTime: Date;
}
