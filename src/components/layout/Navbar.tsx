import { useEffect, useState } from 'react';
import { Menu, Plane, X } from 'lucide-react';
import { navigation, profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';

const sectionIds = navigation.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'bg-white/95 shadow-card backdrop-blur-md' : 'bg-white/0'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Manishaa B, back to top">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white transition duration-500 group-hover:rotate-12">
            <Plane className="h-5 w-5 -rotate-45" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-semibold tracking-wide text-ink">{profile.nameUpper}</span>
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group relative py-2 text-sm font-medium transition-colors duration-300 hover:text-brand-600 ${
                      isActive ? 'text-brand-600' : 'text-ink'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-600 transition-transform duration-500 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          data-magnetic
          className="flex h-11 w-11 items-center justify-center rounded-full border border-mist text-ink transition duration-300 hover:border-brand-600 hover:text-brand-600 xl:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-mist bg-white transition-[max-height,opacity] duration-500 xl:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navigation.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition duration-300 hover:bg-brand-50 hover:text-brand-600 ${
                      isActive ? 'bg-brand-50 text-brand-600' : 'text-ink'
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-brand-600' : 'bg-mist'}`} aria-hidden="true" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
