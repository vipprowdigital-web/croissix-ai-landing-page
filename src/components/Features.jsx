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
  Pencil,
  Send,
} from "lucide-react";

/* ─── Framer Motion Animation Variants ─── */
const textVariant = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
});

const cardVariant = (direction) => ({
  hidden: { opacity: 0, x: direction === "right" ? 50 : -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 22, delay: 0.1 },
  },
});

/* ─── Mini UI widgets for each card ─── */

function GBPConnect() {
  return (
    <div className="bg-base-bg/60 rounded-xl p-3 mt-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-blue-600">
          G
        </div>
        <span className="text-white text-xs font-semibold">
          Google Business Profile
        </span>
      </div>
      <p className="text-[#9CA3AF] text-xs mb-3">
        Milano Bistro wants access to your Google Business account.
      </p>
      <div className="flex gap-2">
        <button className="flex-1 bg-primary-accent text-white text-xs font-semibold py-1.5 rounded-lg">
          Allow
        </button>
        <button className="flex-1 bg-white/5 border border-white/10 text-[#9CA3AF] text-xs py-1.5 rounded-lg">
          Deny
        </button>
      </div>
      <div className="flex items-center gap-1.5 mt-2">
        <ShieldCheck size={10} className="text-emerald-400" />
        <span className="text-emerald-400 text-[10px]">
          Encrypted OAuth 2.0 · Read & manage access
        </span>
      </div>
    </div>
  );
}

