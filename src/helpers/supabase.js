import { createClient } from "@supabase/supabase-js";

export const TABLE_WORKOUTS = "workoutz";
export const TABLE_USERS = "users";
export const TABLE_DECISIONS = "decisions";

export const supabase = createClient(
  process.env.REACT_PUBLIC_SUPABASE_URL,
  process.env.REACT_PUBLIC_SUPABASE_KEY
);
