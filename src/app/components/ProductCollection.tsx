'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/lib/products';

export default function ProductCollection({ title, description, items }: { title: string; description: string; items: Product[] }) {
  const [notice, setNotice] = useState('');

  function addToCart(product: Product) {
    setNotice(`${product.name} ajouté à votre sélection`);
    window.setTimeout(() => setNotice(''), 2200);
  }

  return (
    <main className="catalog-page">
      <header className="catalog-nav">
        <Link className="wordmark" href="/" aria-label="BLAIR accueil">BL<span>A</span>IR</Link>
        <Link className="catalog-back" href="/"><ArrowLeft size={16} /> Retour à l’accueil</Link>
      </header>
      <section className="catalog-content">
        <p className="eyebrow">SOINS CAPILLAIRES EXPERTS</p>
        <h1>{title}</h1>
        <p className="catalog-description">{description}</p>
        <p className="catalog-count">{items.length} soins</p>
        <div className="catalog-grid">
          {items.map((product) => (
            <article className="catalog-card" key={product.name}>
              <div className="catalog-image"><img src={product.image} alt={product.alt} /></div>
              <div className="catalog-card-copy">
                <p className="eyebrow">GAMME {product.gamme.toUpperCase()}</p>
                <h2>{product.name}</h2>
                <div className="catalog-card-bottom"><b>{product.price} DH</b><button className="quick-add" aria-label={`Ajouter ${product.name} à votre sélection`} onClick={() => addToCart(product)}><ShoppingBag size={16} /></button></div>
              </div>
            </article>
          ))}
        </div>
        <Link className="button dark catalog-all" href="/boutique">Voir toute la boutique <ArrowRight size={15} /></Link>
      </section>
      <footer className="catalog-footer">Concept de design indépendant, non affilié à la boutique officielle BLAIR.</footer>
      {notice && <div className="toast" role="status">{notice}</div>}
    </main>
  );
}
