'use client';

import type { ReactNode } from 'react';
import { ArticlesNavProvider } from './ArticlesNavContext';
import { ArticlesSidePanel } from './ArticlesSidePanel';

export function ArticlesNavShell({ children }: { children: ReactNode }) {
  return (
    <ArticlesNavProvider>
      {children}
      <ArticlesSidePanel />
    </ArticlesNavProvider>
  );
}
