"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Showcase() {
  const t = useTranslations("showcase");

  const stats = [
    { label: t("stat1Label"), value: t("stat1Value") },
    { label: t("stat2Label"), value: t("stat2Value") },
    { label: t("stat3Label"), value: t("stat3Value") },
    { label: t("stat4Label"), value: t("stat4Value") },
  ];

  return (
    <section id="showcase" className="relative py-28">
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

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20"
        >
          {/* Glow behind */}
          <div className="absolute -inset-4 bg-gradient-to-b from-[var(--color-cyan)]/10 to-transparent rounded-3xl blur-2xl" />

          <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-card)]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] font-mono">
                  app.certtun.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 grid grid-cols-12 gap-4 min-h-[400px]">
              {/* Sidebar */}
              <div className="col-span-3 hidden md:block">
                <div className="space-y-2">
                  {["Dashboard", "Certificates", "Templates", "Recipients", "Analytics", "Settings"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`px-3 py-2 rounded-lg text-xs ${
                          i === 0
                            ? "bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] border border-[var(--color-cyan)]/20"
                            : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Main area */}
              <div className="col-span-12 md:col-span-9 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Total Issued", value: "12,847", change: "+12%" },
                    { label: "This Month", value: "1,243", change: "+8%" },
                    { label: "Verified", value: "98.7%", change: "+0.3%" },
                    { label: "Active Wallets", value: "9,521", change: "+15%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                    >
                      <div className="text-[10px] text-[var(--color-text-muted)] mb-1">
                        {stat.label}
                      </div>
                      <div className="text-lg font-bold text-white font-[family-name:var(--font-outfit)]">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-emerald-400">
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart area placeholder */}
                <div className="p-4 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] h-48 flex items-end gap-1">
                  {Array.from({ length: 24 }, (_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-[var(--color-cyan)]/20 to-[var(--color-cyan)]/60"
                      style={{
                        height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 30}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Recent certificates table */}
                <div className="rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden">
                  <div className="px-4 py-2 border-b border-[var(--color-border)]">
                    <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                      Recent Certificates
                    </span>
                  </div>
                  {[1, 2, 3].map((row) => (
                    <div
                      key={row}
                      className="px-4 py-2.5 flex items-center justify-between border-b border-[var(--color-border)] last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-cyan)]/20 to-[var(--color-blue)]/20 flex items-center justify-center">
                          <span className="text-[10px] text-[var(--color-cyan)]">
                            JS
                          </span>
                        </div>
                        <div>
                          <div className="text-xs text-white">
                            Web Development Bootcamp
                          </div>
                          <div className="text-[10px] text-[var(--color-text-muted)]">
                            john@example.com
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] text-emerald-400">
                          Verified
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-blue)] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
