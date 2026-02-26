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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-[var(--color-text)]">
            Certtun
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center bg-[var(--color-bg-muted)] rounded-lg p-0.5">
            <button
              onClick={() => switchLocale("en")}
              className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                locale === "en"
                  ? "bg-white text-[var(--color-text)] shadow-sm"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => switchLocale("es")}
              className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                locale === "es"
                  ? "bg-white text-[var(--color-text)] shadow-sm"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
              }`}
            >
              ES
            </button>
          </div>

          <a
            href="#pricing"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-[var(--color-primary)] border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary-50)] transition-all"
          >
            {t("bookDemo")}
          </a>
          <a
            href="#pricing"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-all shadow-sm"
          >
            {t("getStarted")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-5 h-0.5 bg-[var(--color-text)] transition-all ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`w-5 h-0.5 bg-[var(--color-text)] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-[var(--color-text)] transition-all ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
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
            className="lg:hidden overflow-hidden bg-white border-b border-[var(--color-border)]"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors py-2 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                <div className="flex items-center bg-[var(--color-bg-muted)] rounded-lg p-0.5">
                  <button
                    onClick={() => switchLocale("en")}
                    className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                      locale === "en" ? "bg-white text-[var(--color-text)] shadow-sm" : "text-[var(--color-text-muted)]"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => switchLocale("es")}
                    className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                      locale === "es" ? "bg-white text-[var(--color-text)] shadow-sm" : "text-[var(--color-text-muted)]"
                    }`}
                  >
                    ES
                  </button>
                </div>
                <a
                  href="#pricing"
                  className="flex-1 text-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[var(--color-primary)]"
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
