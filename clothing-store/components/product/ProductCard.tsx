'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/products';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
  const { toggleWishlist, isWishlisted } = useWishlistStore();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-3xl bg-gray-100 aspect-[4/5]">
        <Image 
          src={product.images[0]} 
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {product.salePrice && (
          <div className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
            SALE
          </div>
        )}

        <button 
          onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
          className="absolute top-4 right-4 p-3 bg-white/90 hover:bg-white rounded-full shadow transition-all"
        >
          <Heart 
            size={20} 
            className={isWishlisted(product.id) ? "fill-rose-600 text-rose-600" : ""} 
          />
        </button>

        <button 
          onClick={handleQuickAdd}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-8 py-3 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white shadow-xl flex items-center gap-2"
        >
          <ShoppingCart size={18} /> Quick Add
        </button>
      </div>

      <div className="mt-4 space-y-1 px-1">
        <p className="text-xs uppercase tracking-widest text-gray-500">{product.category}</p>
        <h3 className="font-semibold text-lg leading-tight group-hover:text-rose-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-baseline gap-2">
          {product.salePrice ? (
            <>
              <span className="font-bold text-xl">${product.salePrice}</span>
              <span className="text-gray-400 line-through">${product.price}</span>
            </>
          ) : (
            <span className="font-bold text-xl">${product.price}</span>
          )}
        </div>
      </div>
    </Link>
  );
}