// lib/products.ts

export type Product = {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  category: 'men' | 'women' | 'kids';
  colors: string[];
  sizes: string[];
  images: string[];           // Direct public URLs
  description: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Oversized Hoodie",
    price: 89.99,
    salePrice: 59.99,
    category: "men",
    colors: ["black", "beige", "charcoal"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.pexels.com/photos/10139621/pexels-photo-10139621.jpeg",
      "https://images.pexels.com/photos/9256867/pexels-photo-9256867.jpeg"
    ],
    description: "Ultra-soft French terry cotton oversized hoodie with a relaxed fit. Perfect for everyday comfort.",
    inStock: true,
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    price: 79.99,
    category: "men",
    colors: ["blue", "black", "grey"],
    sizes: ["28", "30", "32", "34"],
    images: [
      "https://images.pexels.com/photos/10617883/pexels-photo-10617883.jpeg",
      "https://images.pexels.com/photos/10617831/pexels-photo-10617831.jpeg"
    ],
    description: "Premium stretch denim jeans with a modern slim fit and durable construction.",
    inStock: true,
  },
  {
    id: 3,
    name: "Essential Cotton T-Shirt",
    price: 34.99,
    salePrice: 24.99,
    category: "men",
    colors: ["white", "black", "navy", "olive"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.pexels.com/photos/6069980/pexels-photo-6069980.jpeg",
      "https://images.pexels.com/photos/8945233/pexels-photo-8945233.jpeg"
    ],
    description: "Breathable 100% organic cotton crew neck t-shirt. A wardrobe essential.",
    inStock: true,
  },
  {
    id: 4,
    name: "Relaxed Fit Chino Pants",
    price: 69.99,
    category: "men",
    colors: ["beige", "olive", "black"],
    sizes: ["30", "32", "34", "36"],
    images: [
      "https://images.pexels.com/photos/8306375/pexels-photo-8306375.jpeg"
    ],
    description: "Comfortable and versatile chino pants perfect for casual and smart-casual looks.",
    inStock: true,
  },
  {
    id: 5,
    name: "Oversized Knit Sweater",
    price: 95.99,
    salePrice: 69.99,
    category: "women",
    colors: ["beige", "pink", "grey"],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.pexels.com/photos/8886966/pexels-photo-8886966.jpeg",
      "https://images.pexels.com/photos/1488470/pexels-photo-1488470.jpeg"
    ],
    description: "Cozy oversized knit sweater made from premium soft yarn.",
    inStock: true,
  },
  {
    id: 6,
    name: "High-Waisted Wide Leg Jeans",
    price: 85.99,
    category: "women",
    colors: ["blue", "black"],
    sizes: ["26", "28", "30", "32"],
    images: [
      "https://images.pexels.com/photos/9558711/pexels-photo-9558711.jpeg"
    ],
    description: "Trendy high-waisted wide leg jeans with excellent stretch and comfort.",
    inStock: true,
  },
  {
    id: 7,
    name: "Ribbed Long Sleeve Top",
    price: 39.99,
    category: "women",
    colors: ["white", "black", "mocha"],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.pexels.com/photos/8396722/pexels-photo-8396722.jpeg"
    ],
    description: "Soft ribbed fabric long sleeve top. Perfect for layering.",
    inStock: true,
  },
  {
    id: 8,
    name: "Tailored Blazer",
    price: 129.99,
    salePrice: 99.99,
    category: "women",
    colors: ["black", "beige"],
    sizes: ["XS", "S", "M"],
    images: [
      "https://images.pexels.com/photos/8386651/pexels-photo-8386651.jpeg"
    ],
    description: "Elegant tailored blazer with a structured fit and premium fabric.",
    inStock: true,
  },
  {
    id: 9,
    name: "Cropped Puffer Jacket",
    price: 109.99,
    category: "women",
    colors: ["black", "sage", "pink"],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.pexels.com/photos/10558193/pexels-photo-10558193.jpeg"
    ],
    description: "Lightweight yet warm cropped puffer jacket for the colder months.",
    inStock: true,
  },
  {
    id: 10,
    name: "Kids Graphic Hoodie",
    price: 44.99,
    category: "kids",
    colors: ["blue", "red", "yellow"],
    sizes: ["4-5", "6-7", "8-9", "10-12"],
    images: [
      "https://images.pexels.com/photos/36730412/pexels-photo-36730412.jpeg"
    ],
    description: "Fun and comfortable graphic hoodie for kids with durable print.",
    inStock: true,
  },
  {
    id: 11,
    name: "Slim Straight Jeans",
    price: 54.99,
    category: "kids",
    colors: ["blue", "black"],
    sizes: ["4-5", "6-7", "8-9"],
    images: [
      "https://images.pexels.com/photos/10620471/pexels-photo-10620471.jpeg"
    ],
    description: "Durable slim straight jeans designed for active kids.",
    inStock: true,
  },
  {
    id: 12,
    name: "Floral Summer Dress",
    price: 49.99,
    salePrice: 34.99,
    category: "women",
    colors: ["floral", "white", "yellow"],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.pexels.com/photos/14534753/pexels-photo-14534753.jpeg"
    ],
    description: "Light and breezy floral print dress perfect for warm days.",
    inStock: true,
  },
  {
    id: 13,
    name: "Leather Sneakers",
    price: 119.99,
    category: "men",
    colors: ["white", "black"],
    sizes: ["40", "41", "42", "43", "44"],
    images: [
      "https://images.pexels.com/photos/8307669/pexels-photo-8307669.jpeg"
    ],
    description: "Minimalist premium leather sneakers with excellent comfort.",
    inStock: true,
  },
  {
    id: 14,
    name: "Denim Jacket",
    price: 89.99,
    category: "men",
    colors: ["blue", "black"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.pexels.com/photos/8945172/pexels-photo-8945172.jpeg"
    ],
    description: "Classic denim trucker jacket with vintage wash.",
    inStock: true,
  },
  {
    id: 15,
    name: "Pleated Midi Skirt",
    price: 59.99,
    category: "women",
    colors: ["black", "beige"],
    sizes: ["XS", "S", "M"],
    images: [
      "https://images.pexels.com/photos/14584457/pexels-photo-14584457.jpeg"
    ],
    description: "Elegant pleated midi skirt with flowy movement.",
    inStock: true,
  },
  {
    id: 16,
    name: "Color Block Sweatshirt",
    price: 54.99,
    category: "kids",
    colors: ["multi", "blue", "green"],
    sizes: ["6-7", "8-9", "10-12"],
    images: [
      "https://images.pexels.com/photos/36730419/pexels-photo-36730419.jpeg"
    ],
    description: "Fun color-block sweatshirt made from soft fleece.",
    inStock: true,
  },
  {
    id: 17,
    name: "Relaxed Cargo Pants",
    price: 74.99,
    category: "men",
    colors: ["olive", "black", "beige"],
    sizes: ["30", "32", "34"],
    images: [
      "https://images.pexels.com/photos/8307704/pexels-photo-8307704.jpeg"
    ],
    description: "Utility cargo pants with multiple pockets and relaxed fit.",
    inStock: true,
  },
  {
    id: 18,
    name: "Silk Cami Top",
    price: 45.99,
    category: "women",
    colors: ["black", "white", "champagne"],
    sizes: ["XS", "S", "M"],
    images: [
      "https://images.pexels.com/photos/8396317/pexels-photo-8396317.jpeg"
    ],
    description: "Luxurious silk camisole top with delicate straps.",
    inStock: true,
  },
];