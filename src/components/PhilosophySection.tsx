export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="bg-espresso text-alabaster py-28 md:py-40 px-6 md:px-12 border-y border-espressoBorder"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section Label */}
        <div className="flex items-center justify-between pb-8 mb-16 border-b border-espressoBorder text-[11px] uppercase tracking-[0.22em] text-bronzeLight">
          <span>Atelier Ethos &amp; Discipline</span>
          <span>Principles of Quiet Luxury</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* Left Column: Editorial Pull Quote */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 reveal-up">
            <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] text-alabaster">
              “True luxury never raises its voice. It is felt in the{' '}
              <span className="italic text-bronzeLight">weight of silence</span>
              , the precision of proportion, and the effortless grace of every
              interaction.”
            </blockquote>
            <div className="pt-4 flex items-center gap-4">
              <div className="w-10 h-[1px] bg-bronzeLight" />
              <span className="text-xs uppercase tracking-[0.18em] text-alabaster/70">
                Henri Vance, Founding Creative Director
              </span>
            </div>
          </div>

          {/* Right Column: Three Numbered Principles */}
          <div className="lg:col-span-7 space-y-10">
            {/* Principle 01 */}
            <div className="group p-8 md:p-10 rounded-2xl bg-espressoElevated/70 border border-espressoBorder hover:border-bronze/50 transition-all duration-500 reveal-up">
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif italic text-2xl text-bronzeLight">
                  01.
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-alabaster/50">
                  Visual Restraint
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-alabaster mb-4 group-hover:text-bronzeLight transition-colors">
                Restraint Over Noise
              </h3>
              <p className="text-sm md:text-base text-alabaster/70 font-light leading-relaxed">
                We reject fleeting digital gimmicks and templated clutter. Every
                grid proportion, typographic hierarchy, and negative space is
                calibrated with architectural rigor—allowing your work and
                heritage to command undivided reverence.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="group p-8 md:p-10 rounded-2xl bg-espressoElevated/70 border border-espressoBorder hover:border-bronze/50 transition-all duration-500 reveal-up">
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif italic text-2xl text-bronzeLight">
                  02.
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-alabaster/50">
                  Bespoke Engineering
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-alabaster mb-4 group-hover:text-bronzeLight transition-colors">
                Sub-Second Performance
              </h3>
              <p className="text-sm md:text-base text-alabaster/70 font-light leading-relaxed">
                Aesthetic beauty collapses if hindered by latency. Our digital
                flagships are hand-engineered from the ground up with fluid
                60fps motion, zero bloat, and near-instantaneous global delivery
                across every device.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="group p-8 md:p-10 rounded-2xl bg-espressoElevated/70 border border-espressoBorder hover:border-bronze/50 transition-all duration-500 reveal-up">
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif italic text-2xl text-bronzeLight">
                  03.
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-alabaster/50">
                  Commercial Poise
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-alabaster mb-4 group-hover:text-bronzeLight transition-colors">
                Conversion Through Desire
              </h3>
              <p className="text-sm md:text-base text-alabaster/70 font-light leading-relaxed">
                High-net-worth clientele do not respond to aggressive sales
                funnels. We choreograph intuitive, editorial pathways that
                cultivate deep trust and convert passive admiration into private
                inquiries and direct bookings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
