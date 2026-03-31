// src/app/api/ai/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export async function POST(req: NextRequest) {
  try {
    const { message, code, projectTitle } = await req.json();

    if (!message || !projectTitle) {
      return NextResponse.json(
        { error: 'message와 projectTitle은 필수입니다' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // 시스템 프롬프트
    const systemPrompt = `당신은 초보자를 위한 친절한 C/Python 코딩 튜터입니다.
사용자가 "${projectTitle}" 미션을 진행하고 있습니다.

역할:
1. 코드가 올바른지 검사
2. 간단한 힌트 제공 (직접 답변하지 말 것)
3. 개념을 쉽게 설명
4. 격려와 칭찬으로 동기부여

규칙:
- 답변은 3문장 이내
- 이모지를 적절히 사용
- 한국어로 응답
- 초보자 눈높이에 맞춤`;

    // Gemini 호출
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: systemPrompt }],
        },
        {
          role: 'model',
          parts: [{ text: '네, 이해했습니다. 초보자 친화적으로 도움을 드리겠습니다.' }],
        },
      ],
    });

    const userPrompt = `
현재 코드:
\`\`\`
${code || '(코드 없음)'}
\`\`\`

사용자의 질문: ${message}
`;

    const result = await chat.sendMessage(userPrompt);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error('AI 오류:', error);

    // 오류 시 기본 응답
    const defaultResponses: Record<string, string> = {
      '이 코드가 맞나요?': '코드를 실행해서 결과를 확인해보세요! 💻',
      '힌트를 주세요': '핵심은 변수와 함수의 관계를 이해하는 것입니다. 📚',
      '이 코드는 왜 필요한가요?': '이 개념은 앞으로의 프로젝트에서 매우 중요합니다! 🎯',
      '더 자세히 알려주세요': '기본을 차근차근 따라가보세요. 어려운 부분이 있으면 말씀해주세요! 🌟',
    };

    const fallbackResponse = Object.values(defaultResponses)[0];

    return NextResponse.json({
      response: fallbackResponse || '다시 시도해주세요.',
    });
  }
}
