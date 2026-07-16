"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CreditCard, Lock } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export default function CheckoutPage() {
  const cartItems = useCartStore((state) => state.items);

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + (item.salePrice ?? item.price) * item.quantity,
        0
      ),
    [cartItems]
  );

  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Order placed successfully!");
  };

  if (cartItems.length === 0) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Checkout
        </h1>

        <p className="text-gray-500 mb-8">
          Your cart is currently empty.
        </p>

        <Link
          href="/shop"
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Shipping Form */}
        <form
          onSubmit={handleCheckout}
          className="lg:col-span-2 space-y-8"
        >

          <section className="border rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Shipping Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="border rounded-xl p-3"
                required
              />

              <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="border rounded-xl p-3"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="border rounded-xl p-3 md:col-span-2"
                required
              />

              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="border rounded-xl p-3 md:col-span-2"
              />

              <input
                name="address"
                placeholder="Street Address"
                value={form.address}
                onChange={handleChange}
                className="border rounded-xl p-3 md:col-span-2"
                required
              />

              <input
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="border rounded-xl p-3"
                required
              />

              <input
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                className="border rounded-xl p-3"
                required
              />

              <input
                name="zip"
                placeholder="ZIP Code"
                value={form.zip}
                onChange={handleChange}
                className="border rounded-xl p-3"
                required
              />

              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="border rounded-xl p-3"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select>

            </div>
          </section>

          <section className="border rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Payment
            </h2>

            <div className="border rounded-xl p-4 flex items-center gap-3">
              <CreditCard className="text-gray-500" />
              <span className="text-gray-600">
                Stripe payment integration goes here.
              </span>
            </div>
          </section>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition flex justify-center items-center gap-2"
          >
            <Lock size={18} />
            Place Order
          </button>

        </form>

        {/* Order Summary */}
        <aside className="border rounded-2xl p-6 h-fit sticky top-24">

          <h2 className="text-2xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="space-y-5">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-medium">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <span className="font-semibold">
                  $
                  {(
                    (item.salePrice ?? item.price) *
                    item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            ))}

            <hr />

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {shipping === 0
                  ? "Free"
                  : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

          </div>

        </aside>

      </div>

    </main>
  );
}