function colorDots(colors){
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {colors.map((c) => (
        <span key={c} className="h-3.5 w-3.5 rounded-full border border-black/10" style={{ backgroundColor: c }} />
      ))}
    </div>
  )
}

const mockProducts = [
  {
    title: 'Everyday Tee',
    price: 29,
    variants: [
      { id: 1, color: '#111827', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop' },
      { id: 2, color: '#6b7280', image: 'https://images.unsplash.com/photo-1760864407190-5351a18d2a26?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFdmVyeWRheSUyMFRlZXxlbnwwfDB8fHwxNzYyNjA2NDEyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
      { id: 3, color: '#ef4444', image: 'https://images.unsplash.com/photo-1760864407190-5351a18d2a26?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFdmVyeWRheSUyMFRlZXxlbnwwfDB8fHwxNzYyNjA2NDEyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' }
    ]
  },
  {
    title: 'Cozy Hoodie',
    price: 59,
    variants: [
      { id: 4, color: '#10b981', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop' },
      { id: 5, color: '#3b82f6', image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=600&auto=format&fit=crop' },
      { id: 6, color: '#f59e0b', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=600&auto=format&fit=crop' }
    ]
  }
]

export default function DemoGrid(){
  const tiles = mockProducts.flatMap((p) => p.variants.map((v) => ({
    title: p.title,
    price: p.price,
    image: v.image,
    color: v.color,
  })))

  return (
    <section id="demo" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Demo: Variants as products</h2>
        <p className="mt-2 text-gray-600">Each color renders as its own card in the grid.</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tiles.map((t, idx) => (
            <article key={idx} className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={t.image}
                  alt={t.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 truncate">{t.title}</h3>
                <p className="text-sm text-gray-600">${'{'}t.price{'}'}</p>
                {colorDots([t.color])}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
