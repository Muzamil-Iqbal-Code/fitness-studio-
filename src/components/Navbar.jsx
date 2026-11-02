import { API_URL } from "../api";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const links = [
    ["About", "#about"],
    ["Programs", "#programs"],
    ["Trainers", "#trainers"],
    ["Membership", "#membership"],
  ];

  // Check whether the user already has a session
  useEffect(() => {
    async function checkSession() {
      try {
        const response = await fetch(`${API_URL}/api/auth/me`, {
          credentials: "include",
        });

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Session check failed:", error);
      }
    }

    checkSession();
  }, []);

  function openAuth(mode) {
    setAuthMode(mode);
    setMessage("");
    setFormData({ name: "", email: "", password: "" });
    setMenuOpen(false);
  }

  function closeAuth() {
    setAuthMode(null);
    setMessage("");
    setFormData({ name: "", email: "", password: "" });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Signup and login
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const endpoint =
      authMode === "signup" ? "/api/auth/signup" : "/api/auth/login";

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setUser(data.user);
      closeAuth();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  // Logout
  async function handleLogout() {
    try {
      const response = await fetch(`${API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Could not sign out. Please try again.");
      }

      setUser(null);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <nav className="sticky top-0 z-[100] flex h-[82px] w-full items-center justify-between border-b border-[#30312c] bg-[#10110f] px-[7%] max-[700px]:h-[72px]">
        <a
          href="#home"
          className="text-[21px] font-extrabold tracking-[-1px]"
        >
          IRON<span className="text-[#c5f45b]">.</span>DISTRICT
          <small className="mt-[3px] block text-[8px] tracking-[3px] text-[#85877e]">
            ATHLETIC CLUB
          </small>
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="hidden border-0 bg-transparent text-[25px] text-white max-[700px]:block"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <div
          className={`
            flex items-center gap-[30px]
            max-[1000px]:gap-4
            max-[700px]:absolute max-[700px]:left-0
            max-[700px]:right-0 max-[700px]:top-[72px]
            max-[700px]:flex-col max-[700px]:items-stretch
            max-[700px]:gap-[25px] max-[700px]:border-b
            max-[700px]:border-[#30312c] max-[700px]:bg-[#10110f]
            max-[700px]:px-[7%] max-[700px]:py-[25px]
            ${menuOpen ? "max-[700px]:flex" : "max-[700px]:hidden"}
          `}
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] font-bold text-[#c0c0b9] transition-colors duration-300 hover:text-[#c5f45b]"
            >
              {label}
            </a>
          ))}

          {user ? (
            <div className="flex items-center gap-4 max-[700px]:flex-col">
              <span className="text-[11px] font-bold text-[#c5f45b]">
                Hi, {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="border border-[#c5f45b] px-4 py-3 text-[11px] font-bold text-white transition-colors hover:bg-[#c5f45b] hover:text-black"
              >
                SIGN OUT
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 max-[700px]:flex-col">
              <button
                onClick={() => openAuth("login")}
                className="text-[11px] font-bold text-white transition-colors hover:text-[#c5f45b]"
              >
                SIGN IN
              </button>

              <button
                onClick={() => openAuth("signup")}
                className="bg-[#c5f45b] px-5 py-[15px] text-[11px] font-bold text-[#111] transition-colors hover:bg-white"
              >
                CREATE ACCOUNT
              </button>
            </div>
          )}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#c5f45b] px-[21px] py-[15px] text-[11px] font-bold text-[#111] transition-colors duration-300 hover:bg-white max-[700px]:text-center"
          >
            JOIN THE CLUB <span className="ml-2">↗</span>
          </a>
        </div>
      </nav>

      {/* Authentication popup */}
      {authMode && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-5"
          onClick={closeAuth}
        >
          <div
            className="relative w-full max-w-[430px] border border-[#30312c] bg-[#10110f] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeAuth}
              className="absolute right-5 top-4 text-2xl text-[#85877e] hover:text-white"
              aria-label="Close"
            >
              ×
            </button>

            <p className="mb-3 text-[10px] font-bold tracking-[4px] text-[#c5f45b]">
              IRON DISTRICT
            </p>

            <h2 className="mb-2 text-3xl font-extrabold text-white">
              {authMode === "signup" ? "CREATE ACCOUNT" : "WELCOME BACK"}
            </h2>

            <p className="mb-7 text-sm text-[#85877e]">
              {authMode === "signup"
                ? "Join the club. Start your fitness journey."
                : "Sign in to access your account."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {authMode === "signup" && (
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full border border-[#30312c] bg-[#191a17] px-4 py-4 text-sm text-white outline-none placeholder:text-[#85877e] focus:border-[#c5f45b]"
                />
              )}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-[#30312c] bg-[#191a17] px-4 py-4 text-sm text-white outline-none placeholder:text-[#85877e] focus:border-[#c5f45b]"
              />

              <input
                type="password"
                name="password"
                placeholder="Password (minimum 8 characters)"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={8}
                className="w-full border border-[#30312c] bg-[#191a17] px-4 py-4 text-sm text-white outline-none placeholder:text-[#85877e] focus:border-[#c5f45b]"
              />

              {message && (
                <p className="text-sm text-red-400">{message}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c5f45b] py-4 text-xs font-extrabold tracking-[2px] text-black transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "PLEASE WAIT..."
                  : authMode === "signup"
                    ? "CREATE ACCOUNT"
                    : "SIGN IN"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#85877e]">
              {authMode === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}

              <button
                onClick={() =>
                  openAuth(authMode === "signup" ? "login" : "signup")
                }
                className="ml-2 font-bold text-[#c5f45b] hover:text-white"
              >
                {authMode === "signup" ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
