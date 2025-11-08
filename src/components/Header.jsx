import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 grid place-items-center text-white">
            <Rocket size={18} />
          </div>
          <div className="font-semibold text-gray-900">Variant Collection Template</div>
        </div>
        <a
          href="#how"
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-500 transition"
        >
          Learn how
        </a>
      </div>
    </header>
  )
}
