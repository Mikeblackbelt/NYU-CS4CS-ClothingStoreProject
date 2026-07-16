'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, Search, Menu } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = useCartStore((state) => state.items.length);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold tracking-tighter">
            LUXE
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/shop" className="hover:text-rose-600 transition-colors">Shop All</Link>
            <Link href="/shop?category=men" className="hover:text-rose-600 transition-colors">Men</Link>
            <Link href="/shop?category=women" className="hover:text-rose-600 transition-colors">Women</Link>
            <Link href="/shop?category=kids" className="hover:text-rose-600 transition-colors">Kids</Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block w-72">
              <input
                type="text"
                placeholder="Search clothing..."
                className="w-full bg-gray-100 pl-11 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
            </div>

            <Link href="/wishlist" className="hover:text-rose-600 transition-colors">
              <Heart size={24} />
            </Link>

            <Link href="/cart" className="relative hover:text-rose-600 transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}