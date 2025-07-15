'use client';

import { FileUpload } from '@/components/file-upload';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState<string>('');

  const handleSetText = (text: string) => {
    setText(text);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 font-sans">
      <FileUpload setText={handleSetText} />
      <textarea className="bg-zinc-900" value={text} disabled />
    </div>
  );
}
