import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok, FaYelp } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Reservations", href: "/reserve" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
  { icon: FaYelp, href: "#", label: "Yelp" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-border px-6 md:px-16 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
        {/* Brand */}
        <div>
          <p
            className="text-gold text-3xl mb-3"
            style={{ fontFamily: "var(--font-logo)" }}
          >
            Ember &amp; Vine
          </p>

          <p className="font-sans text-stone text-sm mb-5 max-w-[220px]">
            A world of flavour, served with heart.
          </p>

          <div className="flex items-center gap-x-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                
                  <a key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-ivory/20 flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-sans font-semibold text-ivory text-xs uppercase tracking-[0.15em] mb-5">
            Quick Links
          </h3>

          <ul className="flex flex-col gap-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-stone text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-sans font-semibold text-ivory text-xs uppercase tracking-[0.15em] mb-5">
            Hours
          </h3>

          <div className="flex flex-col gap-y-3 font-sans text-stone text-sm">
            <div>
              <p className="text-ivory">Monday &ndash; Thursday</p>
              <p>11:00 AM &ndash; 10:00 PM</p>
            </div>
            <div>
              <p className="text-ivory">Friday &ndash; Saturday</p>
              <p>11:00 AM &ndash; 11:00 PM</p>
            </div>
            <div>
              <p className="text-ivory">Sunday</p>
              <p>11:00 AM &ndash; 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-sans font-semibold text-ivory text-xs uppercase tracking-[0.15em] mb-5">
            Contact
          </h3>

          <ul className="flex flex-col gap-y-2.5 font-sans text-stone text-sm">
            <li>123 Vine Street</li>
            <li>Lagos, Nigeria</li>
            <li>+234 801 234 5678</li>
            <li>hello@emberandvine.com</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-border pt-10 pb-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="font-sans font-semibold text-ivory text-xs uppercase tracking-[0.15em] mb-2">
            Newsletter
          </h3>
          <p className="font-sans text-stone text-sm">
            Stay updated on events, new dishes &amp; special offers.
          </p>
        </div>

        <form className="flex items-stretch max-w-md md:ml-auto w-full">
          <input
            type="email"
            placeholder="Your email address"
            required
            className="flex-1 bg-charcoal border border-border text-ivory text-sm px-4 py-3 outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="bg-gold hover:bg-gold-hover text-obsidian px-4 flex items-center justify-center transition-colors"
          >
            <ArrowRight size={18} />
          </button>
        </form>
      </div>

      <div className="border-t border-border pt-6 text-center">
        <p className="font-sans text-stone text-xs">
          &copy; {new Date().getFullYear()} Ember &amp; Vine. All rights reserved.
        </p>
      </div>
    </footer>
  );
}