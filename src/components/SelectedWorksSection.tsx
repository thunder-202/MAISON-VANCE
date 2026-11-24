import { useState } from 'react';
import {
  projectItems,
  type CaseStudyId,
  type ProjectCategory,
} from '../data/atelierData';

type FilterType = 'all' | ProjectCategory;

interface SelectedWorksSectionProps {
  onOpenCaseStudy: (id: CaseStudyId) => void;
}

const filterOptions: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All Commissions (04)' },
  { key: 'hospitality', label: 'Hospitality' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'private-brands', label: 'Private Brands' },
];

export function SelectedWorksSection({
  onOpenCaseStudy,
}: SelectedWorksSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [fadingOut, setFadingOut] = useState(false);

  const handleFilterClick = (filter: FilterType) => {
    if (filter === activeFilter) return;
    setFadingOut(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setFadingOut(false);
    }, 220);
  };

  const visibleProjects =
    activeFilter === 'all'
      ? projectItems
      : projectItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="selected-works"
      className="py-24 md:py-36 px-6 md:px-12 border-t border-stoneBorder max-w-[1440px] mx-auto"
    >
      {/* Section Header & Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20 reveal-up">
        <div>
          <span className="block text-[11px] uppercase tracking-[0.22em] text-bronze font-medium mb-4">
            Curated Monograph
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-[-0.015em] text-charcoal">
            Selected Commissions
          </h2>
        </div>

        {/* Interactive Filter Pills */}
        <div
          id="filterContainer"
          className="flex flex-wrap items-center gap-2.5"
          role="tablist"
          aria-label="Filter commissions"
        >
          {filterOptions.map((opt) => {
            const isActive = activeFilter === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleFilterClick(opt.key)}
                className={`filter-btn px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'active bg-charcoal text-alabaster border border-charcoal'
                    : 'bg-transparent text-charcoalMuted border border-stoneBorder hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Asymmetric Editorial Project Grid */}
      <div
        id="projectsGrid"
        className={`grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-10 md:gap-y-24 transition-all duration-300 ${
          fadingOut ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
        }`}
      >
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            data-category={project.category}
            onClick={() => onOpenCaseStudy(project.id)}
            className={`project-card ${project.colSpanClass} group cursor-pointer reveal-up`}
          >
            <div
              className={`editorial-img-wrap rounded-2xl border border-stoneBorder bg-alabasterDark ${project.aspectClass} mb-6`}
            >
              <img
                src={project.imageUrl}
                onError={(e) => {
                  e.currentTarget.src = project.fallbackUrl;
                }}
                alt={project.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-alabaster/90 backdrop-blur-md border border-stoneBorder text-[10px] uppercase tracking-[0.18em] text-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                View Case Study
              </div>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-stoneBorder pb-5">
              <div>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bronze mb-2">
                  <span>{project.number}</span>
                  <span>/</span>
                  <span>{project.categoryLabel}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-charcoal group-hover:text-bronze transition-colors">
                  {project.title}
                </h3>
              </div>
              <span className="text-xs uppercase tracking-[0.15em] text-charcoalMuted pt-2">
                {project.year}
              </span>
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-charcoalMuted">
              <span>{project.services}</span>
              <span className="font-medium text-charcoal">
                {project.outcome}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
