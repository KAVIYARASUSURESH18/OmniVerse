import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (!supabase) {
      setAuthError("Supabase is not configured. Add the project URL and publishable key.");
      setLoading(false);
      return;
    }
    let active = true;
    const loadProfile = async (currentUser) => {
      if (!currentUser) { if (active) setProfile(null); return; }
      const { data, error } = await supabase
        .from("profiles").select("id,email,display_name,role")
        .eq("id", currentUser.id).maybeSingle();
      if (!active) return;
      if (error) setAuthError(error.message);
      setProfile(data || null);
    };
    supabase.auth.getSession().then(async ({ data, error }) => {
      if (!active) return;
      if (error) setAuthError(error.message);
      setSession(data.session);
      setUser(data.session?.user || null);
      await loadProfile(data.session?.user || null);
      if (active) setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user || null);
      if (!nextSession) setProfile(null);
      else setTimeout(() => loadProfile(nextSession.user), 0);
    });
    return () => { active = false; listener.subscription.unsubscribe(); };
  }, []);

  const signIn = async (email, password) => {
    if (!supabase) throw new Error("Supabase is not configured.");
    const result = await supabase.auth.signInWithPassword({ email, password });
    if (result.error) throw result.error;
    return result.data;
  };
  const signUp = async (email, password, displayName) => {
    if (!supabase) throw new Error("Supabase is not configured.");
    const result = await supabase.auth.signUp({
      email, password, options: { data: { display_name: displayName } }
    });
    if (result.error) throw result.error;
    return result.data;
  };
  const signOut = async () => {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return <AuthContext.Provider value={{ session, user, profile, loading, authError, signIn, signUp, signOut }}>
    {children}
  </AuthContext.Provider>;
}
