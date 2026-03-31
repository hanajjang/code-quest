# 🚀 Code Quest - 최신 32개 파일 완전 리스트

## 📋 전체 파일 목록

### 1️⃣ 루트 폴더 설정 파일 (7개)
| 파일명 | 설명 | 다운로드 |
|--------|------|---------|
| `package.json` | npm 의존성 관리 | ✅ |
| `next.config.js` | Next.js 설정 | ✅ |
| `tsconfig.json` | TypeScript 설정 | ✅ |
| `tailwind.config.js` | Tailwind CSS 설정 | ✅ |
| `.env.local` | 환경 변수 (개인용) | ✅ |
| `.gitignore` | Git 무시 파일 | ✅ |
| `README.md` | 프로젝트 설명 | ✅ |

### 2️⃣ TypeScript 타입 (1개)
| 파일명 | 경로 | 설명 |
|--------|------|------|
| `index.ts` | `src/types/` | 모든 타입 정의 |

### 3️⃣ 라이브러리 및 유틸 (3개)
| 파일명 | 경로 | 설명 |
|--------|------|------|
| `firebase.ts` | `src/lib/` | Firebase 초기화 |
| `constants.ts` | `src/lib/` | 15개 프로젝트 + 뱃지 |
| `compilers.ts` | `src/lib/` | C/Python/JS 실행 엔진 |

### 4️⃣ React Hooks (2개)
| 파일명 | 경로 | 설명 |
|--------|------|------|
| `useUser.ts` | `src/hooks/` | 사용자 관리 (Device ID) |
| `useFirestore.ts` | `src/hooks/` | Firestore CRUD |

### 5️⃣ React 컴포넌트 (6개)
| 파일명 | 경로 | 설명 |
|--------|------|------|
| `Editor.tsx` | `src/components/` | Monaco Editor |
| `Terminal.tsx` | `src/components/` | 코드 실행 결과 |
| `AIPanel.tsx` | `src/components/` | AI 튜터 |
| `Worldmap.tsx` | `src/components/` | 월드맵 |
| `Navbar.tsx` | `src/components/` | 네비게이션 바 |
| `RewardPopup.tsx` | `src/components/` | 보상 팝업 |

### 6️⃣ Next.js 페이지 (7개)
| 파일명 | 경로 | 설명 |
|--------|------|------|
| `layout.tsx` | `src/app/` | 루트 레이아웃 |
| `page.tsx` | `src/app/` | 랜딩 페이지 |
| `globals.css` | `src/app/` | 전역 CSS |
| `route.ts` | `src/app/api/ai/` | Gemini API |
| `page.tsx` | `src/app/dashboard/` | 대시보드 |
| `page.tsx` | `src/app/workspace/[projectId]/` | 워크스페이스 |

### 7️⃣ 스타일 (1개)
| 파일명 | 경로 | 설명 |
|--------|------|------|
| `globals.css` | `src/styles/` | 전역 스타일 |

### 8️⃣ 가이드 문서 (4개)
| 파일명 | 설명 |
|--------|------|
| `FILE_PLACEMENT_GUIDE.md` | 파일 배치 안내 (이 가이드) |
| `SIMPLE_DOWNLOAD_SETUP.md` | 간단한 다운로드 설정 |
| `QUICK_DEPLOY_CODEQUEST.md` | GitHub 배포 5분 가이드 |
| `CODEQUEST_DEPLOYMENT_READY.md` | 최종 배포 체크리스트 |

---

## 📥 다운로드 순서

### Step 1: 루트 폴더에 저장 (7개)
```
code-quest/
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
├── .env.local
├── .gitignore
└── README.md
```

### Step 2: src/types/ 폴더 생성 및 저장 (1개)
```
src/types/
└── index.ts
```

### Step 3: src/lib/ 폴더 생성 및 저장 (3개)
```
src/lib/
├── firebase.ts
├── constants.ts
└── compilers.ts
```

### Step 4: src/hooks/ 폴더 생성 및 저장 (2개)
```
src/hooks/
├── useUser.ts
└── useFirestore.ts
```

### Step 5: src/components/ 폴더 생성 및 저장 (6개)
```
src/components/
├── Editor.tsx
├── Terminal.tsx
├── AIPanel.tsx
├── Worldmap.tsx
├── Navbar.tsx
└── RewardPopup.tsx
```

### Step 6: src/app/ 폴더 생성 및 저장 (7개)
```
src/app/
├── layout.tsx
├── page.tsx
├── globals.css
├── api/
│   └── ai/
│       └── route.ts
├── dashboard/
│   └── page.tsx
└── workspace/
    └── [projectId]/
        └── page.tsx
```

### Step 7: src/styles/ 폴더 생성 및 저장 (1개)
```
src/styles/
└── globals.css
```

### Step 8: 가이드 문서 저장 (4개) - 선택사항
```
code-quest/
├── FILE_PLACEMENT_GUIDE.md
├── SIMPLE_DOWNLOAD_SETUP.md
├── QUICK_DEPLOY_CODEQUEST.md
└── CODEQUEST_DEPLOYMENT_READY.md
```

---

## ✅ 파일 배치 완료 확인

모든 파일을 배치한 후:

```bash
# 의존성 설치
cd code-quest
npm install

# 빌드 테스트
npm run build

# 개발 서버 실행
npm run dev
```

에러 없으면 설정 완료! ✅

---

## 🚀 다음 단계

1. ✅ 32개 파일 다운로드 완료
2. ✅ 폴더 구조대로 배치 완료
3. ✅ npm install 완료
4. ✅ npm run dev 실행 완료

이제 **GitHub에 올리고 Vercel에 배포하면 끝!** 🎉

---

## 📊 총 파일 개수

- 루트 설정: 7개
- 타입: 1개
- 라이브러리: 3개
- Hooks: 2개
- 컴포넌트: 6개
- 페이지: 7개
- 스타일: 1개
- 가이드: 4개

**= 총 32개 파일** ✅

---

## 💡 팁

- 파일명을 정확하게 저장하세요
- 폴더 구조를 정확하게 따라가세요
- .env.local에 API 키를 입력하세요
- 문제 발생 시 이 가이드를 다시 확인하세요
