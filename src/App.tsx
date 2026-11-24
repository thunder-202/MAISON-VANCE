import { useEffect, useState } from 'react';
import { AtelierEstimatorSection } from './components/AtelierEstimatorSection';
import { BookingDrawer } from './components/BookingDrawer';
import { CaseStudyDrawer } from './components/CaseStudyDrawer';
import { FooterSection } from './components/FooterSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PhilosophySection } from './components/PhilosophySection';
import { SelectedWorksSection } from './components/SelectedWorksSection';
import { type CaseStudyId } from './data/atelierData';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyId | null>(
    null
  );
  const [bookingOpen, setBookingOpen] = useState(false);
  const [prefilledNotes, setPrefilledNotes] = useState('');

  // Body scroll lock when either drawer is open
  useEffect(() => {
    if (activeCaseStudy || bookingOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCaseStudy, bookingOpen]);

  // Escape key closes drawers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCaseStudy(null);
        setBookingOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Intersection Observer for Subtle Editorial Scroll Reveals
  useEffect(() => {
    const revealAllFallback = () => {
      document.querySelectorAll('.reveal-up').forEach((el) => {
        el.classList.add('is-visible');
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      revealAllFallback();
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeAll = () => {
      document.querySelectorAll('.reveal-up:not(.is-visible)').forEach((el) => {
        revealObserver.observe(el);
      });
    };

    observeAll();

    let mutationObserver: MutationObserver | null = null;
    if (typeof MutationObserver !== 'undefined') {
      mutationObserver = new MutationObserver(() => {
        observeAll();
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      revealObserver.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  const handleReserveScope = (notesText: string) => {
    setPrefilledNotes(notesText);
    setBookingOpen(true);
  };

  return (
    <>
      {/* Subtle Archival Paper Grain */}
      <div className="paper-grain" aria-hidden="true" />

      {/* 1. Minimalist Floating Navigation */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main>
        {/* 2. Editorial Hero Section */}
        <HeroSection onOpenCaseStudy={(id) => setActiveCaseStudy(id)} />

        {/* 3. Selected Works (Interactive Filterable Case Study Showcase) */}
        <SelectedWorksSection
          onOpenCaseStudy={(id) => setActiveCaseStudy(id)}
        />

        {/* 4. Studio Philosophy & Craftsmanship */}
        <PhilosophySection />

        {/* 5. Interactive Atelier Experience / Scope & Investment Configurator */}
        <AtelierEstimatorSection onReserveScope={handleReserveScope} />

        {/* 6. Editorial Footer & Global Studio Clocks */}
        <FooterSection onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* Slide-Over Case Study Drawer */}
      <CaseStudyDrawer
        studyId={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onInquire={() => setBookingOpen(true)}
      />

      {/* Private Consultation & Scheduler Drawer */}
      <BookingDrawer
        isOpen={bookingOpen}
        initialNotes={prefilledNotes}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}
