import { useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { CheckCircle2, CircleAlert, Loader2, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { validateContact } from '@/lib/contactValidation';
import type { ContactErrors, ContactValues } from '@/lib/contactValidation';

const MIN_FILL_MS = 2500;
const EMPTY: ContactValues = { name: '', email: '', subject: '', message: '' };

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [banner, setBanner] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const openedAt = useRef(Date.now());

  const update = (field: keyof ContactValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const fail = (message: string) => {
    setStatus('error');
    setBanner(message);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;

    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      fail('Please correct the highlighted fields and try again.');
      return;
    }

    if (honeypot || Date.now() - openedAt.current < MIN_FILL_MS) {
      fail('We could not send your message. Please wait a moment and try again.');
      return;
    }

    if (!supabase) {
      fail('The contact form is not connected right now. Please email me directly instead.');
      return;
    }

    setStatus('submitting');
    setBanner('');
    const { error } = await supabase.from('contact_messages').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    });

    if (error) {
      fail('Something went wrong and your message was not sent. Please try again in a moment.');
      return;
    }

    setValues(EMPTY);
    setErrors({});
    setStatus('success');
    setBanner('Thank you. Your message has been sent and will be read soon.');
  };

  const invalid = (field: keyof ContactValues) => (errors[field] ? true : undefined);
  const describedBy = (field: keyof ContactValues) => (errors[field] ? `${field}-error` : undefined);
  const fieldError = (field: keyof ContactValues) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-2 text-xs font-medium text-brand-600">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-6 p-7 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-ink">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            aria-invalid={invalid('name')}
            aria-describedby={describedBy('name')}
            className="field"
            placeholder="Your full name"
          />
          {fieldError('name')}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-ink">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            aria-invalid={invalid('email')}
            aria-describedby={describedBy('email')}
            className="field"
            placeholder="you@example.com"
          />
          {fieldError('email')}
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-ink">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          value={values.subject}
          onChange={update('subject')}
          aria-invalid={invalid('subject')}
          aria-describedby={describedBy('subject')}
          className="field"
          placeholder="How can we work together?"
        />
        {fieldError('subject')}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={update('message')}
          aria-invalid={invalid('message')}
          aria-describedby={describedBy('message')}
          className="field resize-y"
          placeholder="Tell me a little about your idea or opportunity."
        />
        <div className="mt-2 flex items-start justify-between gap-4">
          {fieldError('message') ?? <span />}
          <span className="shrink-0 text-xs text-ink-soft">{values.message.length}/2000</span>
        </div>
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === 'submitting'} data-magnetic className="btn-primary disabled:cursor-not-allowed disabled:opacity-70">
          {status === 'submitting' ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>

        <div role="status" aria-live="polite" className="min-h-6 text-sm">
          {status === 'success' && (
            <p className="flex items-center gap-2 font-medium text-ink">
              <CheckCircle2 className="h-5 w-5 text-brand-600" aria-hidden="true" />
              {banner}
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center gap-2 font-medium text-brand-700">
              <CircleAlert className="h-5 w-5" aria-hidden="true" />
              {banner}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
