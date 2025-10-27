
import React, { useState, useEffect, useRef } from 'react';
import { ClipboardCopyIcon, CheckIcon } from './Icons';

declare global {
    interface Window {
        hljs: any;
    }
}

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
        window.hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-[#282c34] rounded-lg my-6 relative font-mono text-sm">
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
        <span className="text-gray-400">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
        >
          {isCopied ? (
            <>
              <CheckIcon className="h-4 w-4 text-green-400" />
              <span>Copiado!</span>
            </>
          ) : (
            <>
              <ClipboardCopyIcon className="h-4 w-4" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4"><code ref={codeRef} className={`language-${language}`}>
        {code.trim()}
      </code></pre>
    </div>
  );
};
