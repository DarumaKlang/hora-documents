// src/components/CodeBlock.tsx
'use client';

import React, { useEffect } from 'react';
import Prism from 'prismjs';
import '@/lib/prism';

interface CodeBlockProps {
    code: string;
    language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Prism) {
            (window as any).Prism.highlightAll();
        }
    }, [code, language]);

    return (
        <pre 
            className={`p-6 my-6 rounded-lg shadow-xl overflow-x-auto language-${language} w-full max-w-full mx-auto`}
            suppressHydrationWarning
        >
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    );
};

export default CodeBlock;