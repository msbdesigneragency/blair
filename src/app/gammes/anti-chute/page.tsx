import type { Metadata } from 'next';
import ProductCollection from '@/app/components/ProductCollection';
import { products } from '@/lib/products';

export const metadata: Metadata = { title: 'Gamme Anti-chute | BLAIR', description: 'Les soins BLAIR de la gamme Anti-chute.' };

export default function AntiChutePage() {
  return <ProductCollection title="Gamme Anti-chute" description="Une sélection de soins ciblés pour accompagner votre routine capillaire." items={products.filter((product) => product.gamme === 'Anti-chute')} />;
}
