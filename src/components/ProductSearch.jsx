import React from 'react';
import { Search } from 'lucide-react';

const ProductSearch = ({ query, onChange }) => {
  return (
    <div className="w-full">
      <label className="sr-only" htmlFor="product-search">Search products</label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
        <input
          id="product-search"
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search Passify products…"
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/50 outline-none transition focus:border-fuchsia-400/50 focus:ring-2 focus:ring-fuchsia-400/20"
        />
      </div>
      <p className="mt-2 text-xs text-white/60">Smart filtering for quick discovery. Try: browser, ai, voice, notes…</p>
    </div>
  );
};

export default ProductSearch;
