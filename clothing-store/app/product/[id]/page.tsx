// app/product/[id]/page.tsx
import Navbar from '@/components/layout/Navbar';
import Image from 'next/image';
import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import AddToCartButton from './AddToCartButton';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetail({ params }: Props) {
  const { id } = await params;
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  const mainImage = product.images[0];
  const otherImages = product.images.slice(1);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {otherImages.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {otherImages.map((img, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div>
              <p className="uppercase tracking-widest text-sm text-gray-500">{product.category}</p>
              <h1 className="text-4xl font-bold mt-2">{product.name}</h1>

              <div className="mt-4 flex items-center gap-3">
                {product.salePrice ? (
                  <>
                    <span className="text-3xl font-bold">${product.salePrice}</span>
                    <span className="text-xl text-gray-400 line-through">${product.price}</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold">${product.price}</span>
                )}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selector */}
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 hover:border-black px-6 py-3 rounded-xl transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Swatches */}
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 cursor-pointer hover:border-black transition-colors"
                    style={{ backgroundColor: color === 'floral' || color === 'multi' ? '#9ca3af' : color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col gap-4">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}