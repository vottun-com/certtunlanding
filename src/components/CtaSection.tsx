"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-primary)] to-[#0E7490]"
        >
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-5 max-w-2xl mx-auto leading-tight">
              {t("title")}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              {t("subtitle")}
            </p>

            <div className="flex flex-col items-center gap-3">
              <a
                href="#"
                className="px-8 py-3.5 rounded-lg text-base font-semibold bg-white text-[var(--color-primary)] hover:bg-white/90 transition-all shadow-lg"
              >
                {t("button")}
              </a>
              <span className="text-sm text-white/60">{t("note")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
