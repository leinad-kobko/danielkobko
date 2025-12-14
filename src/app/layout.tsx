import type { Metadata } from 'next';
import './globals.css';
import MotionProvider from '@/components/MotionProvider';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Next.js + TS + Tailwind + Framer Motion',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
