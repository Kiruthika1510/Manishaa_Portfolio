import { Mail, Phone, Plane, ArrowUpRight } from 'lucide-react';
import { navigation, profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-600 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2" aria-hidden="true">
        <div className="absolute inset-x-0 h-px bg-white/25" />
        <div className="absolute -top-2.5 left-0 h-5 w-5" style={{ animation: 'fly-across 9s linear infinite' }}>
          <Plane className="h-5 w-5 -rotate-45 text-white" />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-10 pt-24 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-600">
              <Plane className="h-5 w-5 -rotate-45" aria-hidden="true" />
            </span>
            <span className="font-display text-2xl font-semibold tracking-wide">{profile.nameUpper}</span>
          </div>
          <p className="mt-6 font-display text-3xl font-medium italic">Business. Travel. Experiences.</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85">{profile.title}, Tamil Nadu, India.</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Explore</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-opacity duration-300 hover:opacity-70">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-5 md:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Get in touch</h3>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-sm transition-opacity duration-300 hover:opacity-70"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-3 text-sm transition-opacity duration-300 hover:opacity-70"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            {profile.phone}
          </a>
          <a
            href={profile.companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-medium transition duration-300 hover:bg-white hover:text-brand-600"
          >
            Air Saai Tours (company website)
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/20">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-white/80 sm:px-8">
          © {new Date().getFullYear()} {profile.name}. Personal portfolio, not the official Air Saai Tours website.
        </p>
      </div>
    </footer>
  );
}
