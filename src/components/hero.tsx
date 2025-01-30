'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image 
          src="/images/travel9.jpg" 
          alt="Travel Background" 
          layout="fill" 
          objectFit="cover" 
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel is the only thing you buy that makes you richer.</h1>
        <p className="text-lg md:text-xl mb-6">Explore the world and collect memories, not things.</p>
        <a href="#card" className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
          Start Exploring
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

