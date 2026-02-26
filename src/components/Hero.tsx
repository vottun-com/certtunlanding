"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function CertificateVisual() {
  const t = useTranslations("hero");

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main certificate card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white rounded-2xl shadow-xl border border-[var(--color-border)] overflow-hidden"
      >
        {/* Certificate header bar */}
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[#0EA5E9] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="text-white text-sm font-semibold font-[family-name:var(--font-heading)]">
                {t("walletLabel")}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
              <span className="text-white/90 text-[10px] font-medium">{t("verified")}</span>
            </div>
          </div>
        </div>

        {/* Certificate body */}
        <div className="p-6">
          <div className="border-2 border-dashed border-[var(--color-border)] rounded-xl p-6 relative">
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] font-semibold mb-3">
                Certificate of Completion
              </div>
              <div className="w-12 h-px bg-[var(--color-primary)]/30 mx-auto mb-4" />
              <div className="text-xl font-bold text-[var(--color-text)] font-[family-name:var(--font-heading)] mb-1">
                {t("certTitle")}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] mb-4">
                {t("certIssuer")}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">
                {t("certDate")}
              </div>
            </div>

            {/* Seal */}
            <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[#0EA5E9] flex items-center justify-center shadow-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>

          {/* Share bar */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {["LinkedIn", "Email", "Link"].map((label) => (
                <div key={label} className="px-3 py-1.5 rounded-md bg-[var(--color-bg-muted)] text-[10px] font-medium text-[var(--color-text-secondary)]">
                  {label}
                </div>
              ))}
            </div>
            <div className="text-[10px] text-[var(--color-text-muted)]">
              1-click share
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating stat: speed */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute -right-6 top-6 bg-white rounded-xl shadow-lg border border-[var(--color-border)] px-4 py-3"
      >
        <div className="text-lg font-bold text-[var(--color-primary)] font-[family-name:var(--font-heading)]">5 min</div>
        <div className="text-[10px] text-[var(--color-text-muted)]">to issue</div>
      </motion.div>

      {/* Floating stat: verified */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute -left-4 bottom-20 bg-white rounded-xl shadow-lg border border-[var(--color-border)] px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-semibold text-[var(--color-text)]">Verified</div>
            <div className="text-[10px] text-emerald-600">Blockchain</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-50)] via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs text-[var(--color-primary)] font-semibold">
                {t("badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-[var(--color-text)] mb-6"
            >
              {t("title")}{" "}
              <span className="text-[var(--color-primary)]">
                {t("titleAccent")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-xl"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#pricing"
                className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-all shadow-sm shadow-[var(--color-primary)]/20 hover:shadow-md hover:shadow-[var(--color-primary)]/25"
              >
                {t("cta")}
              </a>
              <a
                href="#showcase"
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-soft)] transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)" className="opacity-80">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                {t("ctaSecondary")}
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-8 mt-10 pt-8 border-t border-[var(--color-border)]"
            >
              {[
                { value: "2.4M+", label: t("statCerts") },
                { value: "200+", label: t("statInstitutions") },
                { value: "45+", label: t("statCountries") },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[var(--color-text)] font-[family-name:var(--font-heading)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative"
          >
            <CertificateVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
