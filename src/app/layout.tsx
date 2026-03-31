// src/app/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Code Quest',
  description: 'C언어로 시작하는 코딩 모험',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
