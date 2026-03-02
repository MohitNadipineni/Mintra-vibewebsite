import Image from 'next/image';

export default function Hero() {
  // using Unsplash fashion-themed image
  const imageUrl = 'https://source.unsplash.com/random/1200x600?fashion,model';

  return (
    <div className="relative w-full h-64 sm:h-96">
      <Image
        src={imageUrl}
        alt="Fashion hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-5xl font-bold">Discover the Latest Trends</h1>
      </div>
    </div>
  );
}