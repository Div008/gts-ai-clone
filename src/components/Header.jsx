import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1500px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-[180px_1fr_220px] items-center h-20">

          {/* Logo */}
          <div className="flex justify-start">
            <a href="/">
              <img
                src="https://gts.ai/wp-content/uploads/2024/06/image_2024_06_22T09_46_22_547Z-160x35.png"
                alt="GTS Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center items-center gap-10">

            <a
              href="/"
              className="text-[15px] font-medium text-gray-700 hover:text-[#215D7B] transition"
            >
              Home
            </a>

            <a
              href="/about-us"
              className="text-[15px] font-medium text-gray-700 hover:text-[#215D7B] transition"
            >
              The Company
            </a>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-[#215D7B] transition">
                Industries
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {[
                  "Technology",
                  "Financial Services",
                  "Retail",
                  "Healthcare",
                  "Automotive",
                  "Government",
                ].map((item) => (
                  <a
                    key={item}
                    href="/"
                    className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#215D7B]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-[#215D7B] transition">
                Services
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Annotation
                  </p>

                  {[
                    "Image and Video",
                    "Audio Data",
                    "Video Data",
                    "ADAS",
                    "LLM Training",
                  ].map((item) => (
                    <a
                      key={item}
                      href="/"
                      className="block py-2 text-sm text-gray-600 hover:text-[#A6477F]"
                    >
                      {item} Annotation
                    </a>
                  ))}
                </div>

                <div className="border-t border-gray-100 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Collection
                  </p>

                  {[
                    "Image",
                    "Video",
                    "Speech",
                    "Text",
                    "ADAS",
                    "LLM Training",
                  ].map((item) => (
                    <a
                      key={item}
                      href="/"
                      className="block py-2 text-sm text-gray-600 hover:text-[#A6477F]"
                    >
                      {item} Data Collection
                    </a>
                  ))}
                </div>

              </div>
            </div>

            <a
              href="/contact-us"
              className="text-[15px] font-medium text-gray-700 hover:text-[#215D7B] transition"
            >
              Contact Us
            </a>

          </nav>

          {/* Right Side */}
          <div className="flex justify-end items-center gap-4">

            <a
              href="https://dash.gts.ai/login"
              className="hidden md:block text-[15px] font-medium text-gray-700 hover:text-[#215D7B] transition"
            >
              Login
            </a>

            <a
              href="https://dash.gts.ai/register"
              className="bg-[#215D7B] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#18475d] transition"
            >
              Register
            </a>

            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col gap-4">

              <a href="/" className="text-gray-700 font-medium">
                Home
              </a>

              <a href="/about-us" className="text-gray-700 font-medium">
                The Company
              </a>

              <a href="/industries" className="text-gray-700 font-medium">
                Industries
              </a>

              <a href="/services" className="text-gray-700 font-medium">
                Services
              </a>

              <a href="/contact-us" className="text-gray-700 font-medium">
                Contact Us
              </a>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}