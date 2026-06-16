import { useState, useEffect } from 'react';

export default function YearsSection() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('years-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 50;
    const increment = 25 / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= 25) {
        setCount(25);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="years-section" className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 px-6 py-20 overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#A6477F]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#215D7B]/5 rounded-full blur-3xl"></div>
      
      <div className="absolute top-20 right-20 opacity-20 hidden lg:block">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-[#215D7B] rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="inline-block px-4 py-1.5 bg-[#A6477F]/10 text-[#A6477F] text-sm font-semibold rounded-full mb-4">
                Industry Leader
              </span>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                A Pioneering AI Data Collection Company with
              </h2>
              
              <div className="flex items-baseline gap-3 my-6">
                <span className="text-7xl md:text-8xl font-bold text-[#A6477F]">
                  {count}+
                </span>
                <span className="text-2xl md:text-3xl font-semibold text-gray-700">
                  Years
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                in the Industry
              </h3>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                As a front-runner in AI Dataset Collection Services, our mission at Globose Technology Solutions is to offer unparalleled data sets tailored for your machine learning needs. Whether you're in search of an image dataset, video dataset, speech dataset, or more, we are your trusted partner.
              </p>
              
              <a 
                href="/about-us" 
                className="inline-flex items-center gap-3 bg-[#215D7B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a4a63] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Read More About GTS
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className={`flex-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#A6477F] to-[#215D7B] rounded-2xl opacity-20"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://gts.ai/wp-content/uploads/2024/06/image1-768x820.jpg" 
                  alt="GTS AI Data Collection" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#215D7B] to-[#A6477F] rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-800">136+</p>
                    <p className="text-sm text-gray-600">Countries</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[#A6477F] text-white rounded-full px-5 py-2 shadow-lg">
                <p className="text-sm font-semibold">Trusted Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}