"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const total = useCartStore((state) => state.getTotalPrice());

  if (items.length === 0) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>

        <div className="border rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mb-8">
            A surprisingly inexpensive problem to have.
          </p>

          <Link
            href="/shop"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Items */}

        <div className="lg:col-span-2 space-y-6">

          {items.map((item) => (
            <div
              key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
              className="flex gap-6 border rounded-2xl p-5"
            >

              <img
                src={item.images[0]}
                alt={item.name}
                className="w-36 h-36 object-cover rounded-xl"
              />

              <div className="flex-1">

                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-gray-500">
                      Size: {item.selectedSize}
                    </p>

                    <p className="text-gray-500">
                      Color: {item.selectedColor}
                    </p>

                    <p className="font-bold mt-2">
                      $
                      {(item.salePrice ?? item.price).toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>

                <div className="flex items-center gap-3 mt-6">

                  <button
                    className="border rounded px-3 py-1"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    −
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    className="border rounded px-3 py-1"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Summary */}

        <div className="border rounded-2xl p-6 h-fit sticky top-8">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Items</span>
            <span>{items.length}</span>
          </div>

          <div className="flex justify-between mb-6">
            <span>Total</span>
            <span className="font-bold text-xl">
              ${total.toFixed(2)}
            </span>
          </div>

          <button className="w-full bg-black text-white rounded-xl py-4 hover:bg-gray-800">
            Checkout
          </button>

          <Link
            href="/shop"
            className="block text-center mt-4 text-gray-600 hover:underline"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    </main>
  );
}