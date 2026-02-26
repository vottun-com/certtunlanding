"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Pricing() {
  const t = useTranslations("pricing");

  const plans = [
    {
      name: t("starter"),
      price: t("starterPrice"),
      desc: t("starterDesc"),
      features: [t("starterF1"), t("starterF2"), t("starterF3"), t("starterF4")],
      popular: false,
      cta: t("cta"),
    },
    {
      name: t("pro"),
      price: t("proPrice"),
      desc: t("proDesc"),
      features: [t("proF1"), t("proF2"), t("proF3"), t("proF4"), t("proF5")],
      popular: true,
      cta: t("cta"),
    },
    {
      name: t("enterprise"),
      price: t("enterprisePrice"),
      desc: t("enterpriseDesc"),
      features: [
        t("enterpriseF1"),
        t("enterpriseF2"),
        t("enterpriseF3"),
        t("enterpriseF4"),
        t("enterpriseF5"),
      ],
      popular: false,
      cta: t("ctaEnterprise"),
    },
  ];

  return (
    <section id="pricing" className="relative py-28 section-glow">
      <div className="max-w-7xl mx-auto px-6">
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

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-to-b from-[var(--color-cyan)]/10 to-[var(--color-bg-card)] border-2 border-[var(--color-cyan)]/30 glow-strong scale-105"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-blue)] text-xs font-semibold text-white">
                  {t("popular")}
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-[family-name:var(--font-outfit)] text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.price !== t("enterprisePrice") && (
                    <span className="text-sm text-[var(--color-text-muted)]">
                      {t("monthly")}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-cyan)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 flex-shrink-0"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-blue)] text-white hover:shadow-[0_0_30px_rgba(47,193,255,0.3)] hover:scale-105"
                    : "border border-[var(--color-border)] text-white hover:border-[var(--color-border-hover)] hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
