import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/ui/Hero';
import CategoryGrid from '../components/ui/CategoryGrid';
import DealCard from '../components/ui/DealCard';

interface Deal {
  brand: string;
  title: string;
  discountedPrice: string;
  originalPrice: string;
  discountPct: string;
}

const deals: Deal[] = [
  {
    brand: 'Fashion Co.',
    title: 'Summer Jacket',
    discountedPrice: '$59.99',
    originalPrice: '$99.99',
    discountPct: '40%',
  },
  {
    brand: 'Style Hub',
    title: 'Classic Jeans',
    discountedPrice: '$39.99',
    originalPrice: '$79.99',
    discountPct: '50%',
  },
  {
    brand: 'Urban Wear',
    title: 'Sneaker X',
    discountedPrice: '$89.99',
    originalPrice: '$129.99',
    discountPct: '30%',
  },
  {
    brand: 'Elegance',
    title: 'Evening Dress',
    discountedPrice: '$149.99',
    originalPrice: '$249.99',
    discountPct: '40%',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <CategoryGrid />
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Deal of the Day</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {deals.map((deal, idx) => (
                <DealCard key={idx} {...deal} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
