"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    titleKey: "step1Title" as const,
    descKey: "step1Desc" as const,
    number: "1",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
    titleKey: "step2Title" as const,
    descKey: "step2Desc" as const,
    number: "2",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    titleKey: "step3Title" as const,
    descKey: "step3Desc" as const,
    number: "3",
  },
];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section id="how-it-works" className="py-24 bg-white">
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

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-px border-t-2 border-dashed border-[var(--color-border)]" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center group"
            >
              {/* Step circle */}
              <div className="relative inline-flex items-center justify-center w-[120px] h-[120px] rounded-full bg-[var(--color-primary-50)] group-hover:bg-[var(--color-primary-100)] transition-colors mb-6">
                {step.icon}
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-white">{step.number}</span>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-text)] mb-3">
                {t(step.titleKey)}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-xs mx-auto">
                {t(step.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
