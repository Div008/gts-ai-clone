export default function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage:
          "url(https://gts.ai/wp-content/uploads/2024/05/imgpsh_fullsize_anim.jpeg)",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F172A]/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Side */}
          <div>
            <img
              src="https://gts.ai/wp-content/uploads/2024/05/GTS-logo.png"
              alt="GTS Logo"
              className="h-12 mb-6"
            />

            <p className="text-gray-300 leading-relaxed max-w-xl">
              Globose Technology Solutions Pvt Ltd (GTS) is an AI data
              collection company providing image, video, text and speech
              datasets for machine learning and artificial intelligence
              applications worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.facebook.com/GloboseTechnologySolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/gts_ai_data/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/company/gtsaidata/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@gtsaidata7850"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Links */}
            <div>
              <h4 className="font-bold text-lg mb-5">Important Links</h4>

              <ul className="space-y-3 text-gray-300 text-sm">
                <li>
                  <a href="/jobs">Careers</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="/case-study">Case Study</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/blog">Blogs & Articles</a>
                </li>
                <li>
                  <a href="/about-us">Company Profile</a>
                </li>
                <li>
                  <a href="/Terms-Conditions">Terms Conditions</a>
                </li>
                <li>
                  <a href="/dataset-download">Dataset Download</a>
                </li>
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="font-bold text-lg mb-5">Global Locations</h4>

              <div className="space-y-4 text-sm text-gray-300">
                <div>
                  <p className="font-semibold text-white mb-1">India</p>
                  <p>
                    TC-321-325, R-Tech Capital Highstreet, Phool Bagh, Bhiwadi,
                    Alwar (RJ.)-301019
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-1">China</p>
                  <p>13A Wing King Building, Guangzhou 510060</p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-1">USA</p>
                  <p>8 The Green, STE R4508, Dover, DE 19901</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-5">Get In Touch</h4>

              <div className="space-y-4 text-sm text-gray-300">
                <p>
                  TC-321-325, R-Tech Capital Highstreet, Phool Bagh, Bhiwadi,
                  Alwar (RJ.)-301019
                </p>

                <a href="mailto:hi@gts.ai" className="block hover:text-white">
                  hi@gts.ai
                </a>

                <a href="tel:919269795291" className="block hover:text-white">
                  +91-92697 95291
                </a>

                <span className="text-gray-500">Business Queries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center lg:text-left">
              © 2025 GLOBOSE TECHNOLOGY SOLUTIONS PRIVATE LIMITED. All Rights
              Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-conditions">Terms Conditions</a>
              <a href="/cancellation-and-refund">Cancellation & Refund</a>
              <a href="/shipping-and-delivery">Shipping & Delivery</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
