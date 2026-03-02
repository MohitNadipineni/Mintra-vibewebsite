'use client';
import Link from 'next/link';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <Link href="/" className="text-2xl font-bold text-pink">
            Mintra
          </Link>

          {/* Search bar */}
          <div className="flex-1 px-4">
            <div className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search for brand, product, etc"
                className="w-full bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink"
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/profile">
              <User className="h-6 w-6 cursor-pointer hover:text-pink" />
            </Link>
            <Link href="/wishlist">
              <Heart className="h-6 w-6 cursor-pointer hover:text-pink" />
            </Link>
            <Link href="/cart">
              <ShoppingBag className="h-6 w-6 cursor-pointer hover:text-pink" />
            </Link>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex space-x-6 overflow-x-auto py-2">
            {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty'].map((cat) => {
              let href = '#';
              if (cat === 'Men') href = '/category/men';
              if (cat === 'Women') href = '/category/women';
              if (cat === 'Kids') href = '/category/kids';
              return (
                <li key={cat} className="whitespace-nowrap font-medium text-gray-700 hover:text-pink">
                  <Link href={href} className="hover:text-pink">{cat}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
