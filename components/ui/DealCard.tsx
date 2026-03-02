interface DealCardProps {
  brand: string;
  title: string;
  discountedPrice: string;
  originalPrice: string;
  discountPct: string;
}

export default function DealCard({
  brand,
  title,
  discountedPrice,
  originalPrice,
  discountPct,
}: DealCardProps) {
  return (
    <div className="relative border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow">
      {/* placeholder image from Unsplash */}
      <img
        src={`https://source.unsplash.com/random/400x400?fashion,${encodeURIComponent(
          title
        )}`}
        alt={title}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-700">{brand}</h3>
        <p className="mt-1 text-gray-900 font-semibold truncate">{title}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-pink font-bold">{discountedPrice}</span>
          <span className="text-gray-500 line-through text-sm">
            {originalPrice}
          </span>
        </div>
      </div>
      <div className="absolute top-2 right-2 bg-pink text-white text-xs font-bold px-2 py-1 rounded-full">
        {discountPct} off
      </div>
    </div>
  );
}
