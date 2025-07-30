import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#1e3a8a]">
            404
          </h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-[#0ea5e9] to-[#1e3a8a] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[#0ea5e9] text-[#0ea5e9] px-8 py-4 rounded-full font-semibold hover:bg-[#0ea5e9] hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
