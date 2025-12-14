'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Daniel<span className="text-white/60">K</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 transition hover:border-white/30"
          >
            Let’s talk
          </a>
        </div>

        {/* Mobile: keep it simple for now */}
        <a
          href="#contact"
          className="md:hidden rounded-full border border-white/15 px-4 py-2 text-sm text-white/90"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
