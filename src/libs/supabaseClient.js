import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gffeowlkccsjegwpcvlb.supabase.co";

// const supabaseAnonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZmVvd2xrY2NzamVnd3BjdmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzk5MTM1NywiZXhwIjoyMDA5NTY3MzU3fQ.rM-ICzpe9JcNhlp_h3ndQrbHtFdiciiSABQkS-k2Xik";

// use only during the development and then remove
const supabaseRoleKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZmVvd2xrY2NzamVnd3BjdmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzk5MTM1NywiZXhwIjoyMDA5NTY3MzU3fQ.rM-ICzpe9JcNhlp_h3ndQrbHtFdiciiSABQkS-k2Xik";

export const supabase = createClient(supabaseUrl, supabaseRoleKey);
