export default function DatasetsSection() {
  const datasets = [
    {
      title: "Image Data Collection",
      desc: "We curate specialized image datasets, from medical imagery, invoices, to facial recognition, tailored to your…",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
      link: "/services/image-dataset-collection",
    },
    {
      title: "Video Data Collection",
      desc: "From CCTV footage to intricate traffic videos, we offer datasets that align with your unique requirements.",
      img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop",
      link: "/services/video-dataset-collection",
    },
    {
      title: "Speech Data Collection",
      desc: "Tackle projects in NLP, truth data collection, semantic analysis, and transcription with our exhaustive…",
      img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=600&auto=format&fit=crop",
      link: "/services/speech-data-collection",
    },
    {
      title: "Text Data Collection",
      desc: "Delve into our extensive text datasets – Business Cards, Documents, Menus, Receipts, Tickets, and more.",
      img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop",
      link: "/services/text-data-collection",
    },
    {
      title: "Image And Video Annotation",
      desc: "We specialize in diverse annotation techniques, meticulously refining images and videos for your machine.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      link: "/services/image-and-video-annotation",
    },
    {
      title: "Audio Transcription",
      desc: "Harness our AI-enhanced audio transcription services. Whether it's for ASR, Virtual Assistants, or Text to Speech.",
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop",
      link: "/services/audio-data-transcription",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A Glimpse into Our Diverse Datasets
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            For Machine Learning
          </p>
        </div>

        {/* Dataset Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datasets.map((dataset, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-4 border border-slate-200 shadow-xl hover:shadow-2xl hover:shadow-[#215D7B]/10 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src={dataset.img}
                  alt={dataset.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#215D7B] transition">
                  <a href={dataset.link}>{dataset.title}</a>
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                  {dataset.desc}
                </p>

                <a
                  href={dataset.link}
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}