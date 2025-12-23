// src/components/Controls.tsx
import { IoDice } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

interface Props {
  onRandomizeAll: () => void;
  onReset: () => void;
  onDownload: () => void;
}

export default function Controls({
  onRandomizeAll,
  onReset,
  onDownload,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={onRandomizeAll}
        className="
                    px-5 py-3
                    bg-gradient-to-r from-usa-red to-usa-blue
                    text-black font-bold
                    rounded-xl
                    shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]
                    hover:scale-[1.03]
                    active:scale-95
                    transition-all duration-200
                    flex items-center gap-2
                "
      >
        <span className="text-lg">
          <IoDice className="text-red-500 text-xl" />
        </span>
        Randomize
      </button>

      <button
        onClick={onReset}
        className="
                    px-5 py-3
                    bg-white
                    text-foreground font-bold
                    border-2 border-usa-blue/30
                    rounded-xl
                    shadow-[0_6px_15px_rgba(0,0,0,0.1)]
                    hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]
                    hover:border-usa-blue/50
                    hover:scale-[1.03]
                    active:scale-95
                    transition-all duration-200
                    flex items-center gap-2
                "
      >
        <span className="text-lg">↺</span>
        Reset
      </button>

      <button
        onClick={onDownload}
        className="
                    px-5 py-3
                    bg-gradient-to-r from-yellow-300 to-yellow-400
                    text-black font-bold
                    rounded-xl
                    shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]
                    hover:scale-[1.03]
                    active:scale-95
                    transition-all duration-200
                    flex items-center gap-2
                "
      >
        <span className="text-lg">
          <IoMdDownload className="text-blue-500 text-xl" />
        </span>
        Download PNG
      </button>
    </div>
  );
}
