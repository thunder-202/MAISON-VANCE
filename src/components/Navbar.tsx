import { useEffect, useState } from 'react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-alabaster/90 backdrop-blur-md border-stoneBorder'
          : 'border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="group flex items-center gap-3 focus:outline-none">
          <span className="w-2 h-2 rounded-full bg-bronze transition-transform duration-500 group-hover:scale-150" />
          <span className="font-serif text-xl md:text-2xl tracking-[0.18em] uppercase font-normal text-charcoal">
            Maison Vance
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10 text-xs uppercase tracking-[0.16em] text-charcoalMuted font-medium">
          <a
            href="#selected-works"
            className="editorial-link hover:text-charcoal transition-colors"
          >
            Selected Works
          </a>
          <a
            href="#philosophy"
            className="editorial-link hover:text-charcoal transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#atelier-estimator"
            className="editorial-link hover:text-charcoal transition-colors"
          >
            Atelier Scope
          </a>
          <a
            href="#contact-footer"
            className="editorial-link hover:text-charcoal transition-colors"
          >
            Studios
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-charcoal/25 hover:border-charcoal bg-alabaster/80 backdrop-blur-md text-xs uppercase tracking-[0.15em] font-medium text-charcoal hover:bg-charcoal hover:text-alabaster transition-all duration-500 flex items-center gap-2.5 shadow-sm cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-pulse" />
            <span>Private Consultation</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            id="mobileMenuBtn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2.5 rounded-full border border-stoneBorder text-charcoal hover:bg-alabasterDark transition-colors cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.25"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        id="mobileMenu"
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } lg:hidden bg-alabaster border-b border-stoneBorder px-6 py-8 space-y-6`}
      >
        <div className="flex flex-col space-y-4 text-sm uppercase tracking-[0.16em] text-charcoal">
          <a
            href="#selected-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-stoneBorder/60"
          >
            Selected Works
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-stoneBorder/60"
          >
            Philosophy
          </a>
          <a
            href="#atelier-estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-stoneBorder/60"
          >
            Atelier Scope &amp; Estimate
          </a>
          <a
            href="#contact-footer"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1"
          >
            Global Studios
          </a>
        </div>
      </div>
    </header>
  );
}
