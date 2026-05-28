import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart2,
  MessageSquare,
  Image,
  Gauge,
  Star,
  TrendingUp,
  Phone,
  MapPin,
  Upload,
  Sparkles,
  Send,
} from "lucide-react";
import SpotlightText from "../animations/SpotlightText";

/* ─── Mini UI widgets for each card ─── */
function GBPConnect() {
  return (
    <div className="bg-base-bg/80 rounded-xl p-4 mt-4 border border-white/5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-blue-600">
          G
        </div>
        <span className="text-white text-xs font-semibold">
          Google Business Profile
        </span>
      </div>
      <p className="text-[#9CA3AF] text-xs mb-4">
        Milano Bistro wants access to your Google Business account.
      </p>
      <div className="flex gap-2">
        <button className="flex-1 bg-primary-accent text-white text-xs font-semibold py-2 rounded-lg shadow-lg shadow-primary-accent/20">
          Allow Access
        </button>
        <button className="flex-1 bg-white/5 border border-white/10 text-[#9CA3AF] text-xs py-2 rounded-lg">
          Deny
        </button>
      </div>
      <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/5">
        <ShieldCheck size={12} className="text-emerald-400" />
        <span className="text-emerald-400 text-[10px]">
          Encrypted OAuth 2.0 · Safe endpoint synchronization
        </span>
      </div>
    </div>
  );
}

