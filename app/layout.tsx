import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mintra - Fashion E-commerce',
  description: 'High-performance fashion platform inspired by Myntra',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-charcoal">
        {children}
      </body>
    </html>
  );
}
