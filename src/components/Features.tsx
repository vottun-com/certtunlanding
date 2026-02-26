"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const features = [
  {
    titleKey: "blockchain" as const,
    descKey: "blockchainDesc" as const,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="1" width="9" height="9" rx="1" />
        <rect x="14" y="1" width="9" height="9" rx="1" />
        <rect x="1" y="14" width="9" height="9" rx="1" />
        <rect x="14" y="14" width="9" height="9" rx="1" />
        <path d="M10 5.5h4M5.5 10v4M18.5 10v4M10 18.5h4" />
      </svg>
    ),
  },
  {
    titleKey: "branding" as const,
    descKey: "brandingDesc" as const,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <path d="M17.6 9.5c-.3-.2-.7-.4-1.1-.5" />
        <circle cx="10.5" cy="6.5" r="2.5" />
        <path d="M7 21v-2a4 4 0 014-4h2a4 4 0 014 4v2" />
        <path d="M12 3v2" />
      </svg>
    ),
  },
  {
    titleKey: "bulk" as const,
    descKey: "bulkDesc" as const,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M12 11l4 4M12 11l-4 4M12 11v8" />
      </svg>
    ),
  },
  {
    titleKey: "api" as const,
    descKey: "apiDesc" as const,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    titleKey: "analytics" as const,
    descKey: "analyticsDesc" as const,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9" />
        <path d="M21 3l-9 9" />
        <path d="M21 3h-6" />
        <path d="M21 3v6" />
      </svg>
    ),
  },
  {
    titleKey: "multilang" as const,
    descKey: "multilangDesc" as const,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

export default function Features() {
  const t = useTranslations("features");

  return (
    <section id="features" className="relative py-28 section-glow">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-cyan)]/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-cyan)]/5 border border-[var(--color-cyan)]/15 mb-6"
          >
            <span className="text-xs text-[var(--color-cyan)] font-medium">
              {t("badge")}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl p-6 glass hover:glow transition-all duration-500 cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--color-cyan)]/5 border border-[var(--color-cyan)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-cyan)]/10 group-hover:border-[var(--color-cyan)]/20 transition-all duration-500">
                {feature.icon}
              </div>

              <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-white mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {t(feature.descKey)}
              </p>

              {/* Hover corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--color-cyan)]/0 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 group-hover:from-[var(--color-cyan)]/5 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
