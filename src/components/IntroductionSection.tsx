import React from 'react';
import { ThermometerSnowflake, EyeOff, TrendingDown, Target, ShieldCheck, Activity } from 'lucide-react';

export const IntroductionSection: React.FC = () => {
  const broodingTimeline = [
    { week: 'Week 1', temp: '32–35°C', note: 'Critical Warmth' },
    { week: 'Week 2', temp: '29–32°C', note: 'Gradual Shift' },
    { week: 'Week 3', temp: '27–29°C', note: 'Feathering Stage' },
    { week: 'Week 4', temp: '24–26°C', note: 'Growth Acceleration' },
    { week: 'Week 5', temp: '21–24°C', note: 'Maturation' },
    { week: 'Week 6', temp: '21–24°C', note: 'Adult Climate' },
  ];

  return (
    <section id="introduction" className="py-24 relative bg-white border-y border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Introduction to <span className="text-emerald-600">CluckNet</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Poultry environments change faster than manual labor can inspect. CluckNet replaces guesswork with continuous, automated environmental sensing and real-time response.
          </p>
        </div>

        {/* Project Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Accurate Data Acquisition</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Continuous sampling of temperature, humidity, ammonia (NH₃), and LPG gases using calibrated sensors to ensure high precision data streams.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Reliable Transmission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Utilizing ESP-NOW peer-to-peer radio mesh and cloud MQTT TLS sockets with automatic battery backup to prevent single points of failure (SPOF).
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Rapid Hazard Response</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated physical response (180° servo motor shutting gas valve + acoustic buzzer alarm) combined with instant mobile push notifications.
            </p>
          </div>
        </div>

        {/* 3 Environmental Problem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Temperature */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-5">
                <ThermometerSnowflake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Brooding Temperature Drift</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Chicks require strict temperature curves from 35°C down to 21°C. Uncontrolled temperature shifts lead to high mortality, stunted growth, and poor feed conversion.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 space-y-1.5">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Brooding Temp Targets</div>
              {broodingTimeline.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-0.5 border-b border-slate-200/60 last:border-0">
                  <span className="text-slate-700 font-semibold">{item.week}</span>
                  <span className="font-mono text-amber-700 font-bold">{item.temp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 2: Humidity */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-5">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Humidity Extremes</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Relative humidity out of bounds impairs flock health and respiratory systems.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between text-xs font-bold text-amber-700 mb-0.5">
                  <span>Too Low (&lt; 50%)</span>
                  <span>Dry Dust Air</span>
                </div>
                <p className="text-[11px] text-slate-600">Increases airborne dust particles and dehydrates young chicks.</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between text-xs font-bold text-red-700 mb-0.5">
                  <span>Too High (&gt; 70%)</span>
                  <span>Bacterial Growth</span>
                </div>
                <p className="text-[11px] text-slate-600">Promotes pathogen growth, increases ammonia gas, and reduces body weight.</p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Ammonia & Gas Toxicity */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-5">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Ammonia & Gas Hazards</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Colorless Ammonia (NH₃) damages respiratory mucosa, while LPG gas leaks pose severe fire hazards.
              </p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="font-bold text-slate-900">5–10 ppm:</span> Lung irritation begins
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="font-bold text-slate-900">20–25 ppm:</span> Safety Limit (Immunity drops)
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span className="font-bold text-slate-900">150–200 ppm:</span> Growth halts completely
              </div>
            </div>
          </div>

        </div>

        {/* Reference Graphics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Environmental Brooding Reference</div>
            <h4 className="text-base font-bold text-slate-900 mb-3">Temperature Curve & Mortality Risks</h4>
            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <img
                src={`${import.meta.env.BASE_URL}assets/intro/Screenshot 2026-09-07 105229.png`}
                alt="Brooding Temperature Curve Diagram"
                className="w-full h-auto object-contain max-h-[280px] mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">Traditional Method Limitations</div>
            <h4 className="text-base font-bold text-slate-900 mb-3">Chicks Behavior Guesswork vs Continuous Data</h4>
            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <img
                src={`${import.meta.env.BASE_URL}assets/intro/Screenshot 2026-09-07 105243.png`}
                alt="Chicks Behavior Guesswork Diagram"
                className="w-full h-auto object-contain max-h-[280px] mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
