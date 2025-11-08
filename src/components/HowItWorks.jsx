export default function HowItWorks() {
  const steps = [
    {
      title: 'Add the collection template',
      desc:
        'Create a new template named collection.with-variants.liquid that iterates product.variants and renders each color as an individual grid item with its own image and URL params.'
    },
    {
      title: 'Group by color',
      desc:
        'Detect option names (e.g., Color) and combine variants by shared color. Use the first image for each color group as the tile image.'
    },
    {
      title: 'Link to selected variant',
      desc:
        'Build links like /products/handle?variant=ID so opening a card selects the correct color on the product page.'
    },
    {
      title: 'Use CSV to seed data',
      desc:
        'Import the provided CSV to quickly populate products with multiple color variants, then test the template on a “Show color variations” collection.'
    }
  ]

  return (
    <section id="how" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How it works</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Follow these practical steps to reproduce the collection behavior from your example store using the Debut theme.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
