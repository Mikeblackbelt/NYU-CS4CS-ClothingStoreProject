// app/shop/page.tsx
import Navbar from '@/components/layout/Navbar';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/lib/products';

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <div className="pt-10 pb-20 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">All Products</h1>
        <p className="text-gray-600 mb-12">Discover our complete collection</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}