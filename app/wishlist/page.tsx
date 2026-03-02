'use client';

import Link from 'next/link';

export default function WishlistPage() {
  return (
    <main className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Placeholder cards for saved items */}
        <div className="border p-4 rounded-lg text-center text-gray-500">
          Your saved items will appear here.
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/" className="bg-pink text-white px-6 py-3 rounded hover:bg-pink/90 transition">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
