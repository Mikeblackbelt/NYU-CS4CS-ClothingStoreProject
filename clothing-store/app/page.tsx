// app/page.tsx
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-bold tracking-tight">Featured Products</h2>
          <a 
            href="/shop" 
            className="text-rose-600 hover:underline font-medium flex items-center gap-2"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-2xl font-bold tracking-tighter mb-2">LUXE</p>
          <p className="text-gray-400">Premium clothing for the modern wardrobe.</p>
        </div>
      </footer>
    </>
  );
}