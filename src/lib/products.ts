export type Product = { name: string; price: number; image: string; alt: string; gamme: 'Hydratation' | 'Anti-chute' };

export const products: Product[] = [
  { name: 'Shampooing hydratation intense', price: 199, image: '/images/shampoo-hydration.png', alt: 'Shampooing hydratation intense BLAIR', gamme: 'Hydratation' },
  { name: 'Lotion anti-chute', price: 169, image: '/images/lotion.png', alt: 'Lotion anti-chute BLAIR', gamme: 'Anti-chute' },
  { name: 'Masque capillaire réparateur', price: 149, image: '/images/mask.png', alt: 'Masque capillaire réparateur BLAIR', gamme: 'Hydratation' },
  { name: 'Huile repousse', price: 139, image: '/images/oil.png', alt: 'Huile repousse BLAIR', gamme: 'Anti-chute' },
  { name: 'Shampooing anti-chute', price: 199, image: '/images/shampoo-anti-chute.png', alt: 'Shampooing anti-chute BLAIR', gamme: 'Anti-chute' },
];
