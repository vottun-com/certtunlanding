"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const logos = [
  "McGraw Hill",
  "TechAcademy",
  "EduGlobal",
  "LearnPath",
  "SkillBridge",
  "UniCert",
  "DataSchool",
  "CloudMinds",
];

export default function TrustedBy() {
  const t = useTranslations("trustedBy");

  return (
    <section className="py-14 bg-[var(--color-bg-soft)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-[var(--color-text-muted)] mb-8 uppercase tracking-[0.12em] font-medium"
        >
          {t("title")}
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-bg-soft)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-bg-soft)] to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex animate-[scroll_30s_linear_infinite] gap-16 items-center">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 font-[family-name:var(--font-heading)] text-lg font-bold tracking-wide whitespace-nowrap text-[var(--color-text-muted)]/50 hover:text-[var(--color-text-secondary)] transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
