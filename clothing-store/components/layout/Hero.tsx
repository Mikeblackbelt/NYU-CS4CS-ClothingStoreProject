// app/components/layout/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3756048/pexels-photo-3756048.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative text-center px-6 z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">
          ELEVATE YOUR STYLE
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10">
          Premium clothing crafted for comfort and confidence.
        </p>
        <Link 
          href="/shop"
          className="inline-block bg-white hover:bg-gray-100 transition-colors text-black px-10 py-4 rounded-full font-semibold text-lg"
        >
          Shop Collection
        </Link>
      </div>
    </div>
  );
}