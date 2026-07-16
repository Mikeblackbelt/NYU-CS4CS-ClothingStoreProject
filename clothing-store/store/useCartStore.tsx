// app/store/useCartStore.ts
import { create } from 'zustand';
import { Product } from '@/lib/products';

type CartItem = Product & {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
};

interface CartStore {
  items: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addToCart: (product) => set((state) => {
    const existingIndex = state.items.findIndex(item => 
      item.id === product.id && 
      item.selectedSize === product.selectedSize &&
      item.selectedColor === product.selectedColor
    );

    if (existingIndex !== -1) {
      const updatedItems = [...state.items];
      updatedItems[existingIndex].quantity += 1;
      return { items: updatedItems };
    } else {
      return { 
        items: [...state.items, { ...product, quantity: 1 }] 
      };
    }
  }),

  removeFromCart: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),

  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    )
  })),

  getTotalPrice: () => {
    return get().items.reduce((total, item) => {
      const price = item.salePrice || item.price;
      return total + price * item.quantity;
    }, 0);
  },
}));