import { useEffect, useState } from 'react';

interface FooterSectionProps {
  onOpenBooking: () => void;
}

interface StudioTimes {
  zurich: string;
  london: string;
  kyoto: string;
}

function getFormattedStudioTimes(): StudioTimes {
  const now = new Date();
  const fmt = (tz: string) => {
    try {
      return new Intl.DateTimeFormat('en-GB', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);
    } catch {
      return '--:--';
    }
  };

  return {
    zurich: fmt('Europe/Zurich'),
    london: fmt('Europe/London'),
    kyoto: fmt('Asia/Tokyo'),
  };
}

export function FooterSection({ onOpenBooking }: FooterSectionProps) {
  const [clocks, setClocks] = useState<StudioTimes>(() =>
    getFormattedStudioTimes()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setClocks(getFormattedStudioTimes());
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      id="contact-footer"
      className="bg-espresso text-alabaster pt-24 pb-12 px-6 md:px-12 border-t border-espressoBorder"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Top CTA & Studio Clocks Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-espressoBorder">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.22em] text-bronzeLight">
              New Commissions • Q3 / Q4
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1]">
              Ready to articulate your{' '}
              <span className="italic text-bronzeLight">permanent</span> digital
              presence?
            </h2>
            <div className="pt-4 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-4 rounded-full bg-alabaster text-charcoal hover:bg-bronzeLight hover:text-espresso transition-all duration-500 text-xs uppercase tracking-[0.18em] font-medium cursor-pointer"
              >
                Schedule Private Briefing
              </button>
              <a
                href="mailto:atelier@maisonvance.com"
                className="text-xs uppercase tracking-[0.18em] text-alabaster/80 hover:text-bronzeLight transition-colors border-b border-alabaster/30 pb-1"
              >
                atelier@maisonvance.com
              </a>
            </div>
          </div>

          {/* Live Global Studio Time Ticker */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-4 lg:pl-8 items-end">
            <div className="p-4 rounded-xl bg-espressoElevated border border-espressoBorder">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-bronzeLight mb-1">
                Zürich
              </span>
              <span
                id="clock-zurich"
                className="font-serif text-xl md:text-2xl text-alabaster"
              >
                {clocks.zurich}
              </span>
              <span className="block text-[10px] text-alabaster/50 mt-1">
                CET • Atelier
              </span>
            </div>
            <div className="p-4 rounded-xl bg-espressoElevated border border-espressoBorder">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-bronzeLight mb-1">
                London
              </span>
              <span
                id="clock-london"
                className="font-serif text-xl md:text-2xl text-alabaster"
              >
                {clocks.london}
              </span>
              <span className="block text-[10px] text-alabaster/50 mt-1">
                GMT • Salon
              </span>
            </div>
            <div className="p-4 rounded-xl bg-espressoElevated border border-espressoBorder">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-bronzeLight mb-1">
                Kyoto
              </span>
              <span
                id="clock-kyoto"
                className="font-serif text-xl md:text-2xl text-alabaster"
              >
                {clocks.kyoto}
              </span>
              <span className="block text-[10px] text-alabaster/50 mt-1">
                JST • Residency
              </span>
            </div>
          </div>
        </div>

        {/* Oversized Display Wordmark */}
        <div className="py-12 md:py-16 border-b border-espressoBorder overflow-hidden">
          <div className="font-serif text-[13vw] lg:text-[11.5rem] leading-none tracking-[0.06em] uppercase text-center text-alabaster/95 select-none">
            MAISON VANCE
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-alabaster/50">
          <div>© 2026 Maison Vance Atelier. All Rights Reserved.</div>
          <div className="flex items-center gap-8">
            <a
              href="#selected-works"
              className="hover:text-alabaster transition-colors"
            >
              Index
            </a>
            <a
              href="#philosophy"
              className="hover:text-alabaster transition-colors"
            >
              Ethos
            </a>
            <a
              href="#atelier-estimator"
              className="hover:text-alabaster transition-colors"
            >
              Scope
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-bronzeLight hover:text-alabaster transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
