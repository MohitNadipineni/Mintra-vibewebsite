import Image from 'next/image';

interface ProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: string;
  discount: string;
}

export default function ProductCard({ image, brand, name, price, discount }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative w-full h-64">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800">{brand}</h3>
        <p className="text-gray-600 text-sm truncate">{name}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-pink font-semibold">{price}</span>
          <span className="text-green-600 text-sm">{discount}</span>
        </div>
      </div>
    </div>
  );
}