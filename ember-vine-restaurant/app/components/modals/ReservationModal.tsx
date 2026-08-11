"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { useReservationModal } from "@/app/context/ReservationModalContext";

type Step = "form" | "loading" | "success";

export default function ReservationModal() {
  const { isOpen, closeModal } = useReservationModal();
  const [step, setStep] = useState<Step>("form");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [requests, setRequests] = useState("");

  useEffect(() => {
    if (isOpen) setStep("form");
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");

    // NOTE: reservation data is currently only held in local state and
    // discarded once the modal closes. Wire this up to an email service,
    // backend API route, or reservation system when ready.

    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-obsidian/70 backdrop-blur-sm px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget && step !== "loading") closeModal();
      }}
    >
      <div className="relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-charcoal border border-border rounded-lg p-8 md:p-10">
        {step !== "loading" && (
          <button
            onClick={closeModal}
            aria-label="Close"
            className="absolute top-5 right-5 text-stone hover:text-gold transition-colors"
          >
            <X size={22} />
          </button>
        )}

        {step === "form" && (
          <>
            <div className="text-center mb-8">
              <h2 className="font-serif text-ivory text-2xl md:text-3xl mb-3">
                Reserve Your Table
              </h2>
              <p className="font-sans text-stone text-sm max-w-sm mx-auto">
                Tell us a little about your visit and we&apos;ll have your
                table ready.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
              <div>
                <label className="font-sans text-xs uppercase tracking-wide text-gold mb-1.5 block">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-transparent border-b border-ivory/20 text-ivory text-sm py-2 outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-xs uppercase tracking-wide text-gold mb-1.5 block">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory text-sm py-2 outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="font-sans text-xs uppercase tracking-wide text-gold mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory text-sm py-2 outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="font-sans text-xs uppercase tracking-wide text-gold mb-1.5 block">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent border-b border-ivory/20 text-stone text-sm py-2 outline-none focus:border-gold transition-colors [color-scheme:dark]"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-sans text-xs uppercase tracking-wide text-gold mb-1.5 block">
                    Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory text-sm py-2 outline-none focus:border-gold transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="font-sans text-xs uppercase tracking-wide text-gold mb-1.5 block">
                    Preferred Time
                  </label>
                  <input
                    required
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory text-sm py-2 outline-none focus:border-gold transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="font-sans text-xs uppercase tracking-wide text-gold mb-1.5 block">
                  Special Requests (optional)
                </label>
                <textarea
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  rows={2}
                  className="w-full bg-transparent border-b border-ivory/20 text-ivory text-sm py-2 outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-gold hover:bg-gold-hover text-obsidian font-sans font-semibold text-sm uppercase tracking-[0.15em] py-3.5 rounded-md transition-colors"
              >
                Confirm Reservation
              </button>
            </form>
          </>
        )}

        {step === "loading" && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Loader2 size={40} className="text-gold animate-spin mb-6" />
            <p className="font-sans text-ivory text-sm">
              Sending your reservation&hellip;
            </p>
          </div>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle2 size={48} className="text-gold mb-6" />

            <h2 className="font-serif text-ivory text-2xl md:text-3xl mb-4">
              Reservation Received
            </h2>

            <p className="font-sans text-stone text-sm max-w-sm mb-8">
              Thank you for choosing Ember &amp; Vine. We&apos;ll confirm your
              table shortly by phone or email. We look forward to hosting you.
            </p>

            <button
              onClick={closeModal}
              className="bg-gold hover:bg-gold-hover text-obsidian font-sans font-semibold text-sm uppercase tracking-[0.15em] py-3 px-8 rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}