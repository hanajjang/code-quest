// src/app/layout.tsx

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Code Horizon - C언어로 시작하는 코딩 모험',
  description: 'AI 튜터와 함께 프로젝트 기반으로 배우는 코딩 학습 플랫폼',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '🚀',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-slate-900 text-slate-100">
        {children}
      </body>
    </html>
  );
}
