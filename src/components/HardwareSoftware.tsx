import React, { useState } from 'react';
import { Cpu, Code2, Lock, Zap, Check } from 'lucide-react';

export const HardwareSoftware: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hardware' | 'software'>('hardware');

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
    { name: 'AWS IoT Core / HiveMQ', role: 'Cloud MQTT Broker', specs: 'MQTT over TLS · Topic clucknet/aws/data' },
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
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Engineering Specifications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Hardware & Software
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A production-grade engineering stack dividing edge physical hardware components and robust cloud software infrastructure.
          </p>
        </div>

        {/* Toggle Selector Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
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
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">{item.role}</span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.name}</h3>
                  </div>
                  <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-600">
                    {item.specs}
                  </div>
                </div>
              ))}
            </div>

            {/* Power Wiring Schematic */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                <Zap className="w-4 h-4" />
                Uninterruptible Failover Architecture
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-4">Hardware Power System Schematic</h4>
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200">
                <img
                  src="/assets/device power system/Screenshot 2026-09-07 110108.png"
                  alt="CluckNet Power Wiring Schematic"
                  className="w-full h-auto object-contain max-h-[360px] mx-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* SOFTWARE AREA */}
        {activeTab === 'software' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {softwareItems.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">{item.role}</span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.name}</h3>
                  </div>
                  <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-600">
                    {item.specs}
                  </div>
                </div>
              ))}
            </div>

            {/* Security Architecture Diagram */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                <Lock className="w-4 h-4" />
                Multi-Layer Telemetry Security
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-4">Software Security & Auth Architecture</h4>
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200">
                <img
                  src="/assets/security.png"
                  alt="CluckNet Security Architecture Diagram"
                  className="w-full h-auto object-contain max-h-[360px] mx-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
