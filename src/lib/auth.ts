/**
 * Shared auth helpers for ExamGlow.
 * Single source of truth for "is the user logged in?" logic.
 */

/** Returns true if user has an active session (not explicitly logged out). */
export function isLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  try {
    // If user deliberately logged out, never auto-login
    if (localStorage.getItem("examglow.logged_out") === "true") return false;

    const authMethod = localStorage.getItem("examglow.auth_method");
    if (!authMethod) return false;

    if (authMethod === "google") {
      // Google users need a picture URL stored
      return !!localStorage.getItem("examglow.google_picture");
    }

    if (authMethod === "email") {
      // Email users need a profile with an email
      const raw = localStorage.getItem("examglow.profile");
      if (!raw) return false;
      const profile = JSON.parse(raw) as { email?: string };
      return !!profile.email;
    }

    return false;
  } catch {
    return false;
  }
}

/** Call after every successful login or sign-up. */
export function markLoggedIn(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem("examglow.logged_out");
  } catch { /* storage unavailable */ }
}

/** Call on every explicit sign-out. Clears session and sets the logged-out flag. */
export function markLoggedOut(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("examglow.logged_out", "true");
    localStorage.removeItem("examglow.auth_method");
    localStorage.removeItem("examglow.google_picture");
    localStorage.removeItem("examglow.google_sub");
    localStorage.removeItem("examglow.profile");
  } catch { /* storage unavailable */ }
}
