"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cyan)]/20 via-[var(--color-blue)]/10 to-[var(--color-bg-secondary)]" />
          <div className="absolute inset-0 grid-bg" />

          {/* Glow orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-cyan)]/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--color-blue)]/15 rounded-full blur-[100px]" />

          <div className="relative px-8 py-20 md:px-16 md:py-24 text-center">
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
              {t("title")}
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
              {t("subtitle")}
            </p>

            <div className="flex flex-col items-center gap-4">
              <a
                href="#"
                className="px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-blue)] hover:shadow-[0_0_50px_rgba(47,193,255,0.3)] transition-all duration-300 hover:scale-105"
              >
                {t("button")}
              </a>
              <span className="text-sm text-[var(--color-text-muted)]">
                {t("note")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
