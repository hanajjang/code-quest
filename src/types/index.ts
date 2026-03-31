// src/types/index.ts

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
  progress: number;
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

export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface CompileResult {
  success: boolean;
  output: string;
  error?: string;
  executionTime: number;
}

export interface ExecuteCodeRequest {
  language: Language;
  code: string;
  timeout?: number;
}

export interface FirestoreUser extends Omit<User, 'createdAt' | 'lastUpdated'> {
  createdAt: any;
  lastUpdated: any;
}

export interface FirestoreProject extends Omit<Project, 'createdAt' | 'lastSaved'> {
  createdAt: any;
  lastSaved: any;
}

export interface Region {
  id: string;
  name: string;
  emoji: string;
  description: string;
  projects: Project[];
  progress: number;
  status: 'completed' | 'in_progress' | 'locked';
  prerequisites?: string[];
}

export interface LocalState {
  user: User | null;
  currentProject: Project | null;
  regions: Region[];
  stats: UserStats | null;
  lastSyncTime: Date;
}
