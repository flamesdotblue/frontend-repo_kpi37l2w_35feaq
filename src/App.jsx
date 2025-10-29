import React, { useEffect, useMemo, useState } from 'react';
import HeroSection from './components/HeroSection';
import ProductSearch from './components/ProductSearch';
import ProductGrid from './components/ProductGrid';
import NewsletterSection from './components/NewsletterSection';
import { User } from 'lucide-react';

function App() {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const raw = localStorage.getItem('passify:favorites');
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem('passify:favorites', JSON.stringify(favorites));
  }, [favorites]);

  const onToggleFavorite = (name) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const mostUsed = useMemo(() => favorites.slice(0, 3), [favorites]);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Top navigation with subtle glass look */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
            <span className="text-sm font-semibold tracking-wide">Passify</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#updates" className="hover:text-white">Updates</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10"
            onClick={() => alert('Universal login coming soon — connects your Passify identity across products.')}
          >
            <User size={16} /> Login
          </button>
        </div>
      </header>

      {/* Hero */}
      <HeroSection />

      {/* Content sections */}
      <main className="relative z-10 mx-auto mt-10 max-w-7xl space-y-12 px-6 pb-16 sm:px-8 lg:px-12">
        {/* Smart Search */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Discover the ecosystem</h2>
              <p className="text-sm text-white/70">Search, preview, and launch any product instantly.</p>
            </div>
            {mostUsed.length > 0 && (
              <div className="hidden gap-2 sm:flex">
                {mostUsed.map((m) => (
                  <span key={m} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {m}
                  </span>
                ))}
              </div>
            )}
          </div>
          <ProductSearch query={query} onChange={setQuery} />
          <div className="mt-6">
            <ProductGrid query={query} favorites={favorites} onToggleFavorite={onToggleFavorite} />
          </div>
        </section>

        {/* About & Mission */}
        <section id="about" className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6">
          <h2 className="text-xl font-semibold">The Future of Digital Evolution</h2>
          <p className="mt-2 max-w-3xl text-sm text-white/75">
            Passify is a multi-product platform that treats every interaction like a discovery. Our mission is to craft
            a luxurious, unified experience that elevates the tools you use daily — from browsing and AI to voice and
            documents — all under a single Passify identity.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold">Cinematic performance</p>
              <p className="mt-1 text-xs text-white/70">Smooth animations, micro-interactions, and premium motion design.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold">Unified access</p>
              <p className="mt-1 text-xs text-white/70">One account that travels with you across every Passify product.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold">Privacy-first analytics</p>
              <p className="mt-1 text-xs text-white/70">Insights that respect users and measure what truly matters.</p>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="updates">
          <NewsletterSection />
        </section>

        {/* Contact & Footer */}
        <section id="contact" className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-white/70">For partnerships and media: hello@passify.in</p>
          <div className="mt-4 text-xs text-white/60">© {new Date().getFullYear()} Passify. All rights reserved.</div>
        </section>
      </main>
    </div>
  );
}

export default App;
