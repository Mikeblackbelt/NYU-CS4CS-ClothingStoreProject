"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCartStore } from "@/store/useCartStore";

export default function WishlistPage() {
  const items = useWishlistStore((state) => state.items);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  const addToCart = useCartStore((state) => state.addToCart);


  if (items.length === 0) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-4">
          Wishlist
        </h1>

        <div className="border rounded-2xl p-10 text-center">

          <Heart
            size={48}
            className="mx-auto text-gray-300 mb-4"
          />

          <h2 className="text-2xl font-semibold mb-3">
            Your wishlist is empty
          </h2>

          <p className="text-gray-500 mb-8">
            No saved items yet. Your future wardrobe is waiting.
          </p>

          <Link
            href="/shop"
            className="
              bg-black text-white
              px-6 py-3 rounded-xl
              hover:bg-gray-800 transition
            "
          >
            Browse Products
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-10">
        Wishlist
      </h1>


      <div
        className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
        "
      >

        {items.map((item) => (

          <div
            key={item.id}
            className="
              border rounded-2xl
              overflow-hidden
              bg-white
              shadow-sm
              hover:shadow-lg
              transition
              group
            "
          >

            <div className="relative">

              <img
                src={item.images[0]}
                alt={item.name}
                className="
                  w-full
                  h-72
                  object-cover
                  group-hover:scale-105
                  transition
                "
              />


              <button
                onClick={() => removeFromWishlist(item.id)}
                className="
                  absolute
                  top-4 right-4
                  bg-white
                  rounded-full
                  p-2
                  shadow
                  text-red-500
                  hover:bg-red-50
                  transition
                "
              >
                <Trash2 size={18}/>
              </button>

            </div>


            <div className="p-5">

              <h2 className="text-lg font-semibold">
                {item.name}
              </h2>


              <p className="text-gray-500 mt-2 mb-5">
                ${(item.salePrice ?? item.price).toFixed(2)}
              </p>


              <button
                onClick={() =>
                  addToCart({
                    ...item,
                    quantity: 1,
                  })
                }
                className="
                  w-full
                  flex
                  justify-center
                  items-center
                  gap-2
                  bg-black
                  text-white
                  py-3
                  rounded-xl
                  hover:bg-gray-800
                  transition
                "
              >
                <ShoppingCart size={18}/>
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>


      <div className="mt-12 text-center">
        <Link
          href="/shop"
          className="
            text-gray-600
            hover:text-black
            hover:underline
          "
        >
          Continue Shopping
        </Link>
      </div>

    </main>
  );
}