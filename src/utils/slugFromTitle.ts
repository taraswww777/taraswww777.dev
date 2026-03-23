/** Транслитерация кириллицы в латиницу */
const CYRILLIC_TO_LATIN: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z',
  и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r',
  с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch',
  ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
  // верхний регистр
  А: 'a', Б: 'b', В: 'v', Г: 'g', Д: 'd', Е: 'e', Ё: 'e', Ж: 'zh', З: 'z',
  И: 'i', Й: 'y', К: 'k', Л: 'l', М: 'm', Н: 'n', О: 'o', П: 'p', Р: 'r',
  С: 's', Т: 't', У: 'u', Ф: 'f', Х: 'h', Ц: 'ts', Ч: 'ch', Ш: 'sh', Щ: 'sch',
  Ъ: '', Ы: 'y', Ь: '', Э: 'e', Ю: 'yu', Я: 'ya',
};

/**
 * Генерирует slug из названия: дата + транслитерация в kebab-case.
 * Например: "Моя новая статья" → "2025-03-23-moya-novaya-statya"
 */
export function slugFromTitle(title: string): string {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  let slug = title
    .split('')
    .map((c) => CYRILLIC_TO_LATIN[c] ?? (/[a-z0-9\s]/i.test(c) ? c.toLowerCase() : ''))
    .join('')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
  if (!slug) slug = 'article';
  return `${today}-${slug}`;
}
