import React, { useState } from 'react';
import { Cpu, Code2, ChevronLeft, ChevronRight } from 'lucide-react';

export const HardwareSoftware: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hardware' | 'software'>('hardware');
  const [powerSlideIndex, setPowerSlideIndex] = useState<number>(0);

  const powerSlides = [
    {
      title: 'Hardware Power System Wiring Schematic 1',
      src: '/assets/device power system/Screenshot 2026-09-07 110119.png'
    },
    {
      title: 'Hardware Power System Wiring Schematic 2',
      src: '/assets/device power system/Screenshot 2026-09-07 110143.png'
    },
    {
      title: 'Hardware Power System Wiring Schematic 3',
      src: '/assets/device power system/Screenshot 2026-09-07 110108.png'
    }
  ];

  const hardwareItems = [
    { name: 'ESP32 Microcontroller', role: 'Edge Core & Gateway', specs: 'Dual-core 240MHz · 5V VIN · 150–200mA' },
    { name: 'SHT30 Sensor Module', role: 'Temperature & Humidity', specs: 'I2C Interface · 3.3V · 2mA' },
    { name: 'MQ135 Gas Sensor', role: 'Ammonia (NH₃) Gas Detection', specs: 'Analog Output · 5V · 150–200mA' },
    { name: 'MQ6 Gas Sensor', role: 'LPG Fuel Leak Detection', specs: 'Analog Output · 5V · 150–200mA' },
    { name: 'Servo Motor (MG995)', role: '180° Gas Regulator Shutoff', specs: '5V · High Torque 10–500mA' },
    { name: '5V Buzzer Module', role: 'Acoustic Hazard Alert', specs: '5V · 10–20mA High Decibel' },
    { name: 'LM2596 Buck Converter', role: 'Voltage Step Down (12V to 5V)', specs: '12V DC Input · 5V DC Output' },
    { name: '3S LiFePO4 Battery Pack', role: 'Uninterruptible Backup Power', specs: '3x 18650 Cells · 11.1V Nominal · 3S BMS' },
  ];

  const softwareItems = [
    { name: 'Spring Boot (Java)', role: 'Core Backend Framework', specs: 'AWS EC2 Hosted · REST APIs & MQTT Threads' },
    { name: 'AWS IoT Core', role: 'Cloud MQTT Broker', specs: 'MQTT over TLS · Topic clucknet/aws/data' },
    { name: 'MySQL Database', role: 'Relational User & Device Data', specs: 'AWS RDS Managed · Structured Storage' },
    { name: 'InfluxDB', role: 'Time-Series Telemetry DB', specs: 'High-speed Telemetry & Historical Analytics' },
    { name: 'Flutter Framework', role: 'Cross-Platform Mobile App', specs: 'iOS & Android · Real-Time Dashboard UI' },
    { name: 'Firebase Cloud Messaging', role: 'Instant Push Alerts', specs: 'Mobile Hazard Alert Notifications' },
    { name: 'ESP-NOW Protocol', role: 'Peer-to-Peer Radio Mesh', specs: 'Encrypted MAC Layer · Sub-100ms Latency' },
    { name: 'JWT & BCrypt Security', role: 'REST Authentication & Encryption', specs: 'HTTPS · Session Tokens & Password Hashing' },
  ];

  return (
    <section id="hardware-software" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Hardware & Software
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A production-grade engineering stack dividing edge physical hardware components and robust cloud software infrastructure.
          </p>
        </div>

        {/* Toggle Selector Tabs */}
        <div className="flex items-center justify-start gap-3 mb-12">
          <button
            onClick={() => setActiveTab('hardware')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all shadow-sm ${
              activeTab === 'hardware'
                ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Hardware Components</span>
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all shadow-sm ${
              activeTab === 'software'
                ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Software Stack</span>
          </button>
        </div>

        {/* HARDWARE AREA */}
        {activeTab === 'hardware' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {hardwareItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500/50 cursor-pointer group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">{item.role}</span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{item.name}</h3>
                  </div>
                  <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-600">
                    {item.specs}
                  </div>
                </div>
              ))}
            </div>

            {/* Power Wiring Schematic & Power Consumption Table Interactive Slider Card */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="mb-4">
                <h4 className="text-lg font-extrabold text-slate-900">Hardware Power System & Power Consumption Table</h4>
              </div>

              {/* Sliding Image Container */}
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 p-2 sm:p-4 relative group">
                <img
                  src={powerSlides[powerSlideIndex].src}
                  alt={powerSlides[powerSlideIndex].title}
                  className="w-full h-auto object-contain max-h-[520px] mx-auto hover:scale-[1.01] transition-transform duration-500 rounded-xl"
                />

                {/* Left Arrow Button */}
                <button
                  onClick={() => setPowerSlideIndex((prev) => (prev === 0 ? powerSlides.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-emerald-600 transition-all shadow-md active:scale-95 backdrop-blur-sm"
                  title="Previous Diagram"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={() => setPowerSlideIndex((prev) => (prev === powerSlides.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-emerald-600 transition-all shadow-md active:scale-95 backdrop-blur-sm"
                  title="Next Diagram"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Sliding Dot Navigation Indicators */}
                <div className="flex justify-center items-center gap-2 mt-4 pt-3 border-t border-slate-100">
                  {powerSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPowerSlideIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        powerSlideIndex === idx
                          ? 'w-8 bg-emerald-600'
                          : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                      title={`Switch to Diagram ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SOFTWARE AREA */}
        {activeTab === 'software' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {softwareItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/50 cursor-pointer group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">{item.role}</span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{item.name}</h3>
                  </div>
                  <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-600">
                    {item.specs}
                  </div>
                </div>
              ))}
            </div>

            {/* Security Architecture Diagram */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-4">Software Security & Auth Architecture</h4>
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 p-2 sm:p-4">
                <img
                  src="/assets/security.png"
                  alt="CluckNet Security Architecture Diagram"
                  className="w-full h-auto object-contain max-h-[480px] mx-auto hover:scale-[1.01] transition-transform duration-500 rounded-xl"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
