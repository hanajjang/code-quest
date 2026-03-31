# Code Quest 🚀

**C언어로 시작하는 코딩 모험** - AI 튜터와 함께하는 프로젝트 기반 학습 플랫폼

## 🎯 기능

- 🤖 **Gemini AI 튜터**: 실시간 코드 리뷰 및 힌트
- 📚 **15개 프로젝트**: C(5개) + Python(10개) 커리큘럼
- 🎮 **게임화된 경험**: 경험치, 뱃지, 스트릭 시스템
- 💻 **WebAssembly 실행**: 브라우저에서 C 코드 컴파일 & 실행
- 🔄 **자동 저장**: 3초마다 Firestore에 자동 동기화
- 📱 **반응형**: PC/태블릿 최적화 (모바일 추후)

## 🛠️ 기술 스택

| 계층 | 기술 |
|------|------|
| **프론트엔드** | Next.js 14, React 18, TypeScript, Tailwind CSS |
| **에디터** | Monaco Editor (@monaco-editor/react) |
| **코드 실행** | Emscripten (C), Pyodide (Python), Native (JavaScript) |
| **AI** | Gemini 2.0 Flash (Vercel Functions) |
| **데이터** | Firestore (클라우드) + localStorage (로컬) |
| **호스팅** | Vercel |

## 📋 설치 가이드

### 1. 환경 준비

```bash
# Node.js 18+ 필수
node --version

# 저장소 클론
git clone <repository-url>
cd code-quest

# 의존성 설치
npm install
```

### 2. Firebase 설정

1. [Firebase Console](https://console.firebase.google.com) 접속
2. 새 프로젝트 생성
3. Firestore Database 활성화 (Asia-Southeast1)
4. 프로젝트 설정에서 API 키 복사

### 3. Gemini API 설정

1. [Google AI Studio](https://aistudio.google.com) 접속
2. API 키 생성
3. **필수**: Gemini 2.0 Flash 모델 접근권한 확인

### 4. 환경 변수 설정

`.env.local` 파일 생성:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx

# Gemini
NEXT_PUBLIC_GEMINI_API_KEY=xxx
```

### 5. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

## 🚀 배포 (Vercel)

```bash
# 1. Vercel CLI 설치
npm install -g vercel

# 2. 로그인
vercel login

# 3. 배포
vercel

# 4. 환경 변수 설정 (Vercel Dashboard)
# Settings > Environment Variables에서 .env.local 값 입력
```

## 📁 폴더 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 랜딩 페이지
│   ├── dashboard/
│   │   └── page.tsx        # 월드맵 & 진행도
│   ├── workspace/
│   │   └── [projectId]/page.tsx  # 코드 에디터
│   └── api/
│       └── ai/route.ts     # Gemini API
├── components/
│   ├── Navbar.tsx
│   ├── Editor.tsx          # Monaco Editor
│   ├── Terminal.tsx        # 실행 결과
│   ├── AIPanel.tsx         # AI 튜터
│   ├── Worldmap.tsx        # 월드맵
│   └── RewardPopup.tsx     # 보상 팝업
├── hooks/
│   ├── useUser.ts          # 사용자 관리
│   └── useFirestore.ts     # Firestore CRUD
├── lib/
│   ├── firebase.ts         # Firebase 초기화
│   ├── constants.ts        # 프로젝트 & 뱃지 데이터
│   ├── compilers.ts        # C/Python/JS 실행
│   └── gemini.ts           # Gemini AI 유틸
├── types/
│   └── index.ts            # TypeScript 타입
└── styles/
    └── globals.css         # 전역 스타일
```

## 🎓 사용 흐름

1. **랜딩** (`/`) → 닉네임 입력
2. **대시보드** (`/dashboard`) → 월드맵 & 진행도 확인
3. **워크스페이스** (`/workspace/[projectId]`) → 코드 작성 & 실행
4. **완료** → 경험치 획득 & 다음 미션

## 💡 주요 기능 상세

### AI 튜터
- **검사**: 현재 코드가 올바른지 확인
- **힌트**: 작은 힌트 제공
- **설명**: 개념 설명
- **상세**: 더 자세한 설명

### 보상 시스템
| 항목 | 획득 조건 |
|------|---------|
| ⚡ 경험치 | 프로젝트 완료 시 +15 |
| 📚 개념 | 새로운 개념 학습 |
| 🏅 뱃지 | 특정 조건 달성 |
| 🔥 스트릭 | 매일 미션 완료 |

### 데이터 저장
- **로컬**: localStorage (즉시 저장)
- **클라우드**: Firestore (3초마다 자동 동기화)
- **Device ID**: 로그인 없이 기기별 추적

## ⚠️ 알려진 제한사항

1. **모바일**: 아직 미지원 (PC/태블릭 추후 최적화)
2. **Python 라이브러리**: numpy, pandas 등 미지원
3. **C 기능**: stdio.h, stdlib.h 등 기본 라이브러리만 지원

## 🐛 버그 리포트

Issue를 통해 버그를 리포트해주세요.

## 📝 라이선스

MIT License - 자유로이 사용, 수정, 배포 가능

## 🙏 크레딧

- [Emscripten](https://emscripten.org) - C to WebAssembly
- [Pyodide](https://pyodide.org) - Python for the browser
- [Monaco Editor](https://microsoft.github.io/monaco-editor) - Code editor
- [Gemini AI](https://ai.google.dev) - AI tutor
- [Firebase](https://firebase.google.com) - Backend & Database
- [Vercel](https://vercel.com) - Hosting
