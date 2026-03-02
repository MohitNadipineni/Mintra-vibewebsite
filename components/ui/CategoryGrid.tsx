import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Men', image: 'https://source.unsplash.com/random/500x500?mens-fashion' },
  { name: 'Women', image: 'https://source.unsplash.com/random/500x500?womens-fashion' },
  { name: 'Kids', image: 'https://source.unsplash.com/random/500x500?kids-fashion' },
  { name: 'Home & Living', image: 'https://source.unsplash.com/random/500x500?home-decor' },
  { name: 'Beauty', image: 'https://source.unsplash.com/random/500x500?beauty' },
];

export default function CategoryGrid() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link href="#" key={cat.name} className="relative group overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}