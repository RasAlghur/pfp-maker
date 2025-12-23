// src/components/Controls.tsx

interface Props {
    onRandomizeAll: () => void;
    onReset: () => void;
    onDownload: () => void;
}

export default function Controls({ onRandomizeAll, onReset, onDownload }: Props) {
    return (
        <div className="flex gap-2">
            <button onClick={onRandomizeAll} className="px-3 py-2 bg-indigo-600 text-white rounded-md">Randomize</button>
            <button onClick={onReset} className="px-3 py-2 border rounded-md">Reset</button>
            <button onClick={onDownload} className="px-3 py-2 border rounded-md">Download PNG</button>
        </div>
    );
}
