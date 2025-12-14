import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      {/* Placeholder sections so your nav anchors work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-2xl font-semibold">Work</h2>
        <p className="mt-3 text-white/70">Add project cards here.</p>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 text-white/70">Add your story here.</p>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-white/70">Add email + links here.</p>
      </section>
    </main>
  );
}
