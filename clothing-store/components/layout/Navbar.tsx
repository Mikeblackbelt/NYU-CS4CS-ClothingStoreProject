'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const navLinks = [
    { name: 'Shop All', href: '/shop' },
    { name: 'Men', href: '/shop?category=men' },
    { name: 'Women', href: '/shop?category=women' },
    { name: 'Kids', href: '/shop?category=kids' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link 
            href="/" 
            className="group flex flex-col leading-none"
          >
            <span className="text-3xl font-light tracking-[0.12em] text-gray-900 group-hover:text-rose-600 transition">
              LUXI
            </span>

            <span className="mt-1 text-[10px] uppercase tracking-[0.45em] text-gray-500">
              Clothing
            </span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  relative text-sm font-medium text-gray-700
                  hover:text-rose-600 transition
                  after:absolute after:left-0 after:-bottom-2
                  after:h-[2px] after:w-0 after:bg-rose-600
                  hover:after:w-full after:transition-all
                "
              >
                {link.name}
              </Link>
            ))}
          </div>


          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">

            {/* Search */}
            <div className="hidden lg:block relative w-72">
              <Search 
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                className="
                  w-full rounded-full
                  bg-gray-100
                  py-3 pl-11 pr-5
                  text-sm text-gray-800
                  placeholder:text-gray-400
                  outline-none
                  transition
                  focus:ring-2 focus:ring-rose-400
                  focus:bg-white
                "
              />
            </div>


            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="
                p-2 rounded-full
                text-gray-700
                hover:bg-gray-100
                hover:text-rose-600
                transition
              "
            >
              <Heart size={23}/>
            </Link>


            {/* Cart */}
            <Link
              href="/cart"
              className="
                relative p-2 rounded-full
                text-gray-700
                hover:bg-gray-100
                hover:text-rose-600
                transition
              "
            >
              <ShoppingCart size={23}/>

              {cartCount > 0 && (
                <span
                  className="
                    absolute -top-1 -right-1
                    flex items-center justify-center
                    w-5 h-5
                    rounded-full
                    bg-rose-600
                    text-white
                    text-[11px]
                    font-bold
                    ring-2 ring-white
                  "
                >
                  {cartCount}
                </span>
              )}
            </Link>


            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                md:hidden
                p-2 rounded-full
                hover:bg-gray-100
                transition
              "
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={26}/>
              ) : (
                <Menu size={26}/>
              )}
            </button>

          </div>
        </div>


        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-5">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    text-gray-700
                    font-medium
                    hover:text-rose-600
                    transition
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}