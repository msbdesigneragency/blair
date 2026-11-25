import type { Metadata } from 'next';
import ProductCollection from '@/app/components/ProductCollection';
import { products } from '@/lib/products';

export const metadata: Metadata = { title: 'Gamme Hydratation | BLAIR', description: 'Les soins BLAIR de la gamme Hydratation.' };

export default function HydratationPage() {
  return <ProductCollection title="Gamme Hydratation" description="Des soins qui nourrissent et aident à préserver la souplesse des cheveux." items={products.filter((product) => product.gamme === 'Hydratation')} />;
}
