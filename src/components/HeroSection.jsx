import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to enhance readability without blocking Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 pb-16 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
          <Star size={16} className="text-yellow-400" />
          <span className="text-xs uppercase tracking-widest text-white/80">Introducing</span>
          <span className="text-xs font-semibold">Passify Browser</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Futuristic. Cinematic. Unified.
          <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
            Welcome to the Passify Ecosystem
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          Experience a premium, multi-product universe crafted for speed, beauty, and intelligence. Explore, preview, and
          launch every Passify product from one place.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            <Rocket size={18} /> Explore Products
            <ExternalLink size={16} className="transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
