import { type FormEvent, useEffect, useState } from 'react';
import { slotDates, slotTimes } from '../data/atelierData';

interface BookingDrawerProps {
  isOpen: boolean;
  initialNotes?: string;
  onClose: () => void;
}

export function BookingDrawer({
  isOpen,
  initialNotes = '',
  onClose,
}: BookingDrawerProps) {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedDate, setSelectedDate] = useState(slotDates[0]);
  const [selectedTime, setSelectedTime] = useState(slotTimes[0].value);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientBrand, setClientBrand] = useState('');
  const [clientNotes, setClientNotes] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [receiptRef, setReceiptRef] = useState('#MV-8492');
  const [submittedName, setSubmittedName] = useState('Guest');
  const [submittedEmail, setSubmittedEmail] = useState('');

  useEffect(() => {
    if (initialNotes) {
      setClientNotes(initialNotes);
    }
  }, [initialNotes]);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsRendered(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = clientName.trim();
    const trimmedEmail = clientEmail.trim();
    const firstName = trimmedName.split(' ')[0] || 'Guest';

    setSubmittedName(firstName);
    setSubmittedEmail(trimmedEmail);
    setReceiptRef('#MV-' + Math.floor(1000 + Math.random() * 9000));
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setClientName('');
    setClientEmail('');
    setClientBrand('');
    setClientNotes('');
    setSelectedDate(slotDates[0]);
    setSelectedTime(slotTimes[0].value);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <>
      <div
        id="bookingBackdrop"
        onClick={onClose}
        className={`fixed inset-0 bg-espresso/60 backdrop-blur-sm z-50 transition-opacity duration-500 ${
          isRendered ? '' : 'hidden'
        } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        id="bookingDrawer"
        aria-hidden={!isVisible}
        className={`fixed top-0 right-0 bottom-0 w-full max-w-xl bg-alabaster text-charcoal z-50 transform transition-transform duration-700 ease-editorial overflow-y-auto border-l border-stoneBorder shadow-2xl ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="sticky top-0 z-20 bg-alabaster/95 backdrop-blur-md border-b border-stoneBorder px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-bronze" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal font-medium">
              Private Atelier Briefing
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

        <div className="p-6 md:p-10">
          {/* Form State */}
          {!isSubmitted ? (
            <div id="bookingFormContainer" className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-2">
                  Request a Private Consultation
                </h2>
                <p className="text-xs md:text-sm text-charcoalMuted font-light leading-relaxed">
                  Meet directly with our Founding Creative Director for a
                  30-minute architectural review of your digital flagship goals.
                </p>
              </div>

              <form
                id="consultationForm"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Step 1: Select Date & Time Slot */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-charcoal font-medium mb-3">
                    01. Preferred Briefing Window
                  </label>
                  <div className="grid grid-cols-3 gap-2.5 mb-3">
                    {slotDates.map((dateStr) => {
                      const active = selectedDate === dateStr;
                      return (
                        <button
                          key={dateStr}
                          type="button"
                          onClick={() => setSelectedDate(dateStr)}
                          className={`slot-date-btn py-2.5 px-3 rounded-xl border text-xs transition-all cursor-pointer ${
                            active
                              ? 'active border-charcoal bg-charcoal text-alabaster'
                              : 'border-stoneBorder bg-alabaster text-charcoal hover:border-charcoal'
                          }`}
                        >
                          {dateStr}
                        </button>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {slotTimes.map((slot) => {
                      const active = selectedTime === slot.value;
                      return (
                        <button
                          key={slot.value}
                          type="button"
                          onClick={() => setSelectedTime(slot.value)}
                          className={`slot-time-btn py-2.5 px-3 rounded-xl border text-xs transition-all cursor-pointer ${
                            active
                              ? 'active border-charcoal bg-alabasterDark text-charcoal font-medium'
                              : 'border-stoneBorder bg-alabaster text-charcoalMuted hover:border-charcoal'
                          }`}
                        >
                          {slot.display}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Client Details */}
                <div className="space-y-4 pt-2">
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-charcoal font-medium">
                    02. Principal &amp; Organization
                  </label>

                  <div>
                    <input
                      type="text"
                      id="clientName"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full px-4 py-3.5 rounded-xl bg-alabaster border border-stoneBorder focus:border-charcoal focus:outline-none text-sm text-charcoal placeholder:text-charcoalMuted/60 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      id="clientEmail"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="Private Email Address *"
                      className="w-full px-4 py-3.5 rounded-xl bg-alabaster border border-stoneBorder focus:border-charcoal focus:outline-none text-sm text-charcoal placeholder:text-charcoalMuted/60 transition-colors"
                    />
                    <input
                      type="text"
                      id="clientBrand"
                      value={clientBrand}
                      onChange={(e) => setClientBrand(e.target.value)}
                      placeholder="Studio / Maison Name"
                      className="w-full px-4 py-3.5 rounded-xl bg-alabaster border border-stoneBorder focus:border-charcoal focus:outline-none text-sm text-charcoal placeholder:text-charcoalMuted/60 transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      id="clientNotes"
                      rows={3}
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      placeholder="Brief overview of your architectural or digital flagship vision..."
                      className="w-full px-4 py-3.5 rounded-xl bg-alabaster border border-stoneBorder focus:border-charcoal focus:outline-none text-sm text-charcoal placeholder:text-charcoalMuted/60 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-charcoal text-alabaster hover:bg-bronze transition-colors duration-500 text-xs uppercase tracking-[0.18em] font-medium shadow-sm cursor-pointer"
                >
                  Confirm Private Briefing
                </button>
              </form>
            </div>
          ) : (
            /* Confirmation Receipt State */
            <div id="bookingConfirmation" className="space-y-8 py-6">
              <div className="p-8 rounded-2xl border border-stoneBorder bg-alabasterDark/70 space-y-6">
                <div className="flex items-center justify-between border-b border-stoneBorder pb-4">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-bronze font-semibold">
                    Dossier Confirmed
                  </span>
                  <span
                    id="receiptRef"
                    className="text-xs font-mono text-charcoalMuted"
                  >
                    {receiptRef}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl text-charcoal mb-2">
                    We look forward to speaking,{' '}
                    <span id="receiptName" className="italic">
                      {submittedName}
                    </span>
                    .
                  </h3>
                  <p className="text-xs text-charcoalMuted font-light leading-relaxed">
                    A calendar invitation with private video salon credentials
                    has been dispatched to{' '}
                    <span
                      id="receiptEmail"
                      className="text-charcoal font-medium"
                    >
                      {submittedEmail}
                    </span>
                    .
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-stoneBorder text-xs">
                  <div className="flex justify-between">
                    <span className="text-charcoalMuted">
                      Scheduled Window
                    </span>
                    <span
                      id="receiptDateTime"
                      className="font-medium text-charcoal"
                    >
                      {selectedDate} • {selectedTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoalMuted">
                      Hosting Director
                    </span>
                    <span className="font-medium text-charcoal">
                      Henri Vance (Zürich Atelier)
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-3.5 rounded-full border border-charcoal text-xs uppercase tracking-[0.18em] text-charcoal hover:bg-charcoal hover:text-alabaster transition-colors cursor-pointer"
              >
                Return to Atelier
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