function AnalyticsDashboard() {
  return (
    <div className="bg-base-bg/80 rounded-xl p-4 mt-4 border border-white/5">
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { icon: <TrendingUp size={12} />, val: "+34%", label: "Visibility" },
          { icon: <Phone size={12} />, val: "128", label: "Calls" },
          { icon: <MapPin size={12} />, val: "89", label: "Routes" },
        ].map(({ icon, val, label }) => (
          <div
            key={label}
            className="bg-card-surface/90 rounded-lg p-2.5 flex flex-col items-center gap-1 border border-white/5"
          >
            <span className="text-primary-accent">{icon}</span>
            <span className="text-white font-bold text-xs">{val}</span>
            <span className="text-[#9CA3AF] text-[10px]">{label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1 h-12 pt-2">
        {[45, 60, 50, 75, 65, 90, 80, 70, 85, 95, 78, 88].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-linear-to-t from-primary-accent to-primary-accent/10"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <p className="text-[#9CA3AF] text-[10px] mt-2 text-center">
        Real-Time Map Performance Feed
      </p>
    </div>
  );
}

function ReviewAutoReply() {
  return (
    <div className="bg-base-bg/80 rounded-xl p-4 mt-4 space-y-3 border border-white/5">
      <div className="flex gap-2 items-start">
        <div className="w-6 h-6 rounded-full bg-linear-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
          S
        </div>
        <div className="bg-white/5 rounded-xl rounded-tl-none px-3 py-2 flex-1">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={9}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <p className="text-[#9CA3AF] text-[11px] leading-relaxed">
            "Absolutely love this place! The pasta is incredible."
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-start justify-end">
        <div className="bg-primary-accent/10 border border-primary-accent/20 rounded-xl rounded-tr-none px-3 py-2 max-w-[85%]">
          <div className="flex items-center gap-1 mb-1">
            <Sparkles size={10} className="text-primary-accent" />
            <span className="text-primary-accent text-[10px] font-semibold">
              AI Reply
            </span>
          </div>
          <p className="text-[#9CA3AF] text-[11px] leading-relaxed">
            "Thank you so much, Sarah! Thrilled you loved the pasta! 💓"
          </p>
        </div>
        <div className="w-6 h-6 rounded-full bg-primary-accent flex items-center justify-center shrink-0">
          <Sparkles size={10} className="text-white" />
        </div>
      </div>
    </div>
  );
}

function PhotoManager() {
  return (
    <div className="bg-base-bg/80 rounded-xl p-4 mt-4 border border-white/5">
      <div className="border border-dashed border-primary-accent/30 rounded-xl p-4 mb-3 flex flex-col items-center gap-1 bg-primary-accent/5 hover:bg-primary-accent/10 transition-colors cursor-pointer">
        <Upload size={16} className="text-primary-accent" />
        <p className="text-white text-xs font-medium">Upload Media Assets</p>
      </div>
      <div className="bg-card-surface/90 rounded-xl p-3 border border-white/5">
        <p className="text-[#9CA3AF] text-[11px] leading-relaxed mb-2.5">
          "🍕 Weekend special is live! Handmade dough and fresh ingredients..."
        </p>
        <button className="w-full bg-primary-accent text-white text-[11px] font-bold py-2 rounded-lg flex items-center justify-center gap-1.5 shadow-md">
          <Send size={10} /> Sync to Local Post Feed
        </button>
      </div>
    </div>
  );
}

function ScoreCard() {
  return (
    <div className="bg-base-bg/80 rounded-xl p-4 mt-4 border border-white/5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-white font-bold text-2xl">780</p>
          <p className="text-[#9CA3AF] text-xs">Score out of 1000</p>
        </div>
        <span className="bg-amber-500/15 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/20">
          Needs Attention
        </span>
      </div>
      <div className="space-y-2.5">
        {[
          { label: "Photos", score: 85, color: "#9f57f5" },
          { label: "Reviews", score: 92, color: "#a78bfa" },
          { label: "Posts", score: 70, color: "#7c3aed" },
        ].map(({ label, score, color }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="text-[#9CA3AF] text-[11px] w-14 shrink-0">
              {label}
            </span>
            <div className="flex-1 bg-white/5 rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${score}%`, background: color }}
              />
            </div>
            <span className="text-white text-[11px] font-semibold w-6 text-right">
              {score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Google Business Profile Connection",
    desc: "Secure one-click OAuth authorization. Link your GBP in under 60 seconds.",
    widget: <GBPConnect />,
    sectionHeading: "Connect & Synced in Seconds",
    sectionDesc:
      "Seamlessly integrate your direct Google storefront endpoints safely via authenticated enterprise OAuth mechanics.",
    gradient: "from-[#1a0c2e] to-[#100820]",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Google Analytics Dashboard",
    desc: "Live local traffic, click-to-call, and direction requests — all in one view.",
    widget: <AnalyticsDashboard />,
    sectionHeading: "Track Real-Time Performance Data",
    sectionDesc:
      "Understand exactly how your buyers discover your business locations. Gain visibility over actual map views, custom calls, and actions.",
    gradient: "from-[#161233] to-[#0e0b21]",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Auto-Reply to Google Reviews",
    desc: "AI reads each review and crafts a personalized, brand-aligned response instantly.",
    widget: <ReviewAutoReply />,
    sectionHeading: "Automate Reviews Engagement with AI",
    sectionDesc:
      "Boost search algorithm priority. Our lightning-fast text processing constructs engaging outputs tailored explicitly around buyer-sentiments.",
    gradient: "from-[#220d2a] to-[#14081a]",
  },
  {
    icon: <Image size={24} />,
    title: "Photo Management & Post Creation",
    desc: "Upload media and let AI write compelling posts optimized for local search.",
    widget: <PhotoManager />,
    sectionHeading: "Dynamic AI Local Media Creation",
    sectionDesc:
      "Transform raw imagery files into fully search-optimized posts loaded with high-ranking regional search tag keywords.",
    gradient: "from-[#0f1c2e] to-[#0a111c]",
  },
  {
    icon: <Gauge size={24} />,
    title: "GBP Optimization Score Card",
    desc: "A live score out of 1000 pinpoints exactly what to fix to climb rankings.",
    widget: <ScoreCard />,
    sectionHeading: "Pinpoint SEO Opportunities Quickly",
    sectionDesc:
      "Never operate in blind spots. Run constant audit cross-checks with instant granular breakdowns that deliver simple insights.",
    gradient: "from-[#261b15] to-[#17100d]",
  },
];

export default function Features() {
  return (
    <section className="bg-base-bg text-white relative">
      {/* ─── STICKY HEADER ZONE ─── */}
      <div className="max-w-7xl mx-auto px-6 my-20 pt-24 pb-12 text-center">
        <span className="inline-flex items-center gap-2 bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-semibold px-4 py-2 rounded-full mb-5">
          Core Services
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
          <SpotlightText text="Everything Your Local Business Needs," />{" "}
          <span className="bg-linear-to-r from-primary-accent to-[#c084fc] bg-clip-text text-transparent">
            Automated.
          </span>
        </h2>
        <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
          Five powerful modules working together to dominate your local search
          results.
        </p>
      </div>

      {/* ─── STACKING TRACK CONTAINER ─── */}
      {/* perspective property creates physical depth during page turns */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pb-32 perspective-[1000px]">
        {cards.map((card) => {
          return (
            <div
              key={card.title}
              className="sticky top-12 lg:top-24 w-full mb-16 lg:mb-24"
            >
              {/* Floating Card Element */}
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.95, rotateX: -15 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  // Custom styling shift applied to cards caught beneath stacked blocks
                  transition: { type: "spring", stiffness: 60, damping: 15 },
                }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                // once: false triggers reversing when scrolling back upward
                viewport={{ once: false, amount: 0.25 }}
                className={`w-full bg-linear-to-b ${card.gradient} border border-white/10 rounded-3xl p-8 lg:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-115 transform-gpu origin-top`}
              >
                {/* Information Column */}
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 text-primary-accent shadow-inner">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3.5xl font-extrabold text-white tracking-tight leading-tight">
                    {card.sectionHeading}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm lg:text-base leading-relaxed">
                    {card.sectionDesc}
                  </p>

                  <div className="pt-4 border-t border-white/5">
                    <h4 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-accent" />
                      {card.title}
                    </h4>
                    <p className="text-[#9CA3AF] text-xs max-w-md">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Interactive Dynamic Widget Column */}
                <div className="md:col-span-5 bg-card-surface/40 border border-white/5 rounded-2xl p-2 shadow-2xl">
                  {card.widget}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
