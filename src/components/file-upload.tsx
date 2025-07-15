'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface Props {
  setText: (text: string) => void;
}

export const FileUpload = ({ setText }: Props) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) {
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setText(e.target?.result ?? '');
      };
      reader.onerror = (err) => {
        console.error('Error reading file:', err);
        alert('Failed to read file');
      };
      reader.readAsText(file);
    },
    [setText],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'text/plain': ['txt', 'md'],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={twMerge(
        'flex h-[200px] w-[500px] cursor-pointer flex-col items-center justify-center space-y-4 rounded-md border-2 border-zinc-800',
        isDragActive ? 'bg-zinc-900/80' : 'bg-zinc-900/50',
      )}
    >
      <input {...getInputProps()} />
      <span>Upload File</span>
      <Upload size={48} />
    </div>
  );
};
