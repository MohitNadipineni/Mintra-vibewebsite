'use client';

export default function ProfilePage() {
  return (
    <main className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">User Details</h2>
        <p className="text-gray-700">Name: Jane Doe</p>
        <p className="text-gray-700">Email: jane@example.com</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">My Orders</h2>
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      </section>
    </main>
  );
}
