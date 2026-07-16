'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';
import { Product } from '@/lib/products';

export default function AddToCartButton({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const itemWithVariant = {
      ...product,
      selectedSize,
      selectedColor,
    };

    addToCart(itemWithVariant as any);
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Size Selector */}
      <div>
        <div className="flex justify-between mb-3">
          <h3 className="font-semibold">Size</h3>
          <span className="text-sm text-gray-500">Select Size</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border px-6 py-3 rounded-xl transition-all ${
                selectedSize === size 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-300 hover:border-black'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selector */}
      <div>
        <h3 className="font-semibold mb-3">Color: <span className="font-normal capitalize">{selectedColor}</span></h3>
        <div className="flex gap-3">
          {product.colors.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(color)}
              className={`w-11 h-11 rounded-full border-2 transition-all ${
                selectedColor === color ? 'border-black scale-110' : 'border-gray-200 hover:border-gray-400'
              }`}
              style={{ 
                backgroundColor: color === 'floral' || color === 'multi' ? '#9ca3af' : color 
              }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all ${
          isAdded 
            ? 'bg-green-600 text-white' 
            : 'bg-black hover:bg-gray-800 text-white'
        }`}
      >
        {isAdded ? '✓ Added to Cart!' : 'Add to Cart'}
      </button>
    </div>
  );
}