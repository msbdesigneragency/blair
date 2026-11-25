'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronDown, FlaskConical, Leaf, Menu, Play, Search, ShieldCheck, ShoppingBag, Truck, UserRound, X } from 'lucide-react';

type Product = { name: string; price: number; image: string; alt: string };

const products: Product[] = [
  { name: 'Shampooing hydratation intense', price: 199, image: '/images/shampoo-hydration.png', alt: 'Shampooing hydratation intense BLAIR' },
  { name: 'Lotion anti-chute', price: 169, image: '/images/lotion.png', alt: 'Lotion anti-chute BLAIR' },
  { name: 'Masque capillaire réparateur', price: 149, image: '/images/mask.png', alt: 'Masque capillaire réparateur BLAIR' },
  { name: 'Huile repousse', price: 139, image: '/images/oil.png', alt: 'Huile repousse BLAIR' },
  { name: 'Shampooing anti-chute', price: 199, image: '/images/shampoo-anti-chute.png', alt: 'Shampooing anti-chute BLAIR' },
];

const ingredients = [
  ['Provitamine B5', 'Hydratation et force'], ['Romarin', 'Stimule la pousse'], ['Aloe Vera', 'Apaise et régénère'], ['Lavande', 'Équilibre le cuir chevelu'], ['Huile végétale', 'Nourrit et protège'],
];

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [gammesOpen, setGammesOpen] = useState(false);
  const [range, setRange] = useState(50);
  const [notice, setNotice] = useState('');

  const results = useMemo(() => products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())), [search]);
  const addToCart = (product: Product) => {
    setCart((items) => [...items, product]);
    setNotice(`${product.name} ajouté au panier`);
    window.setTimeout(() => setNotice(''), 2300);
  };
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  return (
    <main>
      <div className="announcement"><button aria-label="Message précédent"><ArrowLeft size={12} /></button><div className="announcement-item"><Truck size={14} /> Livraison gratuite à partir de 200 DHs</div><span className="announcement-sep" /><div className="announcement-item">Paiement à la livraison</div><span className="announcement-sep" /><div className="announcement-item">Produits testés et approuvés</div><button aria-label="Message suivant"><ArrowRight size={12} /></button></div>
      <header className="nav"><a className="wordmark" href="#top" aria-label="BLAIR accueil">BL<span>A</span>IR</a><button className="mobile-menu icon-button" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button><nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navigation principale"><button onClick={() => scrollTo('products')}>Boutique</button><div className={gammesOpen ? 'dropdown expanded' : 'dropdown'}><button aria-expanded={gammesOpen} onClick={() => setGammesOpen((open) => !open)}>Gammes <ChevronDown size={13} /></button><div className="dropdown-panel"><button onClick={() => scrollTo('collections')}>Hydratation</button><button onClick={() => scrollTo('collections')}>Anti-Chute</button></div></div><button onClick={() => scrollTo('expertise')}>Routine</button><button onClick={() => scrollTo('ingredients')}>À propos</button></nav><div className="nav-actions"><button className="icon-button" aria-label="Rechercher" onClick={() => setSearchOpen(true)}><Search /></button><button className="icon-button account" aria-label="Mon compte" onClick={() => setNotice('Espace client bientôt disponible')}><UserRound /></button><button className="icon-button bag-nav" aria-label={`Panier, ${cart.length} article(s)`} onClick={() => setCartOpen(true)}><ShoppingBag /><span className="cart-count">{cart.length}</span></button></div></header>

      <section className="hero" id="top"><div className="hero-bg" /><div className="hero-copy"><p className="eyebrow light">SOINS CAPILLAIRES EXPERTS</p><h1>Hydratation profonde,<br /><em>cheveux plus forts</em></h1><p className="hero-text">Des formules expertes pour hydrater, renforcer<br className="desktop-only" /> et prendre soin de vos cheveux au quotidien.</p><div className="hero-buttons"><button className="button dark" onClick={() => scrollTo('products')}>Découvrir la collection <ArrowRight size={15} /></button><button className="button pale" onClick={() => scrollTo('expertise')}><span className="play-circle"><Play size={10} fill="currentColor" /></span> Voir la routine</button></div></div></section>

      <section className="benefits" aria-label="Nos engagements"><div><Leaf /><p><b>Formules expertes</b><span>Des actifs sélectionnés avec soin</span></p></div><div><FlaskConical /><p><b>Sans sulfates ni parabènes</b><span>Un rituel respectueux des cheveux</span></p></div><div><ShieldCheck /><p><b>Des soins ciblés</b><span>Une routine pour chaque besoin</span></p></div><div><Truck /><p><b>Livraison au Maroc</b><span>Paiement à la livraison</span></p></div></section>

      <section className="bestsellers section-wrap" id="products"><div className="section-intro"><p className="eyebrow">NOS SOINS SIGNATURES</p><h2>Les essentiels<br />BLAIR</h2><p>Découvrez les soins emblématiques des gammes Hydratation et Anti-Chute.</p><button className="button dark" onClick={() => setSearchOpen(true)}>Voir les produits <ArrowRight size={15} /></button></div><div className="product-row">{products.map((product) => <article className="product-card" key={product.name}><button className="product-image" aria-label={`Ajouter ${product.name} au panier`} onClick={() => addToCart(product)}><img src={product.image} alt={product.alt} /></button><h3>{product.name}</h3><div className="product-bottom"><b>{product.price} DH</b><button className="quick-add" aria-label={`Ajouter ${product.name} au panier`} onClick={() => addToCart(product)}><ShoppingBag size={15} /></button></div></article>)}</div></section>

      <section className="expertise-banner section-wrap" id="expertise"><div className="expertise-copy"><p className="eyebrow">L’EXPERTISE BLAIR</p><h2>Une routine complète<br />pour prendre soin de vos cheveux</h2><p>Des gestes simples et des soins complémentaires, à choisir selon les besoins de vos cheveux.</p><button className="button dark" onClick={() => scrollTo('collections')}>Découvrir la routine <ArrowRight size={15} /></button></div><button className="story-link" onClick={() => scrollTo('ingredients')}><span className="play-circle"><Play size={10} fill="currentColor" /></span> Découvrir les ingrédients</button></section>

      <section className="collections section-wrap" id="collections"><div className="collections-heading"><div><p className="eyebrow">NOS GAMMES</p><h2>Des soins ciblés<br />pour chaque routine</h2></div><div className="carousel-actions"><button aria-label="Précédent" onClick={() => scrollTo('products')}><ArrowLeft /></button><button aria-label="Suivant" onClick={() => scrollTo('ingredients')}><ArrowRight /></button></div></div><div className="collection-grid"><article className="collection-tile hydration"><div><p>Gamme</p><h3>Hydratation</h3><span>Des soins nourrissants<br />pour cheveux secs.</span><button className="button pale" onClick={() => { setSearch('Hydratation'); setSearchOpen(true); }}>Découvrir <ArrowRight size={14} /></button></div></article><article className="collection-tile antichute"><div><p>Gamme</p><h3>Anti-chute</h3><span>Une routine fortifiante<br />pour le cuir chevelu.</span><button className="button pale" onClick={() => { setSearch('Anti-Chute'); setSearchOpen(true); }}>Découvrir <ArrowRight size={14} /></button></div></article></div></section>

      <section className="ingredients section-wrap" id="ingredients"><h2>Les ingrédients au cœur des formules</h2><div className="ingredient-grid">{ingredients.map(([name, desc], index) => <article className="ingredient-item" key={name}><div className="ingredient-image" role="img" aria-label={`Illustration de ${name}`} style={{ backgroundPosition: `${index * 25}% center` }} /><h3>{name}</h3><p>{desc}</p></article>)}</div></section>

      <section className="results section-wrap"><div className="comparison" style={{ '--split': `${range}%` } as React.CSSProperties}><img className="comparison-before" src="/images/hair-before.png" alt="Texture de cheveux, visuel conceptuel 1" /><div className="comparison-after"><img src="/images/hair-after.png" alt="Texture de cheveux, visuel conceptuel 2" /></div><span className="comparison-label before-label">Visuel 1</span><span className="comparison-label after-label">Visuel 2</span><div className="comparison-divider"><span /></div><input aria-label="Faire glisser pour comparer les deux visuels conceptuels" type="range" min="0" max="100" value={range} onChange={(e) => setRange(Number(e.target.value))} /></div><div className="results-copy"><p className="eyebrow">VISUELS CONCEPTUELS</p><h2>Une routine imaginée<br />autour des besoins des cheveux.</h2><p className="concept-note">Ces images sont des illustrations de concept. Elles ne représentent pas des résultats réels liés aux produits.</p></div></section>

      <footer className="footer"><div className="footer-brand"><a className="wordmark" href="#top">BL<span>A</span>IR</a><p>Une routine capillaire pensée autour de vos besoins.</p></div><div className="footer-links"><h2>Explorer</h2><button onClick={() => scrollTo('products')}>Les soins</button><button onClick={() => scrollTo('collections')}>Les gammes</button><button onClick={() => scrollTo('ingredients')}>Les ingrédients</button><button onClick={() => scrollTo('expertise')}>La routine</button></div><div className="footer-concept"><h2>À propos de ce site</h2><p>Concept de design indépendant, non affilié à la boutique officielle BLAIR. Démonstration sans vente ni traitement de commandes.</p></div><small>© 2026 — Concept indépendant BLAIR</small></footer>

      {notice && <div className="toast" role="status"><Check size={16} />{notice}</div>}
      {searchOpen && <div className="overlay" onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false); }}><section className="search-panel" role="dialog" aria-modal="true" aria-label="Rechercher un produit"><button className="panel-close" onClick={() => setSearchOpen(false)} aria-label="Fermer"><X /></button><p className="eyebrow">TROUVER VOTRE SOIN</p><h2>Recherche</h2><label className="search-field"><Search /><input autoFocus value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un produit…" /></label><div className="search-results">{results.length ? results.map((product) => <button key={product.name} onClick={() => { addToCart(product); setSearchOpen(false); }}><img src={product.image} alt="" /><span>{product.name}<b>{product.price} DH</b></span><ShoppingBag size={16} /></button>) : <p>Aucun soin trouvé.</p>}</div></section></div>}
      {cartOpen && <div className="overlay drawer-overlay" onClick={(e) => { if (e.target === e.currentTarget) setCartOpen(false); }}><aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Votre panier"><div className="drawer-heading"><div><p className="eyebrow">VOTRE SÉLECTION</p><h2>Mon panier <span>({cart.length})</span></h2></div><button className="panel-close" onClick={() => setCartOpen(false)} aria-label="Fermer"><X /></button></div>{cart.length ? <><div className="cart-items">{cart.map((product, i) => <div className="cart-item" key={`${product.name}-${i}`}><img src={product.image} alt="" /><div><b>{product.name}</b><span>{product.price} DH</span></div><button aria-label={`Retirer ${product.name}`} onClick={() => setCart((items) => items.filter((_, index) => index !== i))}><X size={15} /></button></div>)}</div><div className="cart-total"><span>Sous-total</span><b>{cart.reduce((total, item) => total + item.price, 0)} DH</b><p>Cette démonstration ne traite pas les commandes.</p><button className="button dark" onClick={() => setNotice('Concept de démonstration : aucune commande ne sera traitée.')}>Continuer <ArrowRight size={15} /></button></div></> : <div className="empty-cart"><ShoppingBag size={28} /><p>Votre panier est encore vide.</p><button className="button dark" onClick={() => { setCartOpen(false); scrollTo('products'); }}>Découvrir les soins <ArrowRight size={15} /></button></div>}</aside></div>}
      <div className="sr-only" aria-live="polite">{notice}</div>
    </main>
  );
}
