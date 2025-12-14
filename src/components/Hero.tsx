'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-20 pb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-sm text-white/70"
      >
        Full-stack developer • Next.js • TypeScript
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.6, ease: 'easeOut' }}
        className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl"
      >
        I build fast, modern web apps with clean UX and smooth motion.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.6, ease: 'easeOut' }}
        className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
      >
        Portfolio projects, real-world features, and thoughtful animations—built with Next.js,
        TypeScript, Tailwind, and Framer Motion.
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#work"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
        >
          View work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
