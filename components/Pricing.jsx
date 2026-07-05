import { FiCheck, FiInfo } from 'react-icons/fi';

const Pricing = () => {
  const tiers = [
    {
      name: "नियमित सफाइ",
      price: "रु. १,९९९",
      period: "बाट सुरु",
      desc: "सामान्य सफाइ र नियमित मर्मतका लागि उपयुक्त।",
      features: ["भुइँ र सिसा सफाइ", "डस्टिङ र मपिङ", "१-२ जना सफाइकर्मी", "सामान्य भान्सा सफाइ"],
      popular: false
    },
    {
      name: "डिप क्लीन प्याकेज",
      price: "रु. ३,९९९",
      period: "बाट सुरु",
      desc: "लामो समयदेखि जमेका कडा दाग र कुना सफाइका लागि।",
      features: ["पूर्ण गहिरो सफाइ (Deep Clean)", "बाथरुम र किचन कडा दाग हटाउने", "२-३ जना दक्ष सफाइकर्मी", "भ्याकुम र कीटाणुनाशक स्प्रे"],
      popular: true
    },
    {
      name: "कार्यालय प्याकेज",
      price: "कोटेशन",
      period: "अनुसार",
      desc: "व्यावसायिक स्पेस र कर्पोरेट कार्यालयहरूको लागि अनुकूलित मूल्य।",
      features: ["स्पेसको साइज अनुसार मूल्य", "अफिस समय अघि वा पछि सफाइ", "नियमित सम्झौतामा विशेष छुट", "मासिक रिपोर्टिङ र फलो-अप"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="min-h-screen bg-slate-50/50 px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-teal-600 font-bold text-sm tracking-wider uppercase bg-teal-50 px-4 py-1.5 rounded-full">मूल्य विवरण</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            पारदर्शी मूल्य, <span className="text-teal-600">कुनै लुकेको</span> शुल्क छैन
          </h2>
          <p className="text-slate-600">
            तपाईंको आवश्यकता अनुसारको किफायती योजना छनोट गर्नुहोस्। वास्तविक मूल्य स्पेसको क्षेत्रफल (Sq. Ft.) मा निर्भर हुनेछ।
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`bg-white border rounded-3xl p-8 relative flex flex-col justify-between transition-all duration-300 ${
                tier.popular 
                  ? 'border-teal-500 shadow-xl md:scale-105 z-10' 
                  : 'border-slate-100 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  लोकप्रिय छनोट
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{tier.name}</h3>
                  <p className="text-slate-400 text-xs mt-1">{tier.desc}</p>
                </div>

                {/* Price Display */}
                <div className="border-b border-slate-100 pb-6">
                  <span className="text-4xl font-black text-slate-800">{tier.price}</span>
                  <span className="text-slate-500 text-sm font-medium ml-1">/{tier.period}</span>
                </div>

                {/* Features list */}
                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <FiCheck className="text-teal-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Button */}
              <div className="pt-8">
                <a 
                  href="tel:+9779766925069"
                  className={`w-full inline-flex items-center justify-center font-bold py-3.5 px-4 rounded-xl text-center transition-all text-sm ${
                    tier.popular
                      ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  कोटेशन प्राप्त गर्नुहोस्
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Disclaimer Info Notice */}
        <div className="max-w-xl mx-auto mt-12 bg-white border border-slate-100 rounded-2xl p-4 flex items-start gap-3 text-xs text-slate-500 shadow-xs">
          <FiInfo size={18} className="text-teal-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            नोट: माथि उल्लेखित मूल्यहरू न्यूनतम सुरुवाती दर हुन्। घर वा कार्यालयको कुल कोठा सङ्ख्या र फोहोरको गम्भीरता हेरेर अन्तिम दर निर्धारण गरिनेछ। निश्चित जानकारीका लागि कृपया हामीलाई सिधै सम्पर्क गर्नुहोस्।
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;