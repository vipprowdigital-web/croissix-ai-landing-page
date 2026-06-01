import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, Zap, Clock } from "lucide-react";
import SpotlightText from "../animations/SpotlightText";

function AnimatedNumber({ to, decimals = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (isInView) raw.set(to);
  }, [isInView, to, raw]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = prefix + v.toFixed(decimals) + suffix;
      }
    });
  }, [spring, decimals, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

const metrics = [
  {
    icon: <TrendingUp size={28} />,
    prefix: "+",
    value: 42,
    suffix: "%",
    decimals: 0,
    headline: "Increase in Local Map Pack Visibility",
    caption:
      "Businesses see higher map pack presence within 30 days of automation.",
    color: "#9f57f5",
    glow: "#9f57f5",
  },
  {
    icon: <Zap size={28} />,
    prefix: "",
    value: 5.3,
    suffix: "x",
    decimals: 1,
    headline: "Faster Customer Review Reply Rate",
    caption: "AI responds to new reviews in under 2 seconds, not 2 days.",
    color: "#c084fc",
    glow: "#c084fc",
  },
  {
    icon: <Clock size={28} />,
    prefix: "",
    value: 18,
    suffix: " hrs",
    decimals: 0,
    headline: "Average Hours Saved Per Month on Manual Posting",
    caption:
      "Stop writing posts, uploading photos, and chasing reviews by hand.",
    color: "#a78bfa",
    glow: "#a78bfa",
  },
];

export default function Metrics() {
  return (
    <section id="metrics" className="bg-base-bg py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-accent/20 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-125 h-75 bg-primary-accent/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Real Results
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {/* Numbers That{" "} */}
            <SpotlightText text="Numbers That " />{" "}
            <span className="bg-linear-to-r from-primary-accent to-[#c084fc] bg-clip-text text-transparent">
              Speak for Themselves.
            </span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
            <SpotlightText
              text="Across hundreds of local businesses using Croissix AI, the impact is
            clear."
            />
            {/* Across hundreds of local businesses using Croissix AI, the impact is
            clear. */}
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative bg-card-surface/70 border border-primary-accent/20 rounded-2xl p-5 sm:p-8 overflow-hidden group hover:border-primary-accent/40 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${m.glow}12 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: `${m.color}15`,
                  color: m.color,
                  border: `1px solid ${m.color}30`,
                }}
              >
                {m.icon}
              </div>

              {/* Animated number */}
              <div
                className="text-4xl sm:text-6xl font-black mb-3 tabular-nums"
                style={{ color: m.color }}
              >
                <AnimatedNumber
                  to={m.value}
                  decimals={m.decimals}
                  prefix={m.prefix}
                  suffix={m.suffix}
                />
              </div>

              <h3 className="text-white font-bold text-base mb-2 leading-tight">
                {m.headline}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {m.caption}
              </p>

              {/* Decorative corner */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-10"
                style={{ background: m.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom social proof strip */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-card-surface/40 border border-primary-accent/15 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#9CA3AF] text-sm text-center md:text-left">
            Based on data from{" "}
            <span className="text-white font-semibold">2,400+</span> local
            businesses using Croissix AI across{" "}
            <span className="text-white font-semibold">18 industries</span>.
          </p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 16 16"
                className="w-4 h-4 fill-amber-400"
              >
                <path d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.4l-3.7 2 .7-4.1-3-2.9 4.2-.8z" />
              </svg>
            ))}
            <span className="text-white font-semibold text-sm ml-2">4.9/5</span>
            <span className="text-[#9CA3AF] text-sm ml-1">average rating</span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
