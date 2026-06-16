export default function RemoteOpportunities() {
  return (
    <section className="bg-gray-100 px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-[#A6477F] font-semibold text-sm uppercase tracking-wider mb-2">work from anywhere</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Remote Opportunities with Us</h2>
          <p className="text-gray-600 text-sm mb-6">
            Join our expansive global work-from-home community. Dive into a vast array of projects, from concise surveys to long-haul assignments. Whether you're a social media enthusiast, a linguistic genius, or a multimedia maven, there's a spot for you.
          </p>
          <a href="https://dash.gts.ai" className="inline-flex items-center gap-2 border-2 border-[#215D7B] text-[#215D7B] px-6 py-3 rounded-lg font-semibold hover:bg-[#215D7B] hover:text-white transition duration-300">
            Read More
          </a>
        </div>
        <div className="flex-1">
          <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop" alt="Remote Work" className="w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
}