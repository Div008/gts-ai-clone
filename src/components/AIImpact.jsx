export default function AIImpact() {
  return (
    <section className="relative overflow-hidden py-20 px-6 bg-[#0F172A]">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1920&auto=format&fit=crop)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Centered Content */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 mb-12 text-center">
          <p className="text-[#A6477F] font-semibold text-sm uppercase tracking-wider mb-2">
            Machine Learning
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Understanding AI's Transformative Impact
          </h2>

          <p className="text-gray-300 text-base mb-6 max-w-3xl mx-auto leading-relaxed">
            Today's AI is reshaping industries, AI Datasets Collection
            streamlining tasks, and supercharging productivity. By reducing
            human errors and ramping up efficiency, sectors like manufacturing,
            customer service, and logistics are witnessing a seismic shift.
          </p>

          <div className="flex justify-center">
            <a
              href="/blog/ais-global-impact-insights-from-the-experts-gts"
              className="inline-flex items-center gap-2 border-2 border-[#A6477F] text-[#A6477F] px-6 py-3 rounded-lg font-semibold hover:bg-[#A6477F] hover:text-white transition duration-300"
            >
              Read More

              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10 rounded-2xl p-6 hover:border-[#A6477F]/50 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop"
              alt="AI Annotation"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <h3 className="text-lg font-bold text-white mb-2">
              AI Is the Future of Annotation
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Human annotation, while reliable, is susceptible to errors and
              inconsistencies due to factors such as.......
            </p>

            <a
              href="/"
              className="inline-flex items-center gap-2 text-[#A6477F] font-semibold text-sm hover:gap-3 transition-all"
            >
              Learn More

              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10 rounded-2xl p-6 hover:border-[#215D7B]/50 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
              alt="Data Collection"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <h3 className="text-lg font-bold text-white mb-2">
              Effective Data Collection Techniques for AI/ML
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Gathering data from a variety of sources, both online and offline,
              and loading it into a single location is know.......
            </p>

            <a
              href="/"
              className="inline-flex items-center gap-2 text-[#215D7B] font-semibold text-sm hover:gap-3 transition-all"
            >
              Learn More

              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}