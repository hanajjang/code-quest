# Code Quest - 파일 배치 안내

## 📁 폴더 구조 (정확하게 따라하세요!)

```
code-quest/
├── package.json                           ← package_json_codequest.json
├── next.config.js                         ← next.config.js
├── tsconfig.json                          ← tsconfig.json
├── tailwind.config.js                     ← tailwind.config.js
├── .env.local                             ← .env.local
├── .gitignore                             ← .gitignore
├── README.md                              ← README_CODEQUEST.md 이름 변경
│
├── src/
│   ├── types/
│   │   └── index.ts                       ← types_index.ts
│   │
│   ├── lib/
│   │   ├── firebase.ts                    ← lib_firebase.ts
│   │   ├── constants.ts                   ← lib_constants.ts
│   │   └── compilers.ts                   ← lib_compilers.ts
│   │
│   ├── hooks/
│   │   ├── useUser.ts                     ← hooks_useUser.ts
│   │   └── useFirestore.ts                ← hooks_useFirestore.ts
│   │
│   ├── components/
│   │   ├── Editor.tsx                     ← components_Editor.tsx
│   │   ├── Terminal.tsx                   ← components_Terminal.tsx
│   │   ├── AIPanel.tsx                    ← components_AIPanel.tsx
│   │   ├── Worldmap.tsx                   ← components_Worldmap.tsx
│   │   ├── Navbar.tsx                     ← components_Navbar.tsx
│   │   └── RewardPopup.tsx                ← components_RewardPopup.tsx
│   │
│   ├── app/
│   │   ├── layout.tsx                     ← app_layout.tsx
│   │   ├── page.tsx                       ← app_page.tsx
│   │   ├── globals.css                    ← app_page.tsx와 동시에 있어야함
│   │   │
│   │   ├── api/
│   │   │   └── ai/
│   │   │       └── route.ts               ← app_api_ai_route.ts
│   │   │
│   │   ├── dashboard/
│   │   │   └── page.tsx                   ← app_dashboard_page.tsx
│   │   │
│   │   └── workspace/
│   │       └── [projectId]/
│   │           └── page.tsx               ← app_workspace_projectId_page.tsx
│   │
│   └── styles/
│       └── globals.css                    ← src_styles_globals.css
│
├── 가이드 문서들:
│   ├── SIMPLE_DOWNLOAD_SETUP.md           (배포 가이드)
│   ├── QUICK_DEPLOY_CODEQUEST.md          (GitHub 배포 5분)
│   └── CODEQUEST_DEPLOYMENT_READY.md      (최종 체크리스트)
```

---

## 📥 파일 다운로드 32개 체크리스트

### 루트 폴더 (7개)
- [ ] `package_json_codequest.json` → `package.json` 이름 변경
- [ ] `next.config.js`
- [ ] `tsconfig.json`
- [ ] `tailwind.config.js`
- [ ] `.env.local`
- [ ] `.gitignore`
- [ ] `README_CODEQUEST.md` → `README.md` 이름 변경

### src/types/ (1개)
- [ ] `src_types_index.ts` → `src/types/index.ts`

### src/lib/ (3개)
- [ ] `lib_firebase.ts` → `src/lib/firebase.ts`
- [ ] `lib_constants.ts` → `src/lib/constants.ts`
- [ ] `lib_compilers.ts` → `src/lib/compilers.ts`

### src/hooks/ (2개)
- [ ] `hooks_useUser.ts` → `src/hooks/useUser.ts`
- [ ] `hooks_useFirestore.ts` → `src/hooks/useFirestore.ts`

### src/components/ (6개)
- [ ] `components_Editor.tsx` → `src/components/Editor.tsx`
- [ ] `components_Terminal.tsx` → `src/components/Terminal.tsx`
- [ ] `components_AIPanel.tsx` → `src/components/AIPanel.tsx`
- [ ] `components_Worldmap.tsx` → `src/components/Worldmap.tsx`
- [ ] `components_Navbar.tsx` → `src/components/Navbar.tsx`
- [ ] `components_RewardPopup.tsx` → `src/components/RewardPopup.tsx`

### src/app/ (7개)
- [ ] `app_layout.tsx` → `src/app/layout.tsx`
- [ x] `app_page.tsx` → `src/app/page.tsx`
- [ ] `src_styles_globals.css` → `src/app/globals.css`
- [ ] `app_api_ai_route.ts` → `src/app/api/ai/route.ts`
- [ ] `app_dashboard_page.tsx` → `src/app/dashboard/page.tsx`
- [ ] `app_workspace_projectId_page.tsx` → `src/app/workspace/[projectId]/page.tsx`

### src/styles/ (1개)
- [ ] `src_styles_globals.css` → `src/styles/globals.css`

### 가이드 문서 (3개)
- [ ] `SIMPLE_DOWNLOAD_SETUP.md`
- [ ] `QUICK_DEPLOY_CODEQUEST.md`
- [ ] `CODEQUEST_DEPLOYMENT_READY.md`

### 추가 파일 (1개)
- [ ] 이 파일 (FILE_PLACEMENT_GUIDE.md)

---

## ⚠️ 주의사항

### 파일명 정확하게 저장!
- ✅ `index.ts` (정확)
- ❌ `index.js` (틀림)
- ✅ `useUser.ts` (정확)
- ❌ `useuser.ts` (틀림)
- ✅ `[projectId]` (정확, 대괄호 포함)
- ❌ `projectId` (틀림)

### 확장자 확인!
- `.ts` = TypeScript 파일
- `.tsx` = React TypeScript 파일
- `.js` = JavaScript 파일
- `.css` = 스타일 파일
- `.json` = JSON 파일
- `.md` = 마크다운 문서

### 특수 파일
- `.env.local` = 점(.)으로 시작 (숨김 파일)
- `.gitignore` = 점(.)으로 시작 (숨김 파일)

---

## ✅ 설치 후 확인

모든 파일을 배치한 후:

```bash
cd code-quest
npm install
npm run build
```

에러 없으면 성공! ✅

---

## 🚀 다음 단계

```bash
npm run dev
```

→ `http://localhost:3000` 접속 → 완료! 🎉
