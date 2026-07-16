// app/store/useWishlistStore.ts
import { create } from 'zustand';
import { Product } from '@/lib/products';

interface WishlistStore {
  items: Product[];
  toggleWishlist: (product: Product) => void;
  isWishlisted: (id: number) => boolean;
  removeFromWishlist: (id: number) => void;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],

  toggleWishlist: (product) => set((state) => {
    const isAlreadyWishlisted = state.items.some(item => item.id === product.id);
    
    if (isAlreadyWishlisted) {
      return { items: state.items.filter(item => item.id !== product.id) };
    } else {
      return { items: [...state.items, product] };
    }
  }),

  isWishlisted: (id) => get().items.some(item => item.id === id),

  removeFromWishlist: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
}));