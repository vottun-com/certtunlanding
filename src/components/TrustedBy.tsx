"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const logos = [
  "TechForward",
  "EduGlobal",
  "CryptoAcademy",
  "LearnPath",
  "SkillBridge",
  "UniCert",
  "DataSchool",
  "CloudMinds",
];

export default function TrustedBy() {
  const t = useTranslations("trustedBy");

  return (
    <section className="relative py-16 border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-[var(--color-text-muted)] mb-10 uppercase tracking-[0.15em]"
        >
          {t("title")}
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex animate-[scroll_25s_linear_infinite] gap-16 items-center">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-[var(--color-text-muted)]/40 font-[family-name:var(--font-outfit)] text-xl font-bold tracking-wide whitespace-nowrap hover:text-[var(--color-text-secondary)] transition-colors"
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
