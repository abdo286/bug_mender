import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASEURL,
//   import.meta.env.VITE_SUPABASEANONKEY
// );

const supabase = createClient(
  "https://gffeowlkccsjegwpcvlb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZmVvd2xrY2NzamVnd3BjdmxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5OTEzNTcsImV4cCI6MjAwOTU2NzM1N30.dpMYZ6w3KtDmTxw4T1OJeZnnoXs9qzs__QKzIjRVFwI"
);

export { supabase };
