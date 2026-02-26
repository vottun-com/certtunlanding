"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (newLocale: "en" | "es") => {
    router.replace(pathname, { locale: newLocale });
  };

  const navItems = [
    { label: t("features"), href: "#features" },
    { label: t("howItWorks"), href: "#how-it-works" },
    { label: t("useCases"), href: "#use-cases" },
    { label: t("pricing"), href: "#pricing" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#06070D]/80 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-blue)] flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="font-[family-name:var(--font-outfit)] text-xl font-bold tracking-tight text-white group-hover:text-[var(--color-cyan)] transition-colors">
            Certtun
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-cyan)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center bg-[var(--color-bg-card)] rounded-full p-1 border border-[var(--color-border)]">
            <button
              onClick={() => switchLocale("en")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                locale === "en"
                  ? "bg-[var(--color-cyan)] text-[var(--color-bg-primary)]"
                  : "text-[var(--color-text-secondary)] hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => switchLocale("es")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                locale === "es"
                  ? "bg-[var(--color-cyan)] text-[var(--color-bg-primary)]"
                  : "text-[var(--color-text-secondary)] hover:text-white"
              }`}
            >
              ES
            </button>
          </div>

          {/* CTA */}
          <a
            href="#pricing"
            className="relative px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-blue)] hover:shadow-[0_0_30px_rgba(47,193,255,0.3)] transition-all duration-300 hover:scale-105"
          >
            {t("getStarted")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`w-5 h-px bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-1" : ""}`}
          />
          <span
            className={`w-5 h-px bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-px bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[var(--color-bg-secondary)]/95 backdrop-blur-xl border-b border-[var(--color-border)]"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[var(--color-text-secondary)] hover:text-white transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                <div className="flex items-center bg-[var(--color-bg-card)] rounded-full p-1 border border-[var(--color-border)]">
                  <button
                    onClick={() => switchLocale("en")}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      locale === "en"
                        ? "bg-[var(--color-cyan)] text-[var(--color-bg-primary)]"
                        : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => switchLocale("es")}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      locale === "es"
                        ? "bg-[var(--color-cyan)] text-[var(--color-bg-primary)]"
                        : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    ES
                  </button>
                </div>
                <a
                  href="#pricing"
                  className="flex-1 text-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-blue)]"
                >
                  {t("getStarted")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
