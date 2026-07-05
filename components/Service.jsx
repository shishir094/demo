import { FiHome, FiBriefcase, FiLayers, FiCheck, FiPhoneCall } from 'react-icons/fi';

const Service = () => {
  const servicesList = [
    {
      icon: <FiHome size={28} />,
      title: "आवासीय सफाइ (Residential)",
      desc: "घर, भान्सा, र कोठाहरूको गहिरो सफाइ। हामी भुइँ, झ्याल, र कुना-कुना चम्काउँछौँ।",
      points: ["भान्सा र बाथरुम डिप-क्लीन", "झाडु, पोछा र भ्याकुम", "झ्याल र सिसा सफाइ"]
    },
    {
      icon: <FiBriefcase size={28} />,
      title: "कार्यालय सफाइ (Commercial)",
      desc: "बैंक, कर्पोरेट कार्यालय, र पसलहरूको व्यावसायिक सफाइ सेवा जसले कामको वातावरण सुधार्छ।",
      points: ["डेस्क र क्याबिन डस्टिङ", "भुइँ र कार्पेट मर्मत", "नियमित वा साप्ताहिक सेवा"]
    },
    {
      icon: <FiLayers size={28} />,
      title: "गहिरो सफाइ (Deep Cleaning)",
      desc: "घर सर्ने समयमा वा लामो समयदेखि बन्द रहेको स्पेसलाई पूर्ण रूपमा नयाँ जस्तै बनाउने विशेष सफाइ।",
      points: ["कडा दागहरू हटाउने", "पङ्खा र बत्तीहरूको सफाइ", "डिसइन्फेक्ट गर्ने सेवा"]
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-linear-to-b from-white to-teal-50/30 px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-teal-600 font-bold text-sm tracking-wider uppercase bg-teal-50 px-4 py-1.5 rounded-full">हाम्रा सेवाहरू</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            हामी तपाईंको स्पेसलाई <span className="text-teal-600">चम्किलो</span> बनाउँछौँ
          </h2>
          <p className="text-slate-600">
            नेपालगञ्जभरि उपलब्ध हाम्रा प्रमुख सफाइ सेवाहरू तल हेर्नुहोस्। हामी गुणस्तरमा सम्झौता गर्दैनौँ।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Icon Circle */}
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <FiCheck className="text-teal-500 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Individual CTA */}
              <div className="pt-8">
                <a 
                  href="tel:+9779766925069" 
                  className="w-full inline-flex items-center justify-center gap-2 border border-teal-600/20 text-teal-700 font-bold py-3 px-4 rounded-xl hover:bg-teal-600 hover:text-white transition-all text-sm"
                >
                  <FiPhoneCall size={16} />
यो सेवा बुक गर्नुहोस्
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;