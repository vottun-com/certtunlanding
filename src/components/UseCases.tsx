"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const cases = [
  {
    titleKey: "uni" as const,
    descKey: "uniDesc" as const,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      </svg>
    ),
  },
  {
    titleKey: "training" as const,
    descKey: "trainingDesc" as const,
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    titleKey: "events" as const,
    descKey: "eventsDesc" as const,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    titleKey: "corporate" as const,
    descKey: "corporateDesc" as const,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
];

export default function UseCases() {
  const t = useTranslations("useCases");

  return (
    <section id="use-cases" className="py-24 bg-[var(--color-bg-soft)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 mb-5"
          >
            <span className="text-xs text-[var(--color-primary)] font-semibold">
              {t("badge")}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4"
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((useCase, i) => (
            <motion.div
              key={useCase.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-xl p-7 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${useCase.color} flex items-center justify-center mb-5 ${useCase.iconColor}`}>
                {useCase.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-text)] mb-2">
                {t(useCase.titleKey)}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {t(useCase.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
