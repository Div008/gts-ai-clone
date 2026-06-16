export default function DataAccuracy() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-lg p-4" style={{background: 'linear-gradient(59deg, rgba(229, 217, 255, .18) 0%, rgba(193, 211, 255, .18) 100%)'}}>
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop" alt="Data Accuracy" className="w-full rounded-lg" />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-[#A6477F] font-semibold text-sm uppercase tracking-wider mb-2">Ensuring Data Accuracy: The Backbone of Reliable AI</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Data Accuracy: AI's Trusty Cornerstone</h2>
          <p className="text-gray-600 text-sm mb-6">
            At the heart of reliable AI is precise data. Just as fuel contaminants can damage an engine, data inaccuracies can jeopardize AI efficiency. Recognizing the paramount importance of data accuracy, we are devoted to fostering AI systems that are as sharp as they are smart. Experience our unwavering commitment to data integrity and elevate your AI capabilities.
          </p>
          <a href="/blog/the-backbone-of-ai-how-quality-training-data-shapes-our-future-technologies" className="inline-flex items-center gap-2 border-2 border-[#215D7B] text-[#215D7B] px-6 py-3 rounded-lg font-semibold hover:bg-[#215D7B] hover:text-white transition duration-300">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}