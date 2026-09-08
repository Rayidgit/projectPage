import React, { useState } from 'react';
import { CheckCircle2, Smartphone, Video, ChevronLeft, ChevronRight, Maximize2, X, Code, Layers, Server, Zap, Cpu } from 'lucide-react';

interface SoftwareSlide {
  id: string;
  title: string;
  tabLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  badgeColor: string;
  description: string;
  imageSrc: string;
  alt: string;
}

interface HardwareSlide {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const hardwareVoltageSlides: HardwareSlide[] = [
  {
    id: 'rail1',
    title: 'Raw Battery Bus Voltage Measurement (10.78V DC)',
    badge: 'Battery Rail (10.78V DC)',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Empirical digital multimeter measurement verifying nominal 10.78V DC raw battery supply bus.',
    imageSrc: '/assets/testing/Hardware testing1.png',
    alt: 'Multimeter measurement showing 10.78V DC battery rail'
  },
  {
    id: 'rail2',
    title: 'Buck-Converted Logic Bus Supply (4.99V DC)',
    badge: 'Logic Rail (4.99V DC)',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Multimeter measurement verifying 4.99V DC regulated logic bus output from LM2596 buck converter module.',
    imageSrc: '/assets/testing/Hardware testing2.png',
    alt: 'Multimeter measurement showing 4.99V DC logic supply'
  }
];

const softwareSlides: SoftwareSlide[] = [
  {
    id: 'unit',
    title: 'Spring Boot JUnit & Mockito Test Coverage',
    tabLabel: 'Unit Testing',
    icon: Code,
    badge: '11 / 11 Passed',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: '100% pass rate for DeviceAssignmentService, MqttSyncPublisher, and TelemetryProcessingService.',
    imageSrc: '/assets/testing/unit testing.jpg',
    alt: 'Software Unit Testing Execution Screenshots'
  },
  {
    id: 'mock',
    title: 'Mock Hardware & Telemetry Simulation Testing',
    tabLabel: 'Mock Testing',
    icon: Layers,
    badge: 'Simulation Active',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Automated mock test suite validating edge-to-cloud payload publishing, MQTT sync, and failure recovery.',
    imageSrc: '/assets/testing/Mock testing.png',
    alt: 'Mock Testing Execution Screenshots'
  },
  {
    id: 'api',
    title: 'REST API Endpoint & Integration Validation',
    tabLabel: 'API Testing',
    icon: Server,
    badge: 'Endpoints Verified',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    description: 'Integration tests confirming HTTP 200 responses, request serialization, and authentication header validation.',
    imageSrc: '/assets/testing/API testing.png',
    alt: 'API Testing Execution Screenshots'
  }
];

export const TestingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hardware' | 'software'>('hardware');
  const [hardwareSubTab, setHardwareSubTab] = useState<'voltage' | 'board'>('voltage');
  const [currentHardwareSlide, setCurrentHardwareSlide] = useState(0);
  const [currentSoftwareSlide, setCurrentSoftwareSlide] = useState(0);
  const [selectedImageModal, setSelectedImageModal] = useState<{ src: string; title: string } | null>(null);

  const nextHardwareSlide = () => {
    setCurrentHardwareSlide((prev) => (prev + 1) % hardwareVoltageSlides.length);
  };

  const prevHardwareSlide = () => {
    setCurrentHardwareSlide((prev) => (prev - 1 + hardwareVoltageSlides.length) % hardwareVoltageSlides.length);
  };

  const nextSoftwareSlide = () => {
    setCurrentSoftwareSlide((prev) => (prev + 1) % softwareSlides.length);
  };

  const prevSoftwareSlide = () => {
    setCurrentSoftwareSlide((prev) => (prev - 1 + softwareSlides.length) % softwareSlides.length);
  };

  const activeHardwareSlide = hardwareVoltageSlides[currentHardwareSlide];
  const activeSlide = softwareSlides[currentSoftwareSlide];

