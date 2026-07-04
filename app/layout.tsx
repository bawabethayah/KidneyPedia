import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kidney Pedia | Nephrology Education',
  description: 'Connected nephrology education for physicians and patients.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
