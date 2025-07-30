import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#0C1C47]">
            404
          </h1>
        </div>
        <h2 className="text-3xl font-bold text-[#0C1C47] mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-[#00BFFF] to-[#0C1C47] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[#00BFFF] text-[#00BFFF] px-8 py-4 rounded-full font-semibold hover:bg-[#00BFFF] hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
