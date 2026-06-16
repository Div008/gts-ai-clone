export default function AudioServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* Image */}
        <div className="w-full lg:w-[45%]">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=1200&auto=format&fit=crop"
              alt="Audio Recording Services"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-[55%]">
          <p className="text-[#A6477F] font-semibold text-sm uppercase tracking-wider mb-3">
            Machine Learning
          </p>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Audio Recording Services
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our services span the entire data management spectrum, beginning
            with meticulous data labeling. We then streamline data operations,
            deploy efficient production pipelines, and integrate
            human-in-the-loop methodologies, ensuring impeccable results.
          </p>

          <a
            href="/services/speech-data-collection"
            className="inline-flex items-center gap-2 border-2 border-[#215D7B] text-[#215D7B] px-6 py-3 rounded-lg font-semibold hover:bg-[#215D7B] hover:text-white transition duration-300"
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
    </section>
  );
}