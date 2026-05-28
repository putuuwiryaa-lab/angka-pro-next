'use client';

import { useState } from 'react';

type CopyButtonProps = {
  value: string;
  label?: string;
};

export function CopyButton({ value, label = 'COPY' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!value || value === '-') return;

    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const input = document.createElement('textarea');
      input.value = value;
      input.setAttribute('readonly', 'readonly');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1100);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-[10px] font-black tracking-[0.16em] text-cyan-100 transition active:scale-95"
    >
      {copied ? 'OK' : label}
    </button>
  );
}
