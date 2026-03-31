# 🚀 Code Quest - 초간단 셋업 (다운로드 방법)

## ✅ 네, 맞습니다! 

파일을 직접 다운받아서 폴더를 만들고 설정하면 됩니다.

---

## 📥 다운로드 방법 (3가지)

### 🟢 **방법 1: 가장 간단 (추천)** ⭐

**1단계: 폴더 생성**
```bash
# Windows: 명령 프롬프트
mkdir code-quest
cd code-quest

# Mac/Linux: 터미널
mkdir code-quest
cd code-quest
```

**2단계: 파일 다운로드 (아래 파일들을 다운로드해서 저장)**

| 파일명 | 위치 |
|--------|------|
| `package.json` | 루트 폴더 |
| `next.config.js` | 루트 폴더 |
| `tsconfig.json` | 루트 폴더 |
| `tailwind.config.js` | 루트 폴더 |
| `.env.local` | 루트 폴더 |
| `.gitignore` | 루트 폴더 |
| `README_CODEQUEST.md` | 루트 폴더 → `README.md` 이름 변경 |

#### src 폴더 구조
```
src/
├── types/
│   └── index.ts
├── lib/
│   ├── firebase.ts
│   ├── constants.ts
│   └── compilers.ts
├── hooks/
│   ├── useUser.ts
│   └── useFirestore.ts
├── components/
│   ├── Editor.tsx
│   ├── Terminal.tsx
│   ├── AIPanel.tsx
│   ├── Worldmap.tsx
│   ├── Navbar.tsx
│   └── RewardPopup.tsx
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── api/ai/route.ts
│   ├── dashboard/page.tsx
│   └── workspace/[projectId]/page.tsx
└── styles/
    └── globals.css
```

---

## 🟡 **방법 2: Git에서 클론** (빠름)

이미 GitHub에 올려져 있으면:

```bash
git clone https://github.com/YOUR_USERNAME/code-quest.git
cd code-quest
npm install
npm run dev
```

---

## 🔴 **방법 3: ZIP 파일 다운로드** (편함)

GitHub → Code → Download ZIP → 압축 해제

---

## ⚙️ 설정 (동일)

### Step 1: 의존성 설치
```bash
cd code-quest
npm install
```

### Step 2: 환경 변수 설정

`.env.local` 파일 수정:
```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
NEXT_PUBLIC_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

### Step 3: 실행
```bash
npm run dev
```

→ `http://localhost:3000` 접속 ✅

---

## 📊 파일 다운로드 체크리스트

### 기본 설정 (7개)
- [ ] package.json
- [ ] next.config.js
- [ ] tsconfig.json
- [ ] tailwind.config.js
- [ ] .env.local
- [ ] .gitignore
- [ ] README.md (또는 README_CODEQUEST.md)

### 타입 & 라이브러리 (6개)
- [ ] src/types/index.ts
- [ ] src/lib/firebase.ts
- [ ] src/lib/constants.ts
- [ ] src/lib/compilers.ts
- [ ] src/hooks/useUser.ts
- [ ] src/hooks/useFirestore.ts

### 컴포넌트 (6개)
- [ ] src/components/Editor.tsx
- [ ] src/components/Terminal.tsx
- [ ] src/components/AIPanel.tsx
- [ ] src/components/Worldmap.tsx
- [ ] src/components/Navbar.tsx
- [ ] src/components/RewardPopup.tsx

### 페이지 (5개)
- [ ] src/app/layout.tsx
- [ ] src/app/page.tsx
- [ ] src/app/api/ai/route.ts
- [ ] src/app/dashboard/page.tsx
- [ ] src/app/workspace/[projectId]/page.tsx

### 스타일 (1개)
- [ ] src/styles/globals.css

**총 32개 파일**

---

## 🎯 완료 확인

```bash
npm run build
```

에러 없으면 설정 완료! ✅

---

## 💡 팁

### 폴더 구조를 한번에 만들기
```bash
# Windows
mkdir code-quest\src\types
mkdir code-quest\src\lib
mkdir code-quest\src\hooks
mkdir code-quest\src\components
mkdir code-quest\src\app\api\ai
mkdir code-quest\src\app\dashboard
mkdir code-quest\src\app\workspace\[projectId]
mkdir code-quest\src\styles

# Mac/Linux
mkdir -p code-quest/src/{types,lib,hooks,components,app/{api/ai,dashboard,"workspace/[projectId]"},styles}
```

### 파일명 주의
- `README_CODEQUEST.md` → `README.md` 이름 변경
- 파일명 정확하게 (예: `useUser.ts`는 `useuser.ts` X)
- 확장자 정확하게 (`.ts`, `.tsx`, `.js` 구분)

---

## ✨ 모든 준비 완료!

1. ✅ 파일 다운로드 완료
2. ✅ npm install 완료
3. ✅ 환경 변수 설정 완료
4. ✅ npm run dev 실행

이제 **GitHub에 올리고 Vercel에 배포하면 끝!** 🚀

---

## 🚀 GitHub 배포 (5분)

```bash
# 1. Git 초기화
git init

# 2. 유저 설정
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# 3. GitHub 저장소 생성 (github.com)
# Repository name: code-quest

# 4. 파일 추가
git add .
git commit -m "Initial commit: Code Quest"

# 5. GitHub 연결
git remote add origin https://github.com/YOUR_USERNAME/code-quest.git
git branch -M main
git push -u origin main

# 6. Vercel 배포
# → Vercel.com → Import Project → code-quest → Deploy
# → 환경 변수 설정 → 완료!
```

---

## 📞 이제 뭘 해요?

1. **파일 다운로드** 👈 지금 여기
2. **npm install** → `npm run dev`
3. **로컬 테스트** → `http://localhost:3000`
4. **GitHub 업로드** → `git push`
5. **Vercel 배포** → 라이브 URL 획득!

모든 준비가 완료되었습니다! 🎉
