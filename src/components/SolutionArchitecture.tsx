import React, { useState } from 'react';
import { Cpu, Wifi, Cloud, Database, Smartphone, ShieldCheck, Zap, Radio } from 'lucide-react';

export const SolutionArchitecture: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<'monitor' | 'detect' | 'respond'>('monitor');

  const flowNodes = [
    {
      id: 1,
      step: '01',
      title: 'Sensors Layer',
      subtitle: 'SHT30, MQ135 & MQ6',
      icon: Radio,
      badge: 'I2C & Analog',
      desc: 'SHT30 measures temperature & humidity via I2C. MQ135 measures ammonia (NH₃), and MQ6 detects LPG gas levels.'
    },
    {
      id: 2,
      step: '02',
      title: 'Edge Device',
      subtitle: 'ESP32 Microcontroller',
      icon: Cpu,
      badge: 'Local Control',
      desc: 'Processes signals locally. Immediately activates local buzzer alarm and 180° servo motor to close gas valve on danger.'
    },
    {
      id: 3,
      step: '03',
      title: 'ESP-NOW Wireless',
      subtitle: 'Low Latency Link',
      icon: Wifi,
      badge: 'Encrypted Link',
      desc: 'Transmits telemetry packets over encrypted peer-to-peer ESP-NOW protocol directly to gateway without internet.'
    },
    {
      id: 4,
      step: '04',
      title: 'Gateway ESP32',
      subtitle: 'WiFi Internet Bridge',
      icon: Wifi,
      badge: 'MQTT Bridge',
      desc: 'Forwards ESP-NOW local data packages over WiFi to cloud MQTT broker over TLS encrypted connection.'
    },
    {
      id: 5,
      step: '05',
      title: 'Cloud MQTT Broker',
      subtitle: 'AWS IoT Core / HiveMQ',
      icon: Cloud,
      badge: 'clucknet/aws/data',
      desc: 'High-throughput cloud MQTT broker handling publish-subscribe message queues over port 8883.'
    },
    {
      id: 6,
      step: '06',
      title: 'Backend Processing',
      subtitle: 'Spring Boot Java',
      icon: ShieldCheck,
      badge: 'REST & MQTT',
      desc: 'Hosted on AWS EC2. Subscribes to MQTT topics, executes business rules engine, and sends Firebase push notifications.'
    },
    {
      id: 7,
      step: '07',
      title: 'Dual Database',
      subtitle: 'MySQL & InfluxDB',
      icon: Database,
      badge: 'Relational + Time-Series',
      desc: 'MySQL stores users & devices. InfluxDB stores high-speed continuous sensor telemetry logs for trends.'
    },
    {
      id: 8,
      step: '08',
      title: 'Mobile Dashboard',
      subtitle: 'Flutter iOS / Android',
      icon: Smartphone,
      badge: 'Cross-Platform',
      desc: 'Farmers monitor real-time zone cards, view telemetry charts, receive emergency push notifications, and issue remote controls.'
    }
  ];

  return (
    <section id="solution-architecture" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            End-to-End System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Solution Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From physical environmental sensing on the edge to cloud processing, dual databases, and mobile app notifications.
          </p>
        </div>

        {/* Architecture Diagram Image Box */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 mb-12 shadow-sm overflow-hidden">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span>Verified System Architecture Diagram</span>
            <span className="text-emerald-700 font-mono font-bold">AWS IoT Core + Spring Boot</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200">
            <img
              src="/assets/system architecture.png"
              alt="CluckNet System Architecture Diagram"
              className="w-full h-auto object-contain max-h-[460px] mx-auto hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Interactive Data Flow Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {flowNodes.map((node) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                onMouseEnter={() => setSelectedNode(node.id)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'bg-white border-emerald-500 shadow-md scale-[1.02]'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400">{node.step}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {node.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-1">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">{node.title}</h3>
                    <div className="text-[11px] text-slate-500 font-medium">{node.subtitle}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Inspection Box */}
        {selectedNode && (
          <div className="bg-white p-6 rounded-3xl border border-emerald-300 shadow-sm mb-16 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Step {flowNodes[selectedNode - 1].step} Component
              </span>
              <h3 className="text-lg font-bold text-slate-900">{flowNodes[selectedNode - 1].title}</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
              {flowNodes[selectedNode - 1].desc}
            </p>
          </div>
        )}

        {/* Core Solution Triad & Physical Box Showcase */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Core Solution Capabilities</div>
              
              <div
                onClick={() => setActiveTab('monitor')}
                className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                  activeTab === 'monitor' ? 'bg-emerald-50/70 border-emerald-500' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="font-bold text-slate-900 text-sm mb-1">1. Real-Time Environmental Sensing</div>
                <div className="text-xs text-slate-600">Continuous sampling of temp, humidity, NH₃ ammonia, and LPG fuel gas.</div>
              </div>

              <div
                onClick={() => setActiveTab('detect')}
                className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                  activeTab === 'detect' ? 'bg-blue-50/70 border-blue-500' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="font-bold text-slate-900 text-sm mb-1">2. Intelligent Edge Detection</div>
                <div className="text-xs text-slate-600">ESP32 microcontrollers process drift limits locally at sub-second speeds.</div>
              </div>

              <div
                onClick={() => setActiveTab('respond')}
                className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                  activeTab === 'respond' ? 'bg-amber-50/70 border-amber-500' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="font-bold text-slate-900 text-sm mb-1">3. Smart Automated Physical Response</div>
                <div className="text-xs text-slate-600">Local acoustic alarm + 180° servo motor turning physical gas regulator valve off.</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm aspect-[16/10]">
                <img
                  src="/assets/our solution/Screenshot 2026-09-07 105418.png"
                  alt="CluckNet Hardware Module Prototype"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
