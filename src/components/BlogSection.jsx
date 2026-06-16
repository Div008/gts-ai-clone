export default function BlogSection() {
  const blogs = [
    {
      title: "Exploring Face Image ...",
      desc: "In the ever-evolving world of technology, face image datasets have emerged as a cornerstone for modern AI systems and computer vision applications.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
      link: "/blog/exploring-face-image-datasets-insights-and-ethics",
    },
    {
      title: "Unlocking the Potential...",
      desc: "In the domain of artificial intelligence (AI), datasets for machine learning (ML) play a crucial role in training and improving model performance.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
      link: "/blog/unlocking-the-potential-why-ml-datasets-for-computer-vision-are-crucial",
    },
    {
      title: "Speech Transcription...",
      desc: "In today's fast-paced world of voice recognition technology, speech transcription emerges as a crucial link in creating intelligent systems.",
      img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop",
      link: "/blog/speech-transcription-navigating-the-future-of-voice-recognition-technology",
    },
    {
      title: "Enhancing AI & ML ...",
      desc: "In the rapidly evolving world of artificial intelligence and machine learning, advanced video transcription services are becoming essential.",
      img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
      link: "/blog/enhancing-ai-ml-models-with-advanced-video-transcription-services-a-comprehensive-guide",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#A6477F] font-semibold uppercase tracking-wider text-sm mb-3">
            Latest Insights
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Blog
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore industry insights, AI trends, machine learning innovations,
            and data-driven solutions shaping the future of technology.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#215D7B]/5 to-[#A6477F]/5 rounded-3xl overflow-hidden border border-[#215D7B]/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="p-4 pb-0 overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#215D7B] transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                  {blog.desc}
                </p>

                <a
                  href={blog.link}
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