  return (
    <section id="testing" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            System Testing & Results
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Empirical validation covering hardware PCB multimeter voltage rails, Java backend unit/mock/API tests, and system integration.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-8">
          <button
            onClick={() => setActiveTab('hardware')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'hardware'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Hardware Testing
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'software'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Software Testing
          </button>
        </div>

        {/* Tab 1: Hardware Testing (Sliding Window for 1 & 2, Standalone Window for 3) */}
        {activeTab === 'hardware' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm relative">
            
            {/* Hardware Sub-tab selector */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHardwareSubTab('voltage')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    hardwareSubTab === 'voltage'
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Multimeter Voltage Rails (2 Slides)</span>
                </button>
                <button
                  onClick={() => setHardwareSubTab('board')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    hardwareSubTab === 'board'
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PCB Board & Circuit Setup</span>
                </button>
              </div>
            </div>

            {/* Window 1: Multimeter Voltage Rails Carousel (Hardware testing 1 & 2) */}
            {hardwareSubTab === 'voltage' && (
              <div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <span>{activeHardwareSlide.title}</span>
                    </h3>
                    <p className="text-xs text-slate-600 max-w-2xl">{activeHardwareSlide.description}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shrink-0 ${activeHardwareSlide.badgeColor}`}>
                    <CheckCircle2 className="w-4 h-4" /> {activeHardwareSlide.badge}
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 group">
                  <div 
                    className="cursor-pointer relative overflow-hidden flex items-center justify-center min-h-[300px] max-h-[520px]"
                    onClick={() => setSelectedImageModal({ src: activeHardwareSlide.imageSrc, title: activeHardwareSlide.title })}
                  >
                    <img
                      key={activeHardwareSlide.id}
                      src={activeHardwareSlide.imageSrc}
                      alt={activeHardwareSlide.alt}
                      className="w-full h-auto object-contain max-h-[520px] mx-auto transition-all duration-500 ease-in-out group-hover:scale-[1.01]"
                    />

                    {/* Hover overlay hint */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-all flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900/90 text-white text-xs px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 shadow-xl border border-white/10">
                        <Maximize2 className="w-3.5 h-3.5 text-emerald-400" /> Click to Expand Full View
                      </span>
                    </div>
                  </div>

                  {/* Prev / Next overlay arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevHardwareSlide();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/20 backdrop-blur-md opacity-70 hover:opacity-100 transition-all shadow-lg active:scale-95"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextHardwareSlide();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/20 backdrop-blur-md opacity-70 hover:opacity-100 transition-all shadow-lg active:scale-95"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Slide Indicator Dots at bottom */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/10 shadow-md">
                    {hardwareVoltageSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentHardwareSlide(idx);
                        }}
                        className={`h-2 rounded-full transition-all ${
                          currentHardwareSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Go to hardware slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Window 2: PCB Board & Circuit Setup (Hardware testing 3) */}
            {hardwareSubTab === 'board' && (
              <div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">ESP32 Mainboard & Power Circuit Assembly</h3>
                    <p className="text-xs text-slate-600 max-w-2xl">
                      Complete hardware board verification featuring ESP32 node, LM2596 buck converter, 2-channel relay module, and power distribution bus.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                    <CheckCircle2 className="w-4 h-4" /> Board Assembly Verified
                  </span>
                </div>

                <div 
                  className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 cursor-pointer group relative flex items-center justify-center min-h-[300px] max-h-[520px]"
                  onClick={() => setSelectedImageModal({ src: '/assets/testing/Hardware testing.png', title: 'ESP32 Mainboard & Power Circuit Assembly' })}
                >
                  <img
                    src="/assets/testing/Hardware testing.png"
                    alt="ESP32 PCB Mainboard and Power Circuit Setup"
                    className="w-full h-auto object-contain max-h-[520px] mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-all flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900/90 text-white text-xs px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 shadow-xl border border-white/10">
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" /> Click to Expand Full View
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* Tab 2: Software Unit / Mock / API Testing Slider */}
        {activeTab === 'software' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm relative">
            
            {/* Sub-tab selection pill buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                {softwareSlides.map((slide, idx) => {
                  const Icon = slide.icon;
                  const isActive = currentSoftwareSlide === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSoftwareSlide(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-slate-900 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{slide.tabLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slide Header Info */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span>{activeSlide.title}</span>
                </h3>
                <p className="text-xs text-slate-600 max-w-2xl">{activeSlide.description}</p>
              </div>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shrink-0 ${activeSlide.badgeColor}`}>
                <CheckCircle2 className="w-4 h-4" /> {activeSlide.badge}
              </span>
            </div>

            {/* Image Slide Area */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 group">
              <div 
                className="cursor-pointer relative overflow-hidden flex items-center justify-center min-h-[300px] max-h-[520px]"
                onClick={() => setSelectedImageModal({ src: activeSlide.imageSrc, title: activeSlide.title })}
              >
                <img
                  key={activeSlide.id}
                  src={activeSlide.imageSrc}
                  alt={activeSlide.alt}
                  className="w-full h-auto object-contain max-h-[520px] mx-auto transition-all duration-500 ease-in-out group-hover:scale-[1.01]"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-all flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900/90 text-white text-xs px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 shadow-xl border border-white/10">
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-400" /> Click to Expand Full View
                  </span>
                </div>
              </div>

              {/* Prev / Next overlay arrows on image sides */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSoftwareSlide();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/20 backdrop-blur-md opacity-70 hover:opacity-100 transition-all shadow-lg active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSoftwareSlide();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/20 backdrop-blur-md opacity-70 hover:opacity-100 transition-all shadow-lg active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Indicator Dots at bottom of image */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/10 shadow-md">
                {softwareSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSoftwareSlide(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      currentSoftwareSlide === idx ? 'w-6 bg-emerald-400' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Image Modal */}
      {selectedImageModal && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImageModal(null)}
        >
          <div 
            className="relative max-w-6xl w-full bg-slate-900 rounded-3xl border border-slate-800 p-4 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {selectedImageModal.title}
              </h4>
              <button
                onClick={() => setSelectedImageModal(null)}
                className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto flex-1 flex items-center justify-center p-2">
              <img
                src={selectedImageModal.src}
                alt={selectedImageModal.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

