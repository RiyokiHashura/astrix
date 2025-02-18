'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="header">
        <div className="max-w-screen-xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 relative">
              <Image
                src="/galaxy-icon.svg"
                alt="Astrix Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="logo">ASTRIX</span>
          </div>

          <nav className="flex gap-8">
            <Link href="/" className="nav-item">Home</Link>
            <Link href="/explore" className="nav-item">Explore</Link>
            <Link href="/about" className="nav-item">About</Link>
          </nav>
        </div>
      </header>

      <main className="pt-[180px] px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="title mb-3">Explore the cosmos</h1>
            <p className="subtitle mb-6 text-center">Your gateway to the universe awaits...</p>
            <button className="btn">Launch</button>
          </div>
        </div>
      </main>
    </div>
  );
}
