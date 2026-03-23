import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import 'src/globals.css';
import { PageTemplate } from 'src/components/PageTemplate';
import type { ArticleManifestEntry, ArticleStatus, PagesManifest } from 'src/lib/pagesManifest';

const STATUSES: ArticleStatus[] = ['published', 'unpublished', 'in_progress', 'draft'];

type FormValues = PagesManifest['articles'];

const fieldBase = 'bg-bgBodySecondary border border-colorTextPrimary/20 rounded px-2 py-1 text-colorTextPrimary';

function ResetButton({
  onClick,
  title,
}: {
  onClick: () => void;
  title: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="ml-1 h-9 w-9 shrink-0 flex items-center justify-center rounded hover:bg-bgBodySecondary/80 text-colorTextPrimary/70 hover:text-colorTextPrimary border border-colorTextPrimary/20"
    >
      <i className="fa-solid fa-rotate-left" />
    </button>
  );
}

function AdminPage() {
  const [manifest, setManifest] = useState<PagesManifest | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [createSlug, setCreateSlug] = useState('');
  const [createTitle, setCreateTitle] = useState('');
  const [creating, setCreating] = useState(false);
  const [renaming, setRenaming] = useState<string | null>(null);
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  const { register, watch, setValue, reset, formState: { isDirty } } = useForm<FormValues>({
    defaultValues: {},
  });

  useEffect(() => {
    const fetchManifest = async () => {
      try {
        const res = await fetch('/api/pages-manifest');
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setManifest(data);
        reset(data.articles);
      } catch (err) {
        setMessage(`Ошибка загрузки: ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        setLoading(false);
      }
    };
    fetchManifest();
  }, [reset]);

  const saveChanges = async () => {
    if (!manifest) return;
    const values = watch();
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch('/api/pages-manifest', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates: { articles: values } }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || res.statusText);
      }
      const data = await res.json();
      setManifest(data);
      reset(data.articles);
      setMessage('Сохранено');
    } catch (err) {
      setMessage(`Ошибка: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setSaving(false);
    }
  };

  const handleCreate = async () => {
    const slug = createSlug.trim();
    const title = createTitle.trim();
    if (!slug || !title) {
      setMessage('Укажите slug и title');
      return;
    }
    setCreating(true);
    setMessage(null);
    try {
      const res = await fetch('/api/pages-manifest/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, title }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || res.statusText);
      setManifest(data);
      reset(data.articles);
      setCreateSlug('');
      setCreateTitle('');
      setMessage('Статья создана');
    } catch (err) {
      setMessage(`Ошибка: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setCreating(false);
    }
  };

  const handleRename = async (oldSlug: string) => {
    const newSlug = window.prompt('Новый slug:', oldSlug);
    if (!newSlug || newSlug === oldSlug) return;
    setRenaming(oldSlug);
    setMessage(null);
    try {
      const res = await fetch('/api/pages-manifest/rename', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldSlug, newSlug: newSlug.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || res.statusText);
      setManifest(data);
      reset(data.articles);
      setMessage('Статья переименована');
    } catch (err) {
      setMessage(`Ошибка: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setRenaming(null);
    }
  };

  if (typeof window !== 'undefined' && !isLocalhost) {
    return (
      <PageTemplate>
        <main className="w-full max-w-2xl mx-auto p-6">
          <h1 className="text-xl font-semibold mb-4">Админка</h1>
          <p className="text-colorTextPrimary">Доступ только с localhost.</p>
        </main>
      </PageTemplate>
    );
  }

  return (
    <>
      <Head>
        <title>Админка — Управление манифестом</title>
      </Head>
      <Script src="https://kit.fontawesome.com/45f9b38c9b.js" crossOrigin="anonymous" />
      <PageTemplate>
        <main className="w-full max-w-4xl mx-auto p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold">Управление манифестом</h1>
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              На главную
            </Link>
          </div>
          <div className="mb-6 p-4 rounded border border-colorTextPrimary/20">
            <h2 className="text-sm font-medium mb-2">Создать статью</h2>
            <div className="flex gap-2 flex-wrap">
              <input
                placeholder="slug (например 2025-03-23-my-article)"
                value={createSlug}
                onChange={(e) => setCreateSlug(e.target.value)}
                className={`flex-1 min-w-[180px] ${fieldBase}`}
              />
              <input
                placeholder="title"
                value={createTitle}
                onChange={(e) => setCreateTitle(e.target.value)}
                className={`flex-1 min-w-[180px] ${fieldBase}`}
              />
              <button
                onClick={handleCreate}
                disabled={creating || !createSlug.trim() || !createTitle.trim()}
                className="px-4 py-2 rounded bg-green-600 text-white disabled:opacity-50 hover:bg-green-700"
              >
                {creating ? '…' : 'Создать'}
              </button>
            </div>
          </div>
          {message && (
            <div className="mb-4 p-3 rounded bg-bgBodySecondary text-colorTextPrimary">
              {message}
            </div>
          )}

          {loading ? (
            <p>Загрузка…</p>
          ) : !manifest ? (
            <p>Не удалось загрузить манифест.</p>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-colorTextPrimary/20">
                      <th className="text-left p-2 py-3">slug</th>
                      <th className="text-left p-2 py-3">title</th>
                      <th className="text-left p-2 py-3">status</th>
                      <th className="text-left p-2 py-3">publishedAt</th>
                      <th className="p-2 py-3 w-20"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(manifest.articles)
                      .sort(([a], [b]) => a.localeCompare(b))
                      .map(([slug, entry]) => (
                        <tr key={slug} className="border-b border-colorTextPrimary/10 hover:bg-bgBodySecondary/50">
                          <td className="p-2 font-mono text-xs">{slug}</td>
                          <td className="p-2">
                            <div className="flex items-center">
                              <input
                                {...register(`${slug}.title`)}
                                className={`w-full ${fieldBase}`}
                              />
                              <ResetButton
                                onClick={() => setValue(`${slug}.title`, entry.title)}
                                title="Сбросить до исходного значения"
                              />
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="flex items-center">
                              <select
                                {...register(`${slug}.status`)}
                                className={fieldBase}
                              >
                                {STATUSES.map((s) => (
                                  <option key={s} value={s}>
                                    {s}
                                  </option>
                                ))}
                              </select>
                              <ResetButton
                                onClick={() => setValue(`${slug}.status`, entry.status)}
                                title="Сбросить до исходного значения"
                              />
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="flex items-center">
                              <input
                                type="date"
                                {...register(`${slug}.publishedAt`)}
                                className={`w-36 ${fieldBase} [color-scheme:dark]`}
                              />
                              <ResetButton
                                onClick={() => setValue(`${slug}.publishedAt`, entry.publishedAt || '')}
                                title="Сбросить до исходного значения"
                              />
                            </div>
                          </td>
                          <td className="p-2">
                            <button
                              type="button"
                              onClick={() => handleRename(slug)}
                              disabled={renaming === slug}
                              title="Переименовать"
                              className="p-1.5 rounded hover:bg-bgBodySecondary/80 text-colorTextPrimary/70 hover:text-colorTextPrimary disabled:opacity-50"
                            >
                              <i className="fa-solid fa-pen-to-square" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="fixed bottom-9 left-0 right-0 z-10 p-3 bg-bgBodyPrimary/95 backdrop-blur-sm border-t border-colorTextPrimary/20 flex justify-center">
                <button
                  onClick={saveChanges}
                  disabled={!isDirty || saving}
                  className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
                >
                  {saving ? 'Сохранение…' : 'Сохранить'}
                </button>
              </div>
              <div className="h-14" />
            </>
          )}
        </main>
      </PageTemplate>
    </>
  );
}

export default AdminPage;
