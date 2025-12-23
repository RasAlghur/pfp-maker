// src/components/Selector.tsx

import type { Part } from "../types";

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
    <div className="p-4 hover:bg-gray-50/50 transition-colors duration-200">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="font-bold text-gray-900 capitalize text-base">
            {category}
          </h4>
          <p className="text-xs text-gray-500 mt-0.5">
            {parts.length} option{parts.length === 1 ? "" : "s"} available
          </p>
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={randomizeEnabled}
            onChange={(e) => onToggleRandomize(category, e.target.checked)}
            aria-label={`Randomize ${category}`}
            className="sr-only peer"
          />

          {/* Toggle track */}
          <div
            className="
    w-10 h-5 rounded-full
    bg-gray-300
    peer-checked:bg-blue-500
    peer-focus:ring-2 peer-focus:ring-usa-blue/30
    transition-all duration-300
  "
          />

          {/* Toggle knob */}
          <div
            className="
      absolute top-1/2 left-1
      -translate-y-1/2
      w-3 h-3 rounded-full
      bg-white
      shadow-sm
      transition-all duration-300
      peer-checked:translate-x-5
    "
          />

          <span className="ml-2 text-xs font-medium text-gray-700 select-none">
            Random
          </span>
        </label>
      </div>

      <div>
        <label className="sr-only" htmlFor={`select-${category}`}>
          Choose {category}
        </label>

        <select
          id={`select-${category}`}
          value={selectedId ?? ""}
          onChange={(e) => onSelect(e.target.value)}
          disabled={parts.length === 0}
          className="
            w-full
            px-3 py-2
            bg-white
            border border-gray-300
            rounded-md
            text-gray-900
            text-sm
            font-medium
            shadow-sm
            hover:border-usa-blue
            focus:border-usa-blue focus:ring-2 focus:ring-usa-blue/20
            focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
            cursor-pointer
          "
        >
          <option value="" disabled>
            {parts.length === 0
              ? "No options available"
              : `Select ${category}...`}
          </option>

          {parts.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        {/* Selected indicator */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-gray-500">Selected:</span>
          <span className="font-bold text-gray-900 text-sm bg-gray-100 px-2 py-1 rounded">
            {selectedId
              ? parts.find((x) => x.id === selectedId)?.name ?? selectedId
              : "—"}
          </span>
        </div>
      </div>
    </div>
  );
}
