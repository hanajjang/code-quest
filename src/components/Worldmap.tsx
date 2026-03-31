// src/components/Worldmap.tsx

'use client';

import { useState } from 'react';
import { Region, Project } from '@/types';
import Link from 'next/link';

interface WorldmapProps {
  regions: Region[];
  completedProjects: number;
}

export default function Worldmap({ regions, completedProjects }: WorldmapProps) {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  // 진행도에 따른 상태 결정
  const getNodeStatus = (project: Project) => {
    if (project.status === 'completed') return 'completed';
    if (project.status === 'in_progress') return 'active';
    return 'locked';
  };

  // 노드 색상
  const getNodeColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 border-green-400';
      case 'active':
        return 'bg-yellow-500 border-yellow-400 animate-pulse';
      default:
        return 'bg-gray-600 border-gray-500';
    }
  };

  // 노드 아이콘
  const getNodeIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'active':
        return '🎯';
      default:
        return '🔒';
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* 진행도 */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-300">전체 진행도</span>
          <span className="text-xs text-slate-400">{completedProjects}/15</span>
        </div>
        <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full transition-all duration-300"
            style={{ width: `${(completedProjects / 15) * 100}%` }}
          />
        </div>
      </div>

      {/* 지역들 */}
      <div className="space-y-8">
        {regions.map((region, regionIdx) => (
          <div key={region.id} className="space-y-3">
            {/* 지역 헤더 */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">{region.emoji}</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-100">
                  {region.name}
                </h3>
                <p className="text-xs text-slate-500">{region.description}</p>
              </div>
              <div className="text-xs text-slate-400">
                {region.projects.filter(p => p.status === 'completed').length}/
                {region.projects.length}
              </div>
            </div>

            {/* 프로젝트 노드 */}
            <div className="grid grid-cols-5 gap-2 px-2">
              {region.projects.map((project) => {
                const status = getNodeStatus(project);
                return (
                  <Link
                    key={project.id}
                    href={
                      status !== 'locked'
                        ? `/workspace/${project.id}`
                        : '#'
                    }
                  >
                    <div
                      className={`aspect-square rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all hover:scale-105 ${getNodeColor(status)} ${
                        status === 'locked'
                          ? 'cursor-not-allowed opacity-50'
                          : ''
                      }`}
                      onClick={() => setSelectedRegion(region)}
                      title={project.title}
                    >
                      <div className="text-center">
                        <div className="text-lg mb-1">
                          {getNodeIcon(status)}
                        </div>
                        <div className="text-xs font-bold text-white drop-shadow">
                          {project.progress || 0}%
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* 지역 진행도 바 */}
            <div className="px-2">
              <div className="bg-slate-700 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-400 h-full transition-all"
                  style={{
                    width: `${region.progress}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 범례 */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 mt-4">
        <div className="text-xs font-semibold text-slate-300 mb-2">범례</div>
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded border border-green-400"></div>
            <span className="text-slate-400">완료</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded border border-yellow-400"></div>
            <span className="text-slate-400">진행중</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-600 rounded border border-gray-500"></div>
            <span className="text-slate-400">잠금</span>
          </div>
        </div>
      </div>

      {/* 선택된 프로젝트 상세 */}
      {selectedRegion && (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-slate-100 mb-3">
            {selectedRegion.name} 프로젝트
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {selectedRegion.projects.map((project) => (
              <Link
                key={project.id}
                href={`/workspace/${project.id}`}
                className="block p-2 bg-slate-700 hover:bg-slate-600 rounded text-xs text-slate-200 transition"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{project.title}</span>
                  <span className="text-slate-400">{project.progress}%</span>
                </div>
                <div className="text-slate-500 text-xs mt-1">
                  {project.concepts.join(', ')}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
