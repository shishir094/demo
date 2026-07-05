import { FiCalendar, FiClock, FiCheckCircle, FiPhoneCall } from 'react-icons/fi';

const Main = () => {
  const features = [
    { id: 1, icon: <FiCalendar size={32} />, title: "सहज बुकिङ" },
    { id: 2, icon: <FiClock size={32} />, title: "समयमै सेवा" },
    { id: 3, icon: <FiCheckCircle size={32} />, title: "गुणस्तर ग्यारेन्टी" },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-teal-50/50 to-white px-6 py-12 md:px-12 lg:px-24 flex flex-col justify-center items-center">
      
      {/* Hero Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        
        {/* Left Section: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            हाम्रो <span className="text-teal-600 drop-shadow-xs">सफागञ्ज</span> सेवा
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            हामी नेपालगञ्जमा गुणस्तरीय र भरपर्दो सफाइ सेवाहरू प्रदान गर्दछौँ। घर, 
            कार्यालय, वा गहिरो सफाइ — हामी सबै गर्छौँ। सरल बुकिङ र उत्कृष्ट नतिजाको 
            लागि हामीलाई सम्झनुहोस्!
          </p>

          {/* Action Call-to-Action Link */}
          <div className="pt-2">
            <a 
              href="tel:+9779766925069" 
              className="inline-flex items-center gap-3 bg-teal-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:scale-105 active:scale-98 transition-all group"
            >
              <FiPhoneCall size={20} className="group-hover:animate-bounce" />
              अहिले बुकिङ गर्नुहोस्
            </a>
            <p className="text-xs text-slate-400 mt-2 italic">
              (सिधै कल गर्न यो बटन थिच्नुहोस्)
            </p>
          </div>

        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center group"
          >
            <div className="text-teal-600 bg-teal-50 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <p className="text-base font-bold text-slate-700 tracking-wide">
              {item.title}
            </p>
          </div>
        ))}
      </div>

        </div>

        {/* Right Section: Clean Graphic/Image Content */}
        <div className="relative flex justify-center items-center">
          {/* Decorative background blobs */}
          <div className="absolute w-72 h-72 bg-teal-200/40 rounded-full blur-3xl -z-10 animate-blob" />
          <div className="absolute w-64 h-64 bg-sky-200/30 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />
          
          {/* Main Visual Box */}
          <div className="w-full max-w-md aspect-square bg-white border border-slate-100 rounded-3xl shadow-xl p-8 flex flex-col justify-center items-center text-center space-y-5 hover:shadow-2xl transition-shadow duration-300">
            
            {/* Animated Cleaner and Machine Badge (Updated Here) */}
            <div className="bg-teal-50 p-3 rounded-full text-teal-600 relative animate-bounce duration-1000 flex items-center justify-center border border-teal-100">
                {/* SVG for a simple Cleaner and Machine (Alternative to a standard icon) */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-600">
                    <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 9V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="7" y="17" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 20H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              {/* Optional: keeps the sparkling ping effect */}
              {/* <span className="absolute top-1 right-1 w-3 h-3 bg-sky-400 rounded-full animate-ping" /> */}
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-700">चम्किलो र सफा स्पेस</h3>
              <p className="text-sm text-slate-400">तपाईं आराम गर्नुहोस्, सफाइ हामी गर्छौँ।</p>
            </div>

            {/* Custom Modern Styled CSS Illustration: Cleaning Theme */}
            <div className="w-full h-36 bg-linear-to-tr from-teal-50 to-sky-50 rounded-2xl border border-teal-100 flex items-center justify-center relative overflow-hidden group/vector">
              
              {/* Abstract Glass Window / Mirror effect */}
              <div className="absolute w-24 h-24 bg-white/60 border border-white rounded-lg rotate-12 flex items-center justify-center shadow-xs">
                {/* Window panes */}
                <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1 p-1 opacity-40">
                  <div className="bg-sky-200 rounded-xs"></div>
                  <div className="bg-sky-200 rounded-xs"></div>
                  <div className="bg-sky-200 rounded-xs"></div>
                  <div className="bg-sky-200 rounded-xs"></div>
                </div>
              </div>

              {/* Bubbles popping around */}
              <div className="absolute top-4 left-12 w-4 h-4 bg-teal-300/40 rounded-full animate-pulse" />
              <div className="absolute bottom-6 right-12 w-6 h-6 bg-sky-300/30 rounded-full animate-ping duration-2000" />
              <div className="absolute top-6 right-16 w-3 h-3 bg-teal-400/50 rounded-full" />
              
              {/* Shiny reflection diagonal line */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/40 opacity-40 group-hover/vector:animate-shine" />

              {/* Overlay Label */}
              <span className="absolute bottom-2 text-[11px] font-semibold text-teal-600/70 bg-white/80 px-3 py-0.5 rounded-full backdrop-blur-xs border border-teal-100">
                Safa Gunj Premium Clean
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Section: Features Grid Layout */}
      

    </main>
  );
};

export default Main;