export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 text-center w-full">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#A6477F]/20 text-[#E8B4D9] text-sm font-semibold mb-6 border border-[#A6477F]/30">
          🚀 Premium AI Data Collection
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white max-w-4xl mx-auto">
          Unlock High Quality Data to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Propel Your AI Forward</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Refine Your AI Vision: Premium Data Collection with a Human Touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/services" className="bg-[#215D7B] text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-[#1a4a63] transition shadow-lg hover:shadow-xl hover:-translate-y-1">
            Explore Services
          </a>
          <a href="/about-us" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/20 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}