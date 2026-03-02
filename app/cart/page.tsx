'use client';

import Link from 'next/link';

export default function CartPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-4">Your Bag is Empty</h1>
      <p className="text-gray-600 mb-8">Looks like you haven't added anything to your bag yet.</p>
      <Link href="/" className="bg-pink text-white px-6 py-3 rounded hover:bg-pink/90 transition">
        Continue Shopping
      </Link>
    </main>
  );
}
