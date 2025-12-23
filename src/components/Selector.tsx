// src/components/Selector.tsx

import type { Part } from '../types';

interface Props {
  category: string;
  parts: Part[];
  selectedId?: string;
  onSelect: (partId: string) => void;
  randomizeEnabled: boolean;
  onToggleRandomize: (cat: string, next: boolean) => void;
}

export default function Selector({
  category,
  parts,
  selectedId,
  onSelect,
  randomizeEnabled,
  onToggleRandomize,
}: Props) {
  return (
    <div className="p-3">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h4 className="text-sm font-semibold capitalize">{category}</h4>
          <p className="text-xs text-slate-500 mt-0.5">
            {parts.length} option{parts.length === 1 ? '' : 's'}
          </p>
        </div>

        <label className="text-xs flex items-center gap-2">
          <input
            type="checkbox"
            checked={randomizeEnabled}
            onChange={(e) => onToggleRandomize(category, e.target.checked)}
            aria-label={`Randomize ${category}`}
          />
          <span className="select-none">Randomize</span>
        </label>
      </div>

      <div>
        <label className="sr-only" htmlFor={`select-${category}`}>
          Choose {category}
        </label>

        <select
          id={`select-${category}`}
          value={selectedId ?? ''}
          onChange={(e) => onSelect(e.target.value)}
          disabled={parts.length === 0}
          className="w-full px-3 py-2 border rounded-md bg-white"
        >
          {/* optional placeholder */}
          <option value="" disabled>
            {parts.length === 0 ? 'No options' : `Select ${category}...`}
          </option>

          {parts.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        {/* show currently selected name for clarity (useful when you want a summary) */}
        <div className="mt-2 text-xs text-slate-600">
          {selectedId
            ? `Selected: ${parts.find((x) => x.id === selectedId)?.name ?? selectedId}`
            : 'No selection'}
        </div>
      </div>
    </div>
  );
}
