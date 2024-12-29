import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://my.spline.design/animatedshapeblend-0afe1c24ae6e5d5e29f7bdeeb149ee82/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="pointer-events-none"
          title="3D Animation Background"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Empower Your Business with AI Automation.
          </h1>
          <p className="text-xl text-black mb-8">
            Transform processes, boost efficiency, and drive growth with cutting-edge AI solutions.
          </p>
          <button className="px-8 py-3 bg-white text-black border-2 border-black font-medium 
            transition-all hover:bg-black hover:text-white flex items-center gap-2 group">
            Get Started Today
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}