import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { contactIntro, profile, socialLinks } from '@/data/profile';
import ContactForm from '@/components/contact/ContactForm';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Contact() {
  const activeSocials = socialLinks.filter((link) => link.url);

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading eyebrow="Contact" title={contactIntro.heading} description={contactIntro.text} />

          <ul className="mt-12 space-y-5">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-mist p-5 transition duration-300 hover:border-brand-600 hover:shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Email</span>
                  <span className="font-semibold text-ink">{profile.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone}`}
                className="group flex items-center gap-4 rounded-2xl border border-mist p-5 transition duration-300 hover:border-brand-600 hover:shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Phone</span>
                  <span className="font-semibold text-ink">{profile.phone}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-mist p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Location</span>
                <span className="font-semibold text-ink">Tamil Nadu, India</span>
              </span>
            </li>
          </ul>

          {activeSocials.length > 0 && (
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Social</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {activeSocials.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-magnetic
                      className="btn-outline !px-5 !py-2.5"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
