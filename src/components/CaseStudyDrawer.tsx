import { useEffect, useState } from 'react';
import { caseStudies, type CaseStudyId } from '../data/atelierData';

interface CaseStudyDrawerProps {
  studyId: CaseStudyId | null;
  onClose: () => void;
  onInquire: () => void;
}

export function CaseStudyDrawer({
  studyId,
  onClose,
  onInquire,
}: CaseStudyDrawerProps) {
  const [isRendered, setIsRendered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [displayedStudyId, setDisplayedStudyId] =
    useState<CaseStudyId>('villa-solis');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageFading, setIsImageFading] = useState(false);

  useEffect(() => {
    if (studyId) {
      setDisplayedStudyId(studyId);
      setActiveImageIndex(0);
      setIsImageFading(false);
      setIsRendered(true);
      const timer = setTimeout(() => setIsOpen(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
      const timer = setTimeout(() => setIsRendered(false), 500);
      return () => clearTimeout(timer);
    }
  }, [studyId]);

  const data = caseStudies[displayedStudyId];
  const currentGalleryItem = data.gallery[activeImageIndex] ?? data.gallery[0];

  const handleSwitchImage = (index: number) => {
    if (index === activeImageIndex) return;
    setIsImageFading(true);
    setTimeout(() => {
      setActiveImageIndex(index);
      setIsImageFading(false);
    }, 200);
  };

  return (
    <>
      <div
        id="caseStudyBackdrop"
        onClick={onClose}
        className={`fixed inset-0 bg-espresso/60 backdrop-blur-sm z-50 transition-opacity duration-500 ${
          isRendered ? '' : 'hidden'
        } ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        id="caseStudyDrawer"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 bottom-0 w-full max-w-3xl bg-alabaster text-charcoal z-50 transform transition-transform duration-700 ease-editorial overflow-y-auto border-l border-stoneBorder shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sticky Drawer Header */}
        <div className="sticky top-0 z-20 bg-alabaster/95 backdrop-blur-md border-b border-stoneBorder px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-bronze" />
            <span
              id="drawerCategory"
              className="text-[11px] uppercase tracking-[0.2em] text-charcoalMuted"
            >
              {data.category}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-stoneBorder hover:border-charcoal text-xs uppercase tracking-[0.16em] text-charcoal transition-colors cursor-pointer"
          >
            Close ✕
          </button>
        </div>

        {/* Drawer Content Body */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Title & Subtitle */}
          <div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-bronze mb-3">
              <span id="drawerLocation">{data.location}</span>
              <span id="drawerYear">{data.year}</span>
            </div>
            <h2
              id="drawerTitle"
              className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4"
            >
              {data.title}
            </h2>
            <p
              id="drawerSummary"
              className="text-sm md:text-base text-charcoalMuted font-light leading-relaxed"
            >
              {data.summary}
            </p>
          </div>

          {/* Interactive Gallery Switcher */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-stoneBorder bg-alabasterDark aspect-[16/10]">
              <img
                id="drawerMainImage"
                src={currentGalleryItem.url}
                alt="Case Study Visual"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  isImageFading ? 'opacity-35' : 'opacity-100'
                }`}
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <span
                id="drawerImageCaption"
                className="text-xs italic font-serif text-charcoalMuted"
              >
                {currentGalleryItem.caption}
              </span>
              <div
                id="drawerGalleryThumbs"
                className="flex items-center gap-2"
              >
                {data.gallery.map((_, idx) => {
                  const isThumbActive = idx === activeImageIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSwitchImage(idx)}
                      className={`gallery-thumb-btn px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.15em] border transition-colors cursor-pointer ${
                        isThumbActive
                          ? 'bg-charcoal text-alabaster border-charcoal'
                          : 'border-stoneBorder text-charcoalMuted hover:border-charcoal'
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Key Performance Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y border-stoneBorder">
            <div>
              <span
                id="drawerMetric1Val"
                className="font-serif text-3xl md:text-4xl text-charcoal block"
              >
                {data.metrics[0].val}
              </span>
              <span
                id="drawerMetric1Lbl"
                className="text-[10px] uppercase tracking-[0.16em] text-charcoalMuted"
              >
                {data.metrics[0].lbl}
              </span>
            </div>
            <div>
              <span
                id="drawerMetric2Val"
                className="font-serif text-3xl md:text-4xl text-charcoal block"
              >
                {data.metrics[1].val}
              </span>
              <span
                id="drawerMetric2Lbl"
                className="text-[10px] uppercase tracking-[0.16em] text-charcoalMuted"
              >
                {data.metrics[1].lbl}
              </span>
            </div>
            <div>
              <span
                id="drawerMetric3Val"
                className="font-serif text-3xl md:text-4xl text-charcoal block"
              >
                {data.metrics[2].val}
              </span>
              <span
                id="drawerMetric3Lbl"
                className="text-[10px] uppercase tracking-[0.16em] text-charcoalMuted"
              >
                {data.metrics[2].lbl}
              </span>
            </div>
          </div>

          {/* Design Philosophy & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.18em] font-medium text-charcoal">
                Architectural Approach
              </h4>
              <p
                id="drawerPhilosophy"
                className="text-sm text-charcoalMuted font-light leading-relaxed"
              >
                {data.philosophy}
              </p>
            </div>
            <div className="md:col-span-5 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.18em] font-medium text-charcoal">
                Deliverables
              </h4>
              <ul
                id="drawerDeliverables"
                className="space-y-2 text-xs text-charcoalMuted border-l border-bronze pl-4"
              >
                {data.deliverables.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Drawer Action */}
          <div className="pt-6 border-t border-stoneBorder flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-charcoalMuted">
              Commission a similar flagship for your practice
            </span>
            <button
              type="button"
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-charcoal text-alabaster hover:bg-bronze transition-colors text-xs uppercase tracking-[0.18em] font-medium cursor-pointer"
            >
              Inquire About Availability
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
