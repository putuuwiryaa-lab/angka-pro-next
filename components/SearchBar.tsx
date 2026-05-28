type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="px-4 pt-4">
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">⌕</span>
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Cari pasaran..."
          className="h-12 w-full rounded-2xl border border-slate-700/60 bg-slate-950/70 pl-10 pr-4 text-sm font-semibold text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-400/10"
          autoComplete="off"
        />
      </div>
    </div>
  );
}
