import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'src/globals.css';
import { PageTemplate } from 'src/components/PageTemplate';
import type { ArticleManifestEntry, ArticleStatus, PagesManifest } from 'src/lib/pagesManifest';

const STATUSES: ArticleStatus[] = ['published', 'unpublished', 'in_progress', 'draft'];

function AdminPage() {
  const [manifest, setManifest] = useState<PagesManifest | null>(null);
  const [edits, setEdits] = useState<Record<string, Partial<ArticleManifestEntry>>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  const fetchManifest = useCallback(async () => {
    try {
      const res = await fetch('/api/pages-manifest');
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      setManifest(data);
      setEdits({});
    } catch (err) {
      setMessage(`Ошибка загрузки: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchManifest();
  }, [fetchManifest]);

  const handleEdit = (slug: string, field: keyof ArticleManifestEntry, value: string) => {
    setEdits((prev) => ({
      ...prev,
      [slug]: { ...prev[slug], [field]: value },
    }));
  };

  const getDisplayEntry = (slug: string, entry: ArticleManifestEntry): ArticleManifestEntry => {
    const patch = edits[slug];
    return patch ? { ...entry, ...patch } : entry;
  };

  const saveChanges = async () => {
    if (!manifest) return;
    setSaving(true);
    setMessage(null);
    try {
      const merged: PagesManifest = {
        articles: {},
      };
      for (const [slug, entry] of Object.entries(manifest.articles)) {
        const patch = edits[slug];
        merged.articles[slug] = patch ? { ...entry, ...patch } : { ...entry };
      }
      const res = await fetch('/api/pages-manifest', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates: merged }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || res.statusText);
      }
      const data = await res.json();
      setManifest(data);
      setEdits({});
      setMessage('Сохранено');
    } catch (err) {
      setMessage(`Ошибка: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setSaving(false);
    }
  };

  const hasChanges = Object.keys(edits).length > 0;

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
      <PageTemplate>
        <main className="w-full max-w-4xl mx-auto p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold">Управление манифестом</h1>
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              На главную
            </Link>
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
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(manifest.articles)
                      .sort(([a], [b]) => a.localeCompare(b))
                      .map(([slug, entry]) => {
                        const display = getDisplayEntry(slug, entry);
                        return (
                          <tr key={slug} className="border-b border-colorTextPrimary/10 hover:bg-bgBodySecondary/50">
                            <td className="p-2 font-mono text-xs">{slug}</td>
                            <td className="p-2">
                              <input
                                type="text"
                                value={display.title}
                                onChange={(e) => handleEdit(slug, 'title', e.target.value)}
                                className="w-full bg-bgBodySecondary border border-colorTextPrimary/20 rounded px-2 py-1 text-colorTextPrimary"
                              />
                            </td>
                            <td className="p-2">
                              <select
                                value={display.status}
                                onChange={(e) => handleEdit(slug, 'status', e.target.value as ArticleStatus)}
                                className="bg-bgBodySecondary border border-colorTextPrimary/20 rounded px-2 py-1 text-colorTextPrimary"
                              >
                                {STATUSES.map((s) => (
                                  <option key={s} value={s}>
                                    {s}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td className="p-2">
                              <input
                                type="text"
                                value={display.publishedAt}
                                onChange={(e) => handleEdit(slug, 'publishedAt', e.target.value)}
                                placeholder="YYYY-MM-DD"
                                className="w-28 bg-bgBodySecondary border border-colorTextPrimary/20 rounded px-2 py-1 text-colorTextPrimary"
                              />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <div className="mt-6">
                <button
                  onClick={saveChanges}
                  disabled={!hasChanges || saving}
                  className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
                >
                  {saving ? 'Сохранение…' : 'Сохранить'}
                </button>
              </div>
            </>
          )}
        </main>
      </PageTemplate>
    </>
  );
}

export default AdminPage;
