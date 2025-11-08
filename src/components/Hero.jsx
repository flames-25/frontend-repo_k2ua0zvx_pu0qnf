import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
      <div className="relative max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Show color variants as individual products
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              A polished collection template for Shopify (Debut) that treats each color option like its own product card, matching the example pages you shared.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#demo" className="px-5 py-2.5 rounded-md bg-gray-900 text-white font-medium shadow hover:bg-gray-800">
                See demo layout
              </a>
              <a href="#how" className="px-5 py-2.5 rounded-md bg-white text-gray-900 border border-gray-200 font-medium shadow-sm hover:bg-gray-50">
                How to install in Debut
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-amber-600">
              <Star size={18} fill="#f59e0b" className="text-amber-500" />
              <span className="text-sm">Optimized for Debut. No apps required.</span>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-xl border border-gray-200 p-5 shadow-lg">
            <div className="grid grid-cols-4 gap-3">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-gray-100"
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-500 text-center">Preview of variant-as-product grid</p>
          </div>
        </div>
      </div>
    </section>
  )
}
