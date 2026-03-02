'use client';

import Link from 'next/link';

export default function ProfilePage() {
  return (
    <main className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Orders</h2>
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Wishlist</h2>
        <p className="text-gray-600">Your saved items will show up here.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-600">Have questions? Reach out to support@mintra.com</p>
      </section>
      <div className="mt-8">
        <Link href="/" className="bg-pink text-white px-6 py-3 rounded hover:bg-pink/90 transition">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