function AnalyticsDashboard() {
  return (
    <div className="bg-base-bg/60 rounded-xl p-3 mt-3">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { icon: <TrendingUp size={12} />, val: "+34%", label: "Visibility" },
          { icon: <Phone size={12} />, val: "128", label: "Calls" },
          { icon: <MapPin size={12} />, val: "89", label: "Routes" },
        ].map(({ icon, val, label }) => (
          <div
            key={label}
            className="bg-card-surface/60 rounded-lg p-2 flex flex-col items-center gap-0.5"
          >
            <span className="text-primary-accent">{icon}</span>
            <span className="text-white font-bold text-xs">{val}</span>
            <span className="text-[#9CA3AF] text-[10px]">{label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-0.5 h-8">
        {[45, 60, 50, 75, 65, 90, 80, 70, 85, 95, 78, 88].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-linear-to-t from-primary-accent/70 to-primary-accent/20"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <p className="text-[#9CA3AF] text-[10px] mt-1 text-center">
        Last 30 Days · Local Traffic
      </p>
    </div>
  );
}

function ReviewAutoReply() {
  return (
    <div className="bg-base-bg/60 rounded-xl p-3 mt-3 space-y-2">
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
            "Absolutely love this place! The pasta is incredible and staff are
            so friendly."
          </p>
        </div>
      </div>

      <div className="flex gap-2 items-start justify-end">
        <div className="bg-primary-accent/15 border border-primary-accent/20 rounded-xl rounded-tr-none px-3 py-2 max-w-[85%]">
          <div className="flex items-center gap-1 mb-1">
            <Sparkles size={10} className="text-primary-accent" />
            <span className="text-primary-accent text-[10px] font-semibold">
              AI Reply
            </span>
          </div>
          <p className="text-[#9CA3AF] text-[11px] leading-relaxed">
            "Thank you so much, Sarah! We're thrilled you loved the pasta. Can't
            wait to welcome you back! 🍝"
          </p>
        </div>
        <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary-accent to-[#6b2fa0] flex items-center justify-center shrink-0">
          <Sparkles size={10} className="text-white" />
        </div>
      </div>
      <p className="text-[#9CA3AF] text-[10px] text-center">
        Replied automatically in 1.8 seconds
      </p>
    </div>
  );
}

function PhotoManager() {
  return (
    <div className="bg-base-bg/60 rounded-xl p-3 mt-3">
      <div className="border border-dashed border-primary-accent/30 rounded-xl p-3 mb-2 flex flex-col items-center gap-1 bg-primary-accent/3 hover:bg-primary-accent/6 transition-colors cursor-pointer">
        <Upload size={14} className="text-primary-accent" />
        <p className="text-white text-xs font-medium">Drop photos here</p>
        <p className="text-[#9CA3AF] text-[10px]">JPG, PNG, WEBP · max 5MB</p>
      </div>
      <div className="bg-card-surface/60 rounded-xl p-2.5">
        <div className="flex items-center gap-1.5 mb-2">
          <Pencil size={10} className="text-primary-accent" />
          <span className="text-primary-accent text-[10px] font-semibold">
            AI Post Creator
          </span>
        </div>
        <p className="text-[#9CA3AF] text-[11px] leading-relaxed mb-2">
          "🍕 Weekend special is HERE! Fresh handmade dough, local ingredients,
          and our famous truffle sauce. Come taste the difference!"
        </p>
        <button className="w-full bg-primary-accent text-white text-[11px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1.5">
          <Send size={10} /> Publish Now
        </button>
      </div>
    </div>
  );
}

function ScoreCard() {
  const segments = [
    { label: "Photos", score: 85, color: "#9f57f5" },
    { label: "Reviews", score: 92, color: "#a78bfa" },
    { label: "Posts", score: 70, color: "#7c3aed" },
    { label: "Info", score: 95, color: "#c084fc" },
    { label: "Q&A", score: 60, color: "#8b5cf6" },
  ];
  return (
    <div className="bg-base-bg/60 rounded-xl p-3 mt-3">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-white font-bold text-xl">780</p>
          <p className="text-[#9CA3AF] text-xs">out of 1000</p>
        </div>
        <div className="text-right">
          <span className="bg-amber-500/15 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-500/20">
            Needs Attention
          </span>
        </div>
      </div>
      <div className="space-y-2">
        {segments.map(({ label, score, color }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="text-[#9CA3AF] text-[10px] w-12 shrink-0">
              {label}
            </span>
            <div className="flex-1 bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${score}%`, background: color }}
              />
            </div>
            <span className="text-white text-[10px] font-semibold w-7 text-right">
              {score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Card definitions with updated Section Meta ─── */
const cards = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Google Business Profile Connection",
    desc: "Secure one-click OAuth authorization. Link your GBP in under 60 seconds.",
    widget: <GBPConnect />,
    sectionHeading: "Connect & Synced in Seconds",
    sectionDesc:
      "Say goodbye to complex configurations. Seamlessly integrate your direct Google storefront endpoints safely via authenticated enterprise OAuth mechanics.",
  },
  {
    icon: <BarChart2 size={20} />,
    title: "Google Analytics Dashboard",
    desc: "Live local traffic, click-to-call, and direction requests — all in one view.",
    widget: <AnalyticsDashboard />,
    sectionHeading: "Track Real-Time Performance Data",
    sectionDesc:
      "Understand exactly how your buyers discover your business locations. Gain visibility over actual map views, custom calls, routing requests, and actions on the fly.",
  },
  {
    icon: <MessageSquare size={20} />,
    title: "Auto-Reply to Google Reviews",
    desc: "AI reads each review and crafts a personalized, brand-aligned response instantly.",
    widget: <ReviewAutoReply />,
    sectionHeading: "Automate Reviews Engagement with AI",
    sectionDesc:
      "Boost search algorithm priority. Our lightning-fast text processing constructs engaging, custom contextual outputs tailored explicitly around buyer-sentiments.",
  },
  {
    icon: <Image size={20} />,
    title: "Photo Management & Post Creation",
    desc: "Upload media and let AI write compelling posts optimized for local search.",
    widget: <PhotoManager />,
    sectionHeading: "Dynamic AI Local Media Creation",
    sectionDesc:
      "Transform raw imagery files into fully search-optimized posts loaded with high-ranking regional search tag keywords guaranteed to capture target area interest.",
  },
  {
    icon: <Gauge size={20} />,
    title: "GBP Optimization Score Card",
    desc: "A live score out of 1000 pinpoints exactly what to fix to climb rankings.",
    widget: <ScoreCard />,
    sectionHeading: "Pinpoint SEO Opportunities Quickly",
    sectionDesc:
      "Never operate in blind spots. Run constant audit cross-checks with instant granular breakdowns that deliver simple insights so you rank higher across all local indexes.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-base-bg py-24 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-125 bg-primary-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-2 bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Core Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Everything Your Local Business Needs,{" "}
            <span className="bg-linear-to-r from-primary-accent to-[#c084fc] bg-clip-text text-transparent">
              Automated.
            </span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Five powerful modules working together to dominate your local search
            results.
          </p>
        </motion.div>

        {/* Alternating Feature Sections Container */}
        <div className="space-y-32">
          {cards.map((card, index) => {
            // Alternates direction based on odds or evens index
            const isLeftText = index % 2 === 0;

            return (
              <div
                key={card.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Text Side */}
                <motion.div
                  className={`lg:col-span-5 space-y-4 ${
                    isLeftText ? "lg:order-1" : "lg:order-2 lg:col-start-8"
                  }`}
                  variants={textVariant(isLeftText ? "left" : "right")}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="inline-flex items-center justify-center p-2 rounded-xl bg-primary-accent/10 text-primary-accent border border-primary-accent/20">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {card.sectionHeading}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm lg:text-base leading-relaxed">
                    {card.sectionDesc}
                  </p>
                </motion.div>

                {/* Card Widget Side */}
                <motion.div
                  className={`lg:col-span-6 ${
                    isLeftText ? "lg:order-2 lg:col-start-7" : "lg:order-1"
                  }`}
                  variants={cardVariant(isLeftText ? "right" : "left")}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="bg-card-surface/70 border border-primary-accent/20 rounded-2xl p-6 hover:border-primary-accent/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary-accent/5"
                  >
                    <h4 className="text-white font-bold text-base mb-1">
                      {card.title}
                    </h4>
                    <p className="text-[#9CA3AF] text-xs leading-relaxed">
                      {card.desc}
                    </p>
                    {card.widget}
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   BarChart2,
//   MessageSquare,
//   Image,
//   Gauge,
//   Star,
//   TrendingUp,
//   Phone,
//   MapPin,
//   Upload,
//   Sparkles,
//   Pencil,
//   Send,
// } from "lucide-react";

// const container = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// /* ─── Mini UI widgets for each card ─── */

// function GBPConnect() {
//   return (
//     <div className="bg-base-bg/60 rounded-xl p-3 mt-3">
//       <div className="flex items-center gap-2 mb-3">
//         <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-blue-600">
//           G
//         </div>
//         <span className="text-white text-xs font-semibold">
//           Google Business Profile
//         </span>
//       </div>
//       <p className="text-[#9CA3AF] text-xs mb-3">
//         Milano Bistro wants access to your Google Business account.
//       </p>
//       <div className="flex gap-2">
//         <button className="flex-1 bg-primary-accent text-white text-xs font-semibold py-1.5 rounded-lg">
//           Allow
//         </button>
//         <button className="flex-1 bg-white/5 border border-white/10 text-[#9CA3AF] text-xs py-1.5 rounded-lg">
//           Deny
//         </button>
//       </div>
//       <div className="flex items-center gap-1.5 mt-2">
//         <ShieldCheck size={10} className="text-emerald-400" />
//         <span className="text-emerald-400 text-[10px]">
//           Encrypted OAuth 2.0 · Read & manage access
//         </span>
//       </div>
//     </div>
//   );
// }

// function AnalyticsDashboard() {
//   return (
//     <div className="bg-base-bg/60 rounded-xl p-3 mt-3">
//       <div className="grid grid-cols-3 gap-2 mb-3">
//         {[
//           { icon: <TrendingUp size={12} />, val: "+34%", label: "Visibility" },
//           { icon: <Phone size={12} />, val: "128", label: "Calls" },
//           { icon: <MapPin size={12} />, val: "89", label: "Routes" },
//         ].map(({ icon, val, label }) => (
//           <div
//             key={label}
//             className="bg-card-surface/60 rounded-lg p-2 flex flex-col items-center gap-0.5"
//           >
//             <span className="text-primary-accent">{icon}</span>
//             <span className="text-white font-bold text-xs">{val}</span>
//             <span className="text-[#9CA3AF] text-[10px]">{label}</span>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-end gap-0.5 h-8">
//         {[45, 60, 50, 75, 65, 90, 80, 70, 85, 95, 78, 88].map((h, i) => (
//           <div
//             key={i}
//             className="flex-1 rounded-t-sm bg-linear-to-t from-primary-accent/70 to-primary-accent/20"
//             style={{ height: `${h}%` }}
//           />
//         ))}
//       </div>
//       <p className="text-[#9CA3AF] text-[10px] mt-1 text-center">
//         Last 30 Days · Local Traffic
//       </p>
//     </div>
//   );
// }

// function ReviewAutoReply() {
//   return (
//     <div className="bg-base-bg/60 rounded-xl p-3 mt-3 space-y-2">
//       {/* Customer review */}
//       <div className="flex gap-2 items-start">
//         <div className="w-6 h-6 rounded-full bg-linear-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
//           S
//         </div>
//         <div className="bg-white/5 rounded-xl rounded-tl-none px-3 py-2 flex-1">
//           <div className="flex items-center gap-1 mb-1">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 size={9}
//                 className="fill-amber-400 text-amber-400"
//               />
//             ))}
//           </div>
//           <p className="text-[#9CA3AF] text-[11px] leading-relaxed">
//             "Absolutely love this place! The pasta is incredible and staff are
//             so friendly."
//           </p>
//         </div>
//       </div>

//       {/* AI Reply */}
//       <div className="flex gap-2 items-start justify-end">
//         <div className="bg-primary-accent/15 border border-primary-accent/20 rounded-xl rounded-tr-none px-3 py-2 max-w-[85%]">
//           <div className="flex items-center gap-1 mb-1">
//             <Sparkles size={10} className="text-primary-accent" />
//             <span className="text-primary-accent text-[10px] font-semibold">
//               AI Reply
//             </span>
//           </div>
//           <p className="text-[#9CA3AF] text-[11px] leading-relaxed">
//             "Thank you so much, Sarah! We're thrilled you loved the pasta. Can't
//             wait to welcome you back! 🍝"
//           </p>
//         </div>
//         <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#9f57f5] to-[#6b2fa0] flex items-center justify-center shrink-0">
//           <Sparkles size={10} className="text-white" />
//         </div>
//       </div>
//       <p className="text-[#9CA3AF] text-[10px] text-center">
//         Replied automatically in 1.8 seconds
//       </p>
//     </div>
//   );
// }

// function PhotoManager() {
//   return (
//     <div className="bg-base-bg/60 rounded-xl p-3 mt-3">
//       {/* Upload zone */}
//       <div className="border border-dashed border-primary-accent/30 rounded-xl p-3 mb-2 flex flex-col items-center gap-1 bg-primary-accent/3 hover:bg-primary-accent/6 transition-colors cursor-pointer">
//         <Upload size={14} className="text-primary-accent" />
//         <p className="text-white text-xs font-medium">Drop photos here</p>
//         <p className="text-[#9CA3AF] text-[10px]">JPG, PNG, WEBP · max 5MB</p>
//       </div>
//       {/* Post creator */}
//       <div className="bg-card-surface/60 rounded-xl p-2.5">
//         <div className="flex items-center gap-1.5 mb-2">
//           <Pencil size={10} className="text-primary-accent" />
//           <span className="text-primary-accent text-[10px] font-semibold">
//             AI Post Creator
//           </span>
//         </div>
//         <p className="text-[#9CA3AF] text-[11px] leading-relaxed mb-2">
//           "🍕 Weekend special is HERE! Fresh handmade dough, local ingredients,
//           and our famous truffle sauce. Come taste the difference!"
//         </p>
//         <button className="w-full bg-primary-accent text-white text-[11px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1.5">
//           <Send size={10} /> Publish Now
//         </button>
//       </div>
//     </div>
//   );
// }

// function ScoreCard() {
//   const segments = [
//     { label: "Photos", score: 85, color: "#9f57f5" },
//     { label: "Reviews", score: 92, color: "#a78bfa" },
//     { label: "Posts", score: 70, color: "#7c3aed" },
//     { label: "Info", score: 95, color: "#c084fc" },
//     { label: "Q&A", score: 60, color: "#8b5cf6" },
//   ];
//   return (
//     <div className="bg-base-bg/60 rounded-xl p-3 mt-3">
//       <div className="flex items-center justify-between mb-3">
//         <div>
//           <p className="text-white font-bold text-xl">780</p>
//           <p className="text-[#9CA3AF] text-xs">out of 1000</p>
//         </div>
//         <div className="text-right">
//           <span className="bg-amber-500/15 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-500/20">
//             Needs Attention
//           </span>
//         </div>
//       </div>
//       <div className="space-y-2">
//         {segments.map(({ label, score, color }) => (
//           <div key={label} className="flex items-center gap-2">
//             <span className="text-[#9CA3AF] text-[10px] w-12 shrink-0">
//               {label}
//             </span>
//             <div className="flex-1 bg-white/5 rounded-full h-1.5 overflow-hidden">
//               <div
//                 className="h-full rounded-full"
//                 style={{ width: `${score}%`, background: color }}
//               />
//             </div>
//             <span className="text-white text-[10px] font-semibold w-7 text-right">
//               {score}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ─── Card definitions ─── */
// const cards = [
//   {
//     icon: <ShieldCheck size={20} />,
//     title: "Google Business Profile Connection",
//     desc: "Secure one-click OAuth authorization. Link your GBP in under 60 seconds.",
//     widget: <GBPConnect />,
//     wide: false,
//   },
//   {
//     icon: <BarChart2 size={20} />,
//     title: "Google Analytics Dashboard",
//     desc: "Live local traffic, click-to-call, and direction requests — all in one view.",
//     widget: <AnalyticsDashboard />,
//     wide: false,
//   },
//   {
//     icon: <MessageSquare size={20} />,
//     title: "Auto-Reply to Google Reviews",
//     desc: "AI reads each review and crafts a personalized, brand-aligned response instantly.",
//     widget: <ReviewAutoReply />,
//     wide: true,
//   },
//   {
//     icon: <Image size={20} />,
//     title: "Photo Management & Post Creation",
//     desc: "Upload media and let AI write compelling posts optimized for local search.",
//     widget: <PhotoManager />,
//     wide: false,
//   },
//   {
//     icon: <Gauge size={20} />,
//     title: "GBP Optimization Score Card",
//     desc: "A live score out of 1000 pinpoints exactly what to fix to climb rankings.",
//     widget: <ScoreCard />,
//     wide: false,
//   },
// ];

// export default function Features() {
//   return (
//     <section
//       id="features"
//       className="bg-base-bg py-24 relative overflow-hidden"
//     >
//       {/* Background accent */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-125 bg-primary-accent/5 rounded-full blur-[140px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-flex items-center gap-2 bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-semibold px-4 py-2 rounded-full mb-5">
//             Core Services
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
//             Everything Your Local Business Needs,{" "}
//             <span className="bg-linear-to-r from-primary-accent to-[#c084fc] bg-clip-text text-transparent">
//               Automated.
//             </span>
//           </h2>
//           <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
//             Five powerful modules working together to dominate your local search
//             results.
//           </p>
//         </motion.div>

//         {/* Bento grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-80px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
//         >
//           {cards.map((card) => (
//             <motion.div
//               key={card.title}
//               variants={item}
//               whileHover={{ scale: 1.03, y: -4 }}
//               transition={{ type: "spring", stiffness: 3000, damping: 300 }}
//               className={`bg-card-surface/70 border border-primary-accent/20 rounded-2xl p-5 flex flex-col hover:border-primary-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary-accent/10 ${
//                 card.wide ? "md:col-span-2 lg:col-span-1" : ""
//               }`}
//             >
//               {/* Icon */}
//               <div className="w-10 h-10 rounded-xl bg-primary-accent/15 border border-primary-accent/25 flex items-center justify-center text-primary-accent mb-3">
//                 {card.icon}
//               </div>
//               <h3 className="text-white font-bold text-sm mb-1">
//                 {card.title}
//               </h3>
//               <p className="text-[#9CA3AF] text-xs leading-relaxed">
//                 {card.desc}
//               </p>
//               {card.widget}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
