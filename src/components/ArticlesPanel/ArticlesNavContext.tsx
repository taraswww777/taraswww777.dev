'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type ArticlesNavContextValue = {
  open: boolean;
  setOpen: (next: boolean) => void;
  toggle: () => void;
};

const ArticlesNavContext = createContext<ArticlesNavContextValue | null>(null);

export function ArticlesNavProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);
  const value = useMemo(
    () => ({ open, setOpen, toggle }),
    [open, toggle]
  );
  return (
    <ArticlesNavContext.Provider value={value}>
      {children}
    </ArticlesNavContext.Provider>
  );
}

export function useArticlesNavPanel() {
  const ctx = useContext(ArticlesNavContext);
  if (!ctx) {
    throw new Error('useArticlesNavPanel must be used within ArticlesNavProvider');
  }
  return ctx;
}
