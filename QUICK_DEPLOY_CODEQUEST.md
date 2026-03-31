# 🚀 Code Quest GitHub 배포 빠른 가이드 (5분)

## 📌 사전준비: GitHub 저장소 생성

1. https://github.com 접속
2. 우측 상단 **+** → **New repository**
3. 저장소명: `code-quest`
4. Description: `C언어로 시작하는 코딩 모험 - AI 튜터와 함께 배우기`
5. **Public** 선택
6. **Create repository** 클릭

👉 이 URL을 복사해두세요: `https://github.com/YOUR_USERNAME/code-quest.git`

---

## 💻 Step 1: 로컬 Git 설정 (1분)

```bash
# 프로젝트 폴더에서 실행

# Git 초기화
git init

# Git 유저 설정 (처음 한 번만)
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# 확인
git config --list
```

---

## 📦 Step 2: 파일 커밋 (1분)

```bash
# 모든 파일 추가
git add .

# 커밋 (변경사항 저장)
git commit -m "Initial commit: Code Quest - AI-powered C/Python learning platform"
```

---

## 🚀 Step 3: GitHub 업로드 (1분)

```bash
# GitHub 저장소 연결
git remote add origin https://github.com/YOUR_USERNAME/code-quest.git

# 메인 브랜치 설정
git branch -M main

# GitHub에 업로드
git push -u origin main
```

**YOUR_USERNAME을 실제 GitHub 닉네임으로 바꾸세요!**

✅ GitHub 저장소 페이지 새로고침 → 파일들이 보이면 성공!

---

## 🌐 Step 4: Vercel 배포 (2분)

### 4-1. Vercel 가입 & 배포

```
1. https://vercel.com 접속
2. "Sign Up" → GitHub으로 로그인
3. "Import Project" 클릭
4. GitHub 저장소에서 code-quest 선택
5. Framework: Next.js (자동 감지)
6. "Deploy" 클릭
```

### 4-2. 배포 대기 (1-2분)

Vercel이 자동으로 배포합니다.
진행 상황은 대시보드에서 확인 가능합니다.

**라이브 URL**: `https://code-quest-YOUR_USERNAME.vercel.app`

---

## 🔐 Step 5: 환경 변수 설정 (1분)

### Vercel Dashboard:
```
1. code-quest 프로젝트 선택
2. Settings → Environment Variables
3. 다음 추가:
```

| 변수명 | 값 |
|--------|-----|
| NEXT_PUBLIC_FIREBASE_API_KEY | (Firebase에서 복사) |
| NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN | YOUR_PROJECT.firebaseapp.com |
| NEXT_PUBLIC_FIREBASE_PROJECT_ID | (Firebase에서 복사) |
| NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET | YOUR_PROJECT.appspot.com |
| NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID | (Firebase에서 복사) |
| NEXT_PUBLIC_FIREBASE_APP_ID | (Firebase에서 복사) |
| NEXT_PUBLIC_GEMINI_API_KEY | (Google AI Studio에서 복사) |

4. Save 클릭 → 자동 재배포

---

## 🎉 완료!

### 확인하기:
- GitHub: https://github.com/YOUR_USERNAME/code-quest
- 라이브 앱: https://code-quest-YOUR_USERNAME.vercel.app

### 앞으로 업데이트할 때:
```bash
# 코드 수정 후

git add .
git commit -m "기능 추가: 설명"
git push origin main

# 1-2분 후 자동으로 Vercel에 배포됨
```

---

## 🆘 자주 묻는 질문

### Q: "fatal: remote origin already exists" 에러
```bash
# 기존 연결 제거
git remote remove origin

# 다시 추가
git remote add origin https://github.com/YOUR_USERNAME/code-quest.git
```

### Q: "Permission denied" 에러
```bash
# SSH key 설정 필요

# 1. SSH key 생성
ssh-keygen -t ed25519 -C "your@email.com"

# 2. 공개키 확인
cat ~/.ssh/id_ed25519.pub

# 3. GitHub Settings → SSH Keys → New SSH key
# 4. 공개키 붙여넣기
```

### Q: Vercel 배포 실패
→ Vercel Dashboard → Deployments → 실패한 배포 → Build Output 확인

### Q: Firebase 정보는 어디서?
1. Firebase Console 접속
2. 프로젝트 선택
3. Settings (톱니바퀴 아이콘)
4. 일반 탭 → 프로젝트 정보 확인

---

## 📊 배포 후 확인할 것

- [ ] 라이브 앱 접속 가능?
- [ ] 닉네임 입력 후 대시보드 보임?
- [ ] 코드 실행(Run) 작동?
- [ ] AI 응답 받음?
- [ ] Firestore에 데이터 저장됨?

모두 ✓이면 성공! 🎉

---

## 🎯 다음 단계

1. **친구들과 공유**
   ```
   라이브 URL 공유: https://code-quest-YOUR_USERNAME.vercel.app
   ```

2. **GitHub Star 받기**
   ```
   README.md 개선
   Issues/Discussions 활성화
   ```

3. **포트폴리오에 추가**
   ```
   이력서/포트폴리오: GitHub 링크
   취업 면접: 이 프로젝트 소개
   ```

4. **계속 개발**
   ```
   JavaScript 언어 추가
   모바일 최적화
   추가 프로젝트
   ```
