export type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (name.length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  else if (name.length > 100) errors.name = 'Name must be 100 characters or fewer.';

  if (!email) errors.email = 'Please enter your email address.';
  else if (email.length > 254 || !EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.';

  if (subject.length < 3) errors.subject = 'Please add a subject (at least 3 characters).';
  else if (subject.length > 150) errors.subject = 'Subject must be 150 characters or fewer.';

  if (message.length < 10) errors.message = 'Your message should be at least 10 characters.';
  else if (message.length > 2000) errors.message = 'Message must be 2000 characters or fewer.';

  return errors;
}
