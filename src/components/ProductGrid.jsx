import React, { useMemo } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Passify Browser',
    tag: 'browser',
    color: 'from-fuchsia-500 to-indigo-500',
    desc: 'A cinematic, privacy-first browser designed for the Passify ecosystem.',
    url: 'https://passify.in/browser',
    badge: 'New',
  },
  {
    name: 'Lavender AI',
    tag: 'ai',
    color: 'from-purple-400 to-pink-500',
    desc: 'Your creative AI assistant for content, strategy, and design.',
    url: 'https://passify.in/lavender',
    badge: 'AI',
  },
  {
    name: 'Voxa',
    tag: 'voice',
    color: 'from-zinc-900 to-zinc-700',
    desc: 'Minimal black & white voice interface for rapid actions.',
    url: 'https://passify.in/voxa',
    badge: 'Voice',
  },
  {
    name: 'Flux Docs',
    tag: 'docs',
    color: 'from-sky-400 to-cyan-500',
    desc: 'Collaborative documents with live AI suggestions and versioning.',
    url: 'https://passify.in/flux',
    badge: 'Docs',
  },
  {
    name: 'Pulse Analytics',
    tag: 'analytics',
    color: 'from-emerald-400 to-teal-500',
    desc: 'Privacy-first analytics for modern apps with UX metrics.',
    url: 'https://passify.in/pulse',
    badge: 'Analytics',
  },
  {
    name: 'Nebula Notes',
    tag: 'notes',
    color: 'from-violet-400 to-indigo-500',
    desc: 'Lightweight notes with synced insights across your ecosystem.',
    url: 'https://passify.in/nebula',
    badge: 'Notes',
  },
];

const ProductCard = ({ p, isFavorite, onToggleFavorite }) => {
  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.45)]"
      whileHover={{ y: -2 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-20 transition group-hover:opacity-30`} />
      <div className="relative z-10">
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
            {p.badge}
          </span>
          <button
            type="button"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite(p.name);
            }}
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] font-semibold transition ${
              isFavorite
                ? 'border-yellow-400/40 bg-yellow-400/10 text-yellow-300'
                : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            <Star size={12} fill={isFavorite ? 'currentColor' : 'none'} /> Favorite
          </button>
        </div>
        <h3 className="text-lg font-semibold text-white">{p.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/75">{p.desc}</p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/80">
          Visit <ExternalLink size={14} className="transition group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.a>
  );
};

const ProductGrid = ({ query = '', favorites = [], onToggleFavorite }) => {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) =>
      [p.name, p.tag, p.desc].some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  const sortWithFavorites = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const aFav = favorites.includes(a.name) ? 1 : 0;
      const bFav = favorites.includes(b.name) ? 1 : 0;
      if (aFav !== bFav) return bFav - aFav; // favorites first
      return a.name.localeCompare(b.name);
    });
  }, [filtered, favorites]);

  return (
    <div id="products" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {sortWithFavorites.map((p) => (
        <ProductCard
          key={p.name}
          p={p}
          isFavorite={favorites.includes(p.name)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
