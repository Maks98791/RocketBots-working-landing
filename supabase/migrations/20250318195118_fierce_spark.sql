/*
  # Create consultations table

  1. New Tables
    - `consultations`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text)
      - `message` (text)
      - `created_at` (timestamp with timezone)
      - `status` (text, default: 'new')

  2. Security
    - Enable RLS on `consultations` table
    - Add policy for inserting new consultations
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new consultations
CREATE POLICY "Allow public to insert consultations"
  ON consultations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only allow authenticated users to view consultations
CREATE POLICY "Allow authenticated users to view consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);