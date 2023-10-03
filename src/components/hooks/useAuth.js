import { useState, useEffect } from "react";
import { supabase } from "../../libs/supabaseClient";

const getSession = () => {
  const session = JSON.parse(localStorage.getItem("session"));
  return session || null;
};
export default function useAuth() {
  const [session, setSession] = useState(getSession());
  
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      localStorage.setItem("session", JSON.stringify(session));
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      localStorage.setItem("session", JSON.stringify(session));
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { session, setSession };
}
