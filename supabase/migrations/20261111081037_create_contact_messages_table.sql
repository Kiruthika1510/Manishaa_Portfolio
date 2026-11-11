/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, required, 2-100 chars)
  - `email` (text, required, basic email shape, max 254 chars)
  - `subject` (text, required, 3-150 chars)
  - `message` (text, required, 10-2000 chars)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row Level Security is enabled on `contact_messages`.
- Visitors (anon) and signed-in users may only INSERT new messages.
- No SELECT, UPDATE or DELETE access is granted, so submitted messages are private and only readable from the database dashboard.
- CHECK constraints reject malformed or oversized input even if the browser check is bypassed.

3. Notes
- Messages are stored in plain text; the owner reads them in the database dashboard.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(btrim(name)) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) <= 254 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  subject text NOT NULL CHECK (char_length(btrim(subject)) BETWEEN 3 AND 150),
  message text NOT NULL CHECK (char_length(btrim(message)) BETWEEN 10 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
