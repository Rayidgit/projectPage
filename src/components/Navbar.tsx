import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solution', href: '#solution' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Technology', href: '#technology' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cluck-navy/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <Cpu className="w-5 h-5 text-cluck-navy font-bold" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  Cluck<span className="text-emerald-400">Net</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  v1.0 IoT
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider">SMART POULTRY MONITORING</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-cluck-navy transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-95"
            >
              <span>Explore Platform</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cluck-navy/95 border-b border-white/10 backdrop-blur-xl px-4 pt-4 pb-6 transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold bg-emerald-500 text-cluck-navy"
              >
                <span>Explore Platform</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
