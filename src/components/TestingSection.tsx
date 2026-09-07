import React, { useState } from 'react';
import { Camera, CheckCircle2, Smartphone, Video } from 'lucide-react';

export const TestingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hardware' | 'unit' | 'video'>('hardware');

  return (
    <section id="testing" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            Verification & Quality Assurance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            System Testing & Results
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Empirical validation covering hardware PCB multimeter voltage rails, Java backend unit tests, and mobile app walkthrough.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-12">
          <button
            onClick={() => setActiveTab('hardware')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'hardware'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Hardware Voltage Testing
          </button>
          <button
            onClick={() => setActiveTab('unit')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'unit'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Software Unit Testing (JUnit)
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'video'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Flutter Mobile App Video
          </button>
        </div>

        {/* Tab 1: Hardware Testing */}
        {activeTab === 'hardware' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Empirical Hardware Multimeter Measurements</h3>
                <p className="text-xs text-slate-600">Verification of raw battery bus (10.78V DC) and buck-converted logic bus (4.99V DC).</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-4 h-4" /> Voltage Verification Passed
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 mb-4">
              <img
                src="/assets/testing/Screenshot 2026-09-07 110231.png"
                alt="Hardware PCB Testing and Multimeter Measurements"
                className="w-full h-auto object-contain max-h-[480px] mx-auto"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Software Unit Testing */}
        {activeTab === 'unit' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Spring Boot JUnit & Mockito Test Coverage</h3>
                <p className="text-xs text-slate-600">100% pass rate for DeviceAssignmentService, MqttSyncPublisher, and TelemetryProcessingService.</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-4 h-4" /> 11 / 11 Unit Tests Passed
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200">
              <img
                src="/assets/testing/Screenshot 2026-09-07 110253.png"
                alt="Software Unit Testing Execution Screenshots"
                className="w-full h-auto object-contain max-h-[480px] mx-auto"
              />
            </div>
          </div>
        )}

        {/* Tab 3: Video Demonstration */}
        {activeTab === 'video' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-slate-900">Flutter Mobile Application Demonstration</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Video Walkthrough
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Video demonstration of real-time zone monitoring cards, gas alert triggers, and control overrides.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                <Smartphone className="w-4 h-4" /> Android & iOS Supported
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 aspect-video max-w-4xl mx-auto shadow-xl flex items-center justify-center group">
              <video
                controls
                className="w-full h-full object-cover"
                poster="/assets/our solution/Screenshot 2026-09-07 105418.png"
              >
                <source src="/assets/video/app_demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-2 text-xs font-mono text-emerald-700 shadow-sm">
                <Video className="w-3.5 h-3.5" />
                <span>Flutter App Demo Video</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
