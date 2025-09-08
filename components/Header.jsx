"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const resumeUrl = "/resume/Resume@ABHISHEKKUMAR.pdf";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onClick(e) {
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    window.addEventListener("pointerdown", onClick);
    return () => window.removeEventListener("pointerdown", onClick);
  }, [open]);

  const navLinks = [
    { to: "/professionalcareer", label: "Professional Career" },
    { to: "/skills", label: "Skills" },
    { to: "/accreditation", label: "Accreditations" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0b1220] z-50 h-16">
      <div className="w-[80%] mx-auto flex items-center justify-between h-full">
        <Link href="/" className="brand font-bold text-white">
          ABHISHEK.
        </Link>

        <nav className="hidden lg:flex">
          <ul className="nav-list flex items-center gap-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  href={to}
                  className="nav-link font-bold"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={resumeUrl}
                download="Resume-ABHISHEKKUMAR.pdf"
                className="nav-link btn btn-primary ml-4"
                title="Download Resume"
                target="_blank"
                rel="noopener noreferrer">
                Download Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden flex items-center">
          <button
            ref={btnRef}
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300"
            title={open ? "Close menu" : "Open menu"}>
            <svg
              className="w-6 h-6 text-slate-100"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true">
              {open ? (
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`absolute right-0 top-full z-40 transition-[opacity,transform] duration-200 ease ${open
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
          }`}
        aria-hidden={!open}
        style={{ marginTop: "0.5rem" }}
      >
        <div className="w-[250px] bg-slate-900 border border-slate-800 rounded-lg p-4 shadow-lg">
          <ul className="flex flex-col gap-3" >
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  href={to}
                  className="block px-3 py-2 rounded-md nav-link"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={resumeUrl}
                download="Resume-ABHISHEKKUMAR.pdf"
                className="inline-block nav-link btn btn-primary w-full text-center"
                onClick={() => setOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
