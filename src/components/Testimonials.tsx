"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      quote: t("t1"),
      author: t("t1Author"),
      role: t("t1Role"),
      org: t("t1Org"),
      initials: "MS",
    },
    {
      quote: t("t2"),
      author: t("t2Author"),
      role: t("t2Role"),
      org: t("t2Org"),
      initials: "JM",
    },
    {
      quote: t("t3"),
      author: t("t3Author"),
      role: t("t3Role"),
      org: t("t3Org"),
      initials: "LC",
    },
  ];

  return (
    <section className="relative py-28 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Testimonial cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Quote */}
            <div className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Decorative quote mark */}
              <div className="absolute top-4 left-6 text-[var(--color-cyan)]/10 font-[family-name:var(--font-outfit)] text-[120px] leading-none select-none">
                &ldquo;
              </div>

              <div className="relative">
                <p className="text-lg md:text-xl text-[var(--color-text-primary)] leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-blue)] flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {testimonials[active].initials}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">
                      {testimonials[active].author}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)]">
                      {testimonials[active].role}
                    </div>
                    <div className="text-xs text-[var(--color-cyan)]">
                      {testimonials[active].org}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-[var(--color-cyan)] w-8"
                      : "bg-[var(--color-text-muted)] hover:bg-[var(--color-text-secondary)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
