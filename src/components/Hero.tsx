"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function CertificateVisual() {
  const t = useTranslations("hero");

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Ambient glow */}
      <div className="absolute -inset-20 bg-gradient-to-r from-[var(--color-cyan)]/10 via-[var(--color-blue)]/5 to-transparent rounded-full blur-3xl" />

      {/* Wallet card */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {/* Main wallet */}
        <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-gradient-to-br from-[#0C0D16] to-[#0F1020]">
          {/* Wallet header */}
          <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-blue)] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-white font-[family-name:var(--font-outfit)]">
                {t("walletLabel")}
              </span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]" />
              <div className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]" />
              <div className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]" />
            </div>
          </div>

          {/* Certificate preview */}
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="rounded-xl bg-gradient-to-br from-[#111225] to-[#0A0B18] border border-[var(--color-border)] p-5 relative overflow-hidden"
            >
              {/* Decorative corner patterns */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--color-cyan)]/5 to-transparent" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[var(--color-blue)]/5 to-transparent" />

              {/* Certificate content */}
              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-cyan)] mb-3">
                  Certificate of Completion
                </div>
                <div className="text-lg font-bold text-white font-[family-name:var(--font-outfit)] mb-1">
                  {t("certTitle")}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)] mb-4">
                  {t("certIssuer")} — {t("certDate")}
                </div>

                {/* Verification badge */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-[10px] font-semibold text-emerald-400">
                    {t("verified")}
                  </span>
                </motion.div>
              </div>

              {/* Blockchain hash */}
              <div className="mt-4 pt-3 border-t border-[var(--color-border)]">
                <div className="text-[9px] text-[var(--color-text-muted)] font-mono truncate">
                  0x7a3b...f29e1d4c8b
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 top-8 px-3 py-2 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] shadow-lg"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-[10px] text-emerald-400 font-medium">Blockchain Verified</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -left-4 bottom-12 px-3 py-2 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] shadow-lg"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[var(--color-cyan)]/20 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-[10px] text-[var(--color-cyan)] font-medium">Instant Delivery</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[var(--color-cyan)]/8 via-[var(--color-blue)]/4 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-blue)]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-cyan)]/5 border border-[var(--color-cyan)]/15 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-cyan)] animate-pulse" />
              <span className="text-xs text-[var(--color-cyan)] font-medium">
                {t("badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[family-name:var(--font-outfit)] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">{t("title")}</span>
              <br />
              <span className="bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-blue)] bg-clip-text text-transparent">
                {t("titleAccent")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-lg"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#pricing"
                className="group relative px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-blue)] hover:shadow-[0_0_40px_rgba(47,193,255,0.3)] transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">{t("cta")}</span>
              </a>
              <a
                href="#showcase"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-white/5 transition-all duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="var(--color-cyan)"
                  className="group-hover:scale-110 transition-transform"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                {t("ctaSecondary")}
              </a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <CertificateVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
