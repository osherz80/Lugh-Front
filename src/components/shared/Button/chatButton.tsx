"use client"

export default function ChatButton() {
    return (
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50">
            <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
            >
                forum
            </span>
        </button>
    )
}