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
    <section id="showcase" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
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

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-20"
        >
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] bg-white shadow-xl shadow-black/5">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-soft)]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-lg bg-white border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] font-mono">
                  app.certtun.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 grid grid-cols-12 gap-4 min-h-[380px] bg-[var(--color-bg-soft)]">
              {/* Sidebar */}
              <div className="col-span-3 hidden md:block">
                <div className="space-y-1">
                  {["Dashboard", "Certificates", "Templates", "Recipients", "Analytics", "Settings"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`px-3 py-2 rounded-lg text-xs font-medium ${
                          i === 0
                            ? "bg-[var(--color-primary)] text-white"
                            : "text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-text-secondary)]"
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
                    <div key={stat.label} className="p-3 rounded-lg bg-white border border-[var(--color-border)]">
                      <div className="text-[10px] text-[var(--color-text-muted)] mb-1">{stat.label}</div>
                      <div className="text-lg font-bold text-[var(--color-text)] font-[family-name:var(--font-heading)]">{stat.value}</div>
                      <div className="text-[10px] text-emerald-600 font-medium">{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="p-4 rounded-lg bg-white border border-[var(--color-border)] h-44 flex items-end gap-1">
                  {Array.from({ length: 24 }, (_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-[var(--color-primary)]"
                      style={{
                        height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 30}%`,
                        opacity: 0.2 + (i / 24) * 0.6,
                      }}
                    />
                  ))}
                </div>

                {/* Recent certificates */}
                <div className="rounded-lg bg-white border border-[var(--color-border)] overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-bg-soft)]">
                    <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
                      Recent Certificates
                    </span>
                  </div>
                  {[
                    { name: "Web Development Bootcamp", email: "john@example.com", initials: "JD" },
                    { name: "Data Science Certificate", email: "maria@example.com", initials: "MS" },
                    { name: "UX Design Fundamentals", email: "alex@example.com", initials: "AK" },
                  ].map((row) => (
                    <div key={row.email} className="px-4 py-2.5 flex items-center justify-between border-b border-[var(--color-border)] last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[var(--color-primary-50)] flex items-center justify-center">
                          <span className="text-[10px] font-semibold text-[var(--color-primary)]">{row.initials}</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-[var(--color-text)]">{row.name}</div>
                          <div className="text-[10px] text-[var(--color-text-muted)]">{row.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-medium text-emerald-700">Verified</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-2">
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
