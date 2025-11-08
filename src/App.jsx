import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import DemoGrid from './components/DemoGrid'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <DemoGrid />
        <HowItWorks />
      </main>
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-600">
        Built for the Debut theme collection template: collection.with-variants.liquid
      </footer>
    </div>
  )
}

export default App
