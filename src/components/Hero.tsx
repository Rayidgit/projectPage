import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, Thermometer, Droplets, Wind, ShieldAlert, CheckCircle2, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  // Live simulated telemetry stream for hero visual interactivity
  const [telemetry, setTelemetry] = useState({
    temp: 31.4,
    humidity: 62.5,
    ammonia: 8.2,
    lpg: 110,
    status: 'OPTIMAL'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry({
        temp: +(31.0 + Math.random() * 0.8).toFixed(1),
        humidity: +(62.0 + Math.random() * 1.2).toFixed(1),
        ammonia: +(8.0 + Math.random() * 0.6).toFixed(1),
        lpg: Math.floor(108 + Math.random() * 5),
        status: 'OPTIMAL'
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                ESP32 Mesh · AWS IoT Core Online
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Smarter Monitoring.<br />
              <span className="gradient-text-emerald">Healthier Flocks.</span>
            </h1>

            {/* Supporting Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              An intelligent IoT-based poultry monitoring and control system that transforms environmental data into real-time insights and automated safety response.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#solution"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-cluck-navy transition-all duration-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-95"
              >
                <span>Explore CluckNet</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 transition-all duration-200 backdrop-blur-sm"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Quick Spec Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-white font-sans">99.9%</div>
                <div className="text-xs text-slate-400 font-medium">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400 font-sans">&lt; 100ms</div>
                <div className="text-xs text-slate-400 font-medium">ESP-NOW Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 font-sans">Dual-Layer</div>
                <div className="text-xs text-slate-400 font-medium">Auto Failover Power</div>
              </div>
            </div>

          </div>

          {/* Right Live IoT System Dashboard Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Panel */}
              <div className="glass-panel p-5 sm:p-6 rounded-3xl shadow-2xl border border-white/15 relative overflow-hidden bg-slate-900/90">
                
                {/* Header Status Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Zone 01 — Main Brooder</div>
                      <div className="text-[11px] text-slate-400 font-mono">ESP32-NODE-01 · Active</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {telemetry.status}
                  </span>
                </div>

                {/* Simulated Telemetry Stream Cards Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {/* Temperature */}
                  <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-white/5 relative overflow-hidden group">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="text-xs font-medium">Brooding Temp</span>
                      <Thermometer className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-2xl font-bold text-white font-mono">{telemetry.temp}°C</div>
                    <div className="text-[10px] text-emerald-400 mt-1 font-semibold">Target: 29–32°C (Week 2)</div>
                  </div>

                  {/* Humidity */}
                  <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-white/5 relative overflow-hidden group">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="text-xs font-medium">Humidity</span>
                      <Droplets className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-white font-mono">{telemetry.humidity}%</div>
                    <div className="text-[10px] text-emerald-400 mt-1 font-semibold">Optimal Range (50–70%)</div>
                  </div>

                  {/* Ammonia NH3 */}
                  <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-white/5 relative overflow-hidden group">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="text-xs font-medium">Ammonia (NH₃)</span>
                      <Wind className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-bold text-emerald-400 font-mono">{telemetry.ammonia} ppm</div>
                    <div className="text-[10px] text-slate-400 mt-1">Safety Limit: 20 ppm</div>
                  </div>

                  {/* LPG Gas Level */}
                  <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-white/5 relative overflow-hidden group">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="text-xs font-medium">LPG Level</span>
                      <ShieldAlert className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white font-mono">{telemetry.lpg} ppm</div>
                    <div className="text-[10px] text-emerald-400 mt-1 font-semibold">Regulator Valve Normal</div>
                  </div>
                </div>

                {/* System Activity Stream Footer */}
                <div className="bg-slate-950 p-3 rounded-2xl border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="font-mono text-[11px]">MQTT Topic: clucknet/aws/data</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">LIVE TELEMETRY</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
