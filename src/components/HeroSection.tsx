import { type SyntheticEvent } from 'react';
import { type CaseStudyId } from '../data/atelierData';

interface HeroSectionProps {
  onOpenCaseStudy: (id: CaseStudyId) => void;
}

export function HeroSection({ onOpenCaseStudy }: HeroSectionProps) {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src =
      'https://placehold.co/1800x900/EDEAE3/181816?text=VILLA+SOLIS+—+MALLORCA';
  };

  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-12 max-w-[1440px] mx-auto">
      {/* Top Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 md:mb-14 border-b border-stoneBorder text-[11px] uppercase tracking-[0.2em] text-charcoalMuted">
        <div className="flex items-center gap-3">
          <span>Architectural &amp; Digital Flagship Atelier</span>
          <span className="hidden sm:inline text-bronze">•</span>
          <span className="hidden sm:inline">Est. MMXIX</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Zürich</span>
          <span>London</span>
          <span>Kyoto</span>
        </div>
      </div>

      {/* Asymmetric Editorial Headline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end mb-14 md:mb-20">
        <div className="lg:col-span-8">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.35rem] font-light leading-[1.03] tracking-[-0.02em] text-charcoal">
            Crafting Digital Flagships &amp;{' '}
            <span className="italic font-normal text-bronze">
              Spatial Identities
            </span>{' '}
            of Quiet Permanence.
          </h1>
        </div>
        <div className="lg:col-span-4 lg:pb-3 flex flex-col justify-between space-y-8">
          <p className="text-sm md:text-base text-charcoalMuted font-light leading-relaxed">
            We partner with visionary architectural practices, private
            sanctuaries, and heritage maisons to translate tactile physical
            spaces into high-converting digital experiences.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#selected-works"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] font-medium text-charcoal pb-1.5 border-b border-charcoal hover:border-bronze hover:text-bronze transition-colors"
            >
              <span>Explore Selected Works</span>
              <svg
                className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#atelier-estimator"
              className="text-xs uppercase tracking-[0.18em] text-charcoalMuted hover:text-charcoal transition-colors"
            >
              Configure Scope →
            </a>
          </div>
        </div>
      </div>

      {/* Editorial Hero Showcase Frame with Subtle Hover Tilt & Floating Caption Card */}
      <div
        id="heroShowcase"
        role="button"
        tabIndex={0}
        onClick={() => onOpenCaseStudy('villa-solis')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenCaseStudy('villa-solis');
          }
        }}
        className="relative rounded-2xl overflow-hidden border border-stoneBorder bg-alabasterDark shadow-sm group cursor-pointer"
      >
        <div className="editorial-img-wrap aspect-[16/10] md:aspect-[21/10] w-full">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
            onError={handleImageError}
            alt="Minimalist travertine coastal villa architecture in Mallorca"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle editorial vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent opacity-80" />
        </div>

        {/* Floating Featured Commission Card */}
        <div className="md:absolute md:bottom-8 md:left-8 md:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4 p-6 md:p-0 bg-alabaster md:bg-transparent border-t md:border-t-0 border-stoneBorder">
          <div className="bg-alabaster/95 backdrop-blur-md border border-stoneBorder rounded-xl p-5 md:p-6 max-w-md shadow-lg transition-transform duration-500 group-hover:-translate-y-1">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-bronze font-semibold">
                Featured Commission • 01
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-charcoalMuted">
                Hospitality &amp; Spatial
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-1.5">
              Villa Solis, Mallorca
            </h2>
            <p className="text-xs text-charcoalMuted font-light leading-relaxed mb-4">
              Complete digital flagship, private residency booking engine, and
              architectural monograph for a limestone cliffside sanctuary.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-stoneBorder text-[11px] uppercase tracking-[0.16em] text-charcoal font-medium">
              <span>+185% Direct Bookings</span>
              <span className="text-bronze group-hover:translate-x-1 transition-transform">
                Inspect Case Study →
              </span>
            </div>
          </div>

          {/* Scroll Cue Pill */}
          <div className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-full bg-espresso/75 backdrop-blur-md border border-white/15 text-alabaster text-[11px] uppercase tracking-[0.18em]">
            <span>Index 2024 — 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronzeLight" />
          </div>
        </div>
      </div>
    </section>
  );
}
