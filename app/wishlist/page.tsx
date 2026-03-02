'use client';

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
    </main>
  );
}
