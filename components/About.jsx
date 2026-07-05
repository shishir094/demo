import { FiUsers, FiShield, FiHeart } from 'react-icons/fi';

const About = () => {
  const coreValues = [
    {
      icon: <FiUsers size={24} />,
      title: "स्थानीय र दक्ष टिम",
      desc: "हाम्रा सफाइकर्मीहरू प्रशिक्षित, अनुभवी र स्थानीय स्तरमै विश्वसनीय छन्।"
    },
    {
      icon: <FiShield size={24} />,
      title: "पूर्ण सुरक्षा र भरोसा",
      desc: "तपाईंको बहुमूल्य सामानहरूको सुरक्षा हाम्रो पहिलो प्राथमिकता हो। ढुक्क भएर काम सुम्पिनुहोस्।"
    },
    {
      icon: <FiHeart size={24} />,
      title: "१००% सन्तुष्टि ग्यारेन्टी",
      desc: "यदि काम चित्तबुझ्दो भएन भने हामी त्यसलाई तुरुन्त सच्याएर शतप्रतिशत सन्तुष्टि सुनिश्चित गर्छौँ।"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-white px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Main Banner Story Split Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Block Text */}
          <div className="space-y-6">
            <span className="text-teal-600 font-bold text-sm tracking-wider uppercase bg-teal-50 px-4 py-1.5 rounded-full">हाम्रो कथा</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight leading-tight">
              नेपालगञ्जलाई स्वच्छ र <br />
              <span className="text-teal-600">सफा राख्ने</span> हाम्रो साझा अभियान
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              सफागञ्ज (Safa Gunj) केवल एक सफाइ एजेन्सी मात्र होइन, यो आधुनिक जीवनशैलीलाई सहज बनाउने एउका उद्देश्यमूलक प्रयास हो। आजको व्यस्त समयमा तपाईंको पानी ट्याङ्कीको सरसफाइ जिम्मेवारी हामी लिन्छौँ ताकि तपाईं आफ्नो महत्वपूर्ण समय अन्य उत्पादनशील काममा लगाउन सक्नुहोस्।
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              हामी अत्याधुनिक मेसिन र वातावरण-मैत्री रसायनहरूको प्रयोग गरेर छिटो, छरितो र गहिरो सफाइ सेवा प्रदान गर्दछौँ।
            </p>
          </div>

          {/* Right Block Stylized Image Canvas Frame */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-sm aspect-4/5 bg-linear-to-tr from-teal-600 to-sky-500 rounded-3xl p-1 shadow-2xl relative overflow-hidden group">
              {/* Grid abstract patterns to look like visual architecture framework layout */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              <div className="w-full h-full bg-slate-900/10 rounded-[22px] flex flex-col justify-end p-8 text-white space-y-2 z-10 relative">
                <span className="text-4xl font-black">Safa Gunj</span>
                <p className="text-sm text-teal-100 font-medium">नेपालगञ्जकै सबैभन्दा भरपर्दो क्लिनिङ सर्भिस</p>
              </div>
            </div>
            
            {/* Background Accent Square Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-100 rounded-2xl -z-10 rotate-12" />
          </div>

        </div>

        {/* Bottom Core Values Segment */}
        <div className="border-t border-slate-100 pt-16 space-y-12">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-slate-800">हामीलाई किन रोज्ने?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-slate-50/70 border border-slate-100 rounded-2xl p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-white text-teal-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-800">{value.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;