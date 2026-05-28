export function parseHistory(raw?: string, limit = 169): string[] {
  if (!raw) return [];
  return raw
    .trim()
    .split(/\s+/)
    .filter((item) => /^\d{4}$/.test(item))
    .slice(-limit);
}

export function formatSyncTime(value?: string): string {
  if (!value) return '--:--';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '--:--';
  return date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function listToText(value?: string[], separator = ''): string {
  return Array.isArray(value) && value.length ? value.map(String).join(separator) : '-';
}

export function safeDigitList(value?: string[]): string[] {
  return Array.isArray(value) ? value.map(String) : [];
}
