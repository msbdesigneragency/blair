import type { Metadata } from 'next';
import ProductCollection from '@/app/components/ProductCollection';
import { products } from '@/lib/products';

export const metadata: Metadata = { title: 'Tous les soins | BLAIR', description: 'Découvrez tous les soins capillaires BLAIR.' };

export default function BoutiquePage() {
  return <ProductCollection title="Tous les soins" description="Explorez les essentiels BLAIR et composez votre rituel capillaire." items={products} />;
}
