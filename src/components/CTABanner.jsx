export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 px-6" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's embrace the <br />future AI with us</h2>
        <a href="/services" className="inline-block bg-[#215D7B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#A6477F] transition duration-300">
          Explore
        </a>
      </div>
    </section>
  );
}