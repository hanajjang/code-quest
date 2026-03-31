// src/components/Editor.tsx

'use client';

import { useEffect, useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { Language } from '@/types';

interface EditorProps {
  language: Language;
  code: string;
  onChange: (code: string) => void;
  onRun?: () => void;
  height?: string;
}

export default function CodeEditor({
  language,
  code,
  onChange,
  onRun,
  height = '100%',
}: EditorProps) {
  const editorRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Monaco 에디터 마운트
  const handleEditorMount = (editor: any) => {
    editorRef.current = editor;

    // 커스텀 단축키
    editor.addCommand(
      // Ctrl+Enter = Run
      2048 | 3, // Ctrl + Enter
      () => onRun?.()
    );

    // Ctrl+S = Save (기본값이지만 명시적으로)
    editor.addCommand(
      2048 | 49, // Ctrl + S
      () => {
        // localStorage에 저장하는 로직은 부모에서 처리
      }
    );
  };

  // 언어 매핑
  const languageMap: Record<Language, string> = {
    c: 'c',
    python: 'python',
    javascript: 'javascript',
  };

  if (!isMounted) {
    return <div className="w-full h-full bg-slate-900 flex items-center justify-center" />;
  }

  return (
    <Editor
      ref={editorRef}
      height={height}
      language={languageMap[language]}
      value={code}
      onChange={(value) => onChange(value || '')}
      onMount={handleEditorMount}
      theme="vs-dark"
      options={{
        fontSize: 14,
        fontFamily: 'Courier New, monospace',
        minimap: { enabled: true },
        wordWrap: 'on',
        autoClosingBrackets: 'always',
        autoClosingQuotes: 'always',
        formatOnPaste: true,
        formatOnType: true,
        scrollBeyondLastLine: false,
        padding: { top: 16, bottom: 16 },
        lineNumbers: 'on',
        glyphMargin: true,
        folding: true,
        lineDecorationsWidth: 10,
        lineNumbersMinChars: 3,
      }}
    />
  );
}
