import { useState } from 'react';
import { cadenceOptions, pillarOptions } from '../data/atelierData';

interface AtelierEstimatorSectionProps {
  onReserveScope: (notesText: string) => void;
}

export function AtelierEstimatorSection({
  onReserveScope,
}: AtelierEstimatorSectionProps) {
  const [selectedPillarIds, setSelectedPillarIds] = useState<string[]>(() =>
    pillarOptions.filter((p) => p.defaultActive).map((p) => p.id)
  );
  const [selectedCadenceId, setSelectedCadenceId] =
    useState<string>('standard');

  const togglePillar = (id: string) => {
    setSelectedPillarIds((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev;
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const activePillars = pillarOptions.filter((p) =>
    selectedPillarIds.includes(p.id)
  );
  const currentCadence =
    cadenceOptions.find((c) => c.id === selectedCadenceId) ?? cadenceOptions[0];

  const baseTotal = activePillars.reduce((sum, p) => sum + p.price, 0);
  let totalWeeks = activePillars.reduce((sum, p) => sum + p.weeks, 0);

  if (currentCadence.multiplier > 1) {
    totalWeeks = Math.max(3, Math.ceil(totalWeeks * 0.75));
  }

  const finalEstimate =
    Math.round((baseTotal * currentCadence.multiplier) / 100) * 100;
  const formattedEstimate = '$' + finalEstimate.toLocaleString('en-US');
  const timelineText = `Estimated Delivery: ${totalWeeks} Weeks • ${currentCadence.label}`;

  const handleReserveClick = () => {
    const activeTitles = activePillars.map((p) => p.title).join(', ');
    onReserveScope(
      `Configured Scope: ${activeTitles}\nDossier Estimate: ${formattedEstimate} (${timelineText})`
    );
  };

  return (
    <section
      id="atelier-estimator"
      className="py-28 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto"
    >
      <div className="max-w-3xl mb-16 reveal-up">
        <span className="block text-[11px] uppercase tracking-[0.22em] text-bronze font-medium mb-4">
          Bespoke Commission Configurator
        </span>
        <h2 className="font-serif text-4xl md:text-6xl font-light tracking-[-0.015em] text-charcoal mb-6">
          Tailor Your Digital Flagship
        </h2>
        <p className="text-sm md:text-base text-charcoalMuted font-light leading-relaxed">
          Every engagement at Maison Vance is scoped individually. Select the
          architectural pillars and delivery cadence below to preview a
          tailored investment dossier and production roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left: Interactive Pillars & Cadence Selector (7 Cols) */}
        <div className="lg:col-span-7 space-y-10 reveal-up">
          {/* Step 1: Select Commission Pillars */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-[0.18em] font-medium text-charcoal">
                I. Architectural Pillars
              </span>
              <span className="text-xs text-charcoalMuted">
                Select one or more disciplines
              </span>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              id="pillarOptions"
            >
              {pillarOptions.map((pillar) => {
                const isActive = selectedPillarIds.includes(pillar.id);
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => togglePillar(pillar.id)}
                    className={`pillar-card text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer ${
                      isActive
                        ? 'active border-charcoal bg-alabasterDark/70'
                        : 'border-stoneBorder bg-alabaster hover:border-charcoal/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${
                            isActive ? 'text-bronze' : 'text-charcoalMuted'
                          }`}
                        >
                          {pillar.badge}
                        </span>
                        <span
                          className={`pillar-check w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                            isActive
                              ? 'bg-charcoal text-alabaster'
                              : 'border border-stoneBorder text-transparent'
                          }`}
                        >
                          ✓
                        </span>
                      </div>
                      <h4 className="font-serif text-2xl text-charcoal mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-charcoalMuted font-light leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-stoneBorder flex items-center justify-between text-xs">
                      <span className="text-charcoalMuted">
                        +{pillar.weeks} Weeks
                      </span>
                      <span className="font-medium text-charcoal">
                        ${pillar.price.toLocaleString('en-US')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Delivery Cadence */}
          <div className="pt-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-[0.18em] font-medium text-charcoal">
                II. Production Cadence
              </span>
              <span className="text-xs text-charcoalMuted">
                Select timeline preference
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {cadenceOptions.map((cadence) => {
                const isActive = selectedCadenceId === cadence.id;
                return (
                  <button
                    key={cadence.id}
                    type="button"
                    onClick={() => setSelectedCadenceId(cadence.id)}
                    className={`cadence-btn p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? 'active border-charcoal bg-charcoal text-alabaster'
                        : 'border-stoneBorder bg-alabaster text-charcoal hover:border-charcoal'
                    }`}
                  >
                    <div className="text-xs uppercase tracking-[0.15em] font-medium mb-1">
                      {cadence.title}
                    </div>
                    <div
                      className={`text-[11px] ${
                        isActive ? 'opacity-75' : 'text-charcoalMuted'
                      }`}
                    >
                      {cadence.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Live Investment Dossier Summary Card (5 Cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 reveal-up">
          <div className="rounded-2xl border border-stoneBorder bg-alabasterDark/60 p-8 md:p-10 shadow-sm">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-stoneBorder">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-bronze font-semibold block mb-1">
                  Commission Dossier
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal">
                  Estimated Investment
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full border border-stoneBorder bg-alabaster text-[10px] uppercase tracking-[0.16em] text-charcoalMuted">
                USD
              </span>
            </div>

            {/* Live Price & Timeline Display */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span
                  id="estimatedTotal"
                  className="font-serif text-5xl md:text-6xl font-light text-charcoal tracking-tight"
                >
                  {formattedEstimate}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-charcoalMuted">
                  Est. Total
                </span>
              </div>
              <p
                id="estimatedTimeline"
                className="text-xs text-bronze uppercase tracking-[0.16em] font-medium"
              >
                {timelineText}
              </p>
            </div>

            {/* Dynamic Deliverable Roadmap List */}
            <div className="space-y-3 mb-8">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-charcoalMuted">
                Included Deliverables
              </span>
              <ul
                id="selectedDeliverablesList"
                className="space-y-2.5 text-xs text-charcoal border-t border-stoneBorder pt-3"
              >
                {activePillars.map((pillar) => (
                  <li
                    key={pillar.id}
                    className="flex items-center justify-between"
                  >
                    <span>• {pillar.deliverableLabel}</span>
                    <span className="text-charcoalMuted">Included</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button transferring scope directly into the Private Consultation Drawer */}
            <button
              type="button"
              onClick={handleReserveClick}
              className="w-full py-4 px-6 rounded-full bg-charcoal text-alabaster hover:bg-bronze transition-colors duration-500 text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-3 shadow-sm cursor-pointer"
            >
              <span>Reserve Commission Window</span>
              <svg
                className="w-4 h-4"
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
            </button>
            <p className="text-[11px] text-charcoalMuted text-center mt-4 font-light">
              All engagements commence with a private architectural discovery
              briefing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
