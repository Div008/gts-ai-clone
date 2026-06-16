export default function WhyUs() {
  const features = [
    { icon: "https://gts.ai/wp-content/uploads/2024/05/wicon1-1.png", title: "INTERNATIONAL", points: ["Company based in USA, China & India", "Workforce located in 136 countries"] },
    { icon: "https://gts.ai/wp-content/uploads/2024/05/wicon2.png", title: "QUALITY ASSURED", points: ["Rigorous qualification process", "Top-notch quality assurance measures"] },
    { icon: "https://gts.ai/wp-content/uploads/2024/05/wicon3.png", title: "ISO CERTIFIED", points: ["ISO 9001:2015 . ISO 14001:2015", "ISO 45001:2018 . ISO 27001:2013"] },
    { icon: "https://gts.ai/wp-content/uploads/2024/05/wicon4.png", title: "LARGE WORKFORCE", points: ["More than 4.5 million", "More resources by partners on demand"] },
    { icon: "https://gts.ai/wp-content/uploads/2024/05/wicon5.png", title: "EXTENSIVE EXPERT", points: ["Over 11+ years of micro-task expertise", "Completed over 1 million projects"] },
    { icon: "https://gts.ai/wp-content/uploads/2024/05/wicon6.png", title: "SUSTAINABLE COMMITMENT", points: ["Measuring and monitoring carbon footprint", "Aiming for emission-neutral output"] },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Why Us?
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#215D7B]/5 to-[#A6477F]/5 rounded-3xl p-8 border border-[#215D7B]/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-[#A6477F]/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 mx-auto">
                <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                {feature.title}
              </h3>

              <ul className="text-gray-600 text-sm space-y-2 text-center">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#A6477F] rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}