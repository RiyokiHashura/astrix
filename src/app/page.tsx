import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 px-8 py-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            ASTRIX
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/explore" className="text-white/60 hover:text-white transition-colors">
              Explore
            </Link>
            <Link href="/about" className="text-white/60 hover:text-white transition-colors">
              About
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex min-h-screen items-center justify-center p-8">
        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
          {/* Profile Image/Icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
            <Image
              src="/galaxy-icon.svg"
              alt="Galaxy Icon"
              fill
              className="opacity-90"
              priority
            />
          </div>

          {/* Content Box */}
          <div className="glass-panel z-10 px-8 py-6 text-center max-w-md">
            <h1 className="text-2xl font-medium mb-3 text-blue-400">
              Welcome to the cosmos
            </h1>
            <p className="text-white/70 mb-6">
              Your gateway to the universe awaits...
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-full transition-all duration-300 transform hover:-translate-y-0.5">
              Launch
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 