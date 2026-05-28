import { motion } from "framer-motion";
import { Sparkles, Target, Layers, Cpu, Rocket } from "lucide-react";
import SpotlightText from "../animations/SpotlightText";
import Button from "../animations/Button";

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function About() {
  const milestones = [
    {
      year: "The Spark",
      title: "Recognizing the Local Gap",
      desc: "Croissix AI was born out of a simple observation: while enterprise brands had armies of SEO agencies, local businesses were drowning in complex dashboard configurations just to keep their Google presence alive.",
    },
    {
      year: "The Code",
      title: "Building Autonomous Workflows",
      desc: "We engineered an intelligence layer capable of real-time multi-endpoint sync, semantic sentiment parsing for automated review management, and high-ranking regional keyword optimization mechanics.",
    },
    {
      year: "The Impact",
      title: "Empowering Local Storefronts",
      desc: "Today, thousands of local operations—from urban bistros to regional service providers—rely on our autonomous five-module ecosystem to continuously dominate regional map-packs and hyper-local search indexes.",
    },
  ];

  const values = [
    {
      icon: <Cpu size={20} />,
      title: "Autonomous Execution",
      desc: "We don't build standard tracking tools; we construct self-driving operations. If an AI can safely handle local sync and image optimization in 1.8 seconds, humans shouldn't have to spend hours on it.",
    },
    {
      icon: <Target size={20} />,
      title: "Hyper-Local Priority",
      desc: "Search algorithms look for proximity, velocity, and real-time community engagement. Every core line of our code is micro-targeted to optimize your localized proximity footprint.",
    },
    {
      icon: <Layers size={20} />,
      title: "Enterprise Security Architecture",
      desc: "We value zero-trust connectivity. Using encrypted OAuth 2.0 access loops, we manage sensitive local business storefront endpoints safely without compromising credentials.",
    },
  ];

  return (
    <section className="bg-base-bg py-24 relative overflow-hidden">
      {/* Aesthetic Cyber Ambient Glow Elements */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-primary-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-96 h-96 bg-[#c084fc]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ─── SECTION HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center sm:my-24 my-18"
        >
          <span className="inline-flex items-center gap-2 bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Our Mission
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            <SpotlightText text="Bridging the Divide Between Local Intent &" />{" "}
            <span className="bg-linear-to-r from-primary-accent to-[#c084fc] bg-clip-text text-transparent">
              Autonomous AI.
            </span>
          </h2>
          <p className="text-[#9CA3AF] text-md max-w-3xl mx-auto leading-relaxed">
            Croissix AI builds zero-friction infrastructure that puts local
            physical businesses on autopilot, turning regional map rankings into
            an exact, predictable engineering formula.
          </p>
        </motion.div>

        {/* ─── DYNAMIC VISION STATEMENT GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-2 rounded-xl bg-primary-accent/10 text-primary-accent border border-primary-accent/20">
              <Sparkles size={20} />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              The Evolution of Map-Pack Dominance
            </h3>
            <p className="text-[#9CA3AF] text-sm lg:text-base leading-relaxed">
              In modern retail, real estate isn't just physical—it's
              algorithmic. If your business location doesn’t show up in the top
              three localized query placements, you simply do not exist to
              mobile consumers.
            </p>
            <p className="text-[#9CA3AF] text-sm lg:text-base leading-relaxed">
              We engineered{" "}
              <span className="bg-primary-accent text-white font-bold mx-2 px-3 py-0.5">
                {" "}
                Croissix AI{" "}
              </span>{" "}
              to level the playing field. By offloading review replies,
              algorithmic photo updates, metadata optimizations, and traffic
              audits onto specialized, lightning-fast automation frameworks, we
              scale your visibility without scaling your workload.
            </p>
          </motion.div>

          {/* Vision Interactive Box Element */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card-surface/40 border border-primary-accent/20 rounded-2xl p-5 sm:p-8 relative overflow-hidden backdrop-blur-md group hover:border-primary-accent/40 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Rocket size={80} className="text-primary-accent" />
              </div>
              <p className="text-white text-md font-medium font-display mb-4">
                "Our north star is removing human operational friction from the
                local visibility cycle entirely."
              </p>
              <div className="h-px bg-linear-to-r from-primary-accent/40 to-transparent my-4" />
              <div className="flex gap-8">
                <div>
                  <h5 className="text-2xl font-bold text-white">1.8s</h5>
                  <p className="text-[#9CA3AF] text-xs">
                    Avg. AI Review Reaction Time
                  </p>
                </div>
                <div>
                  <h5 className="text-2xl font-bold text-white">100%</h5>
                  <p className="text-[#9CA3AF] text-xs">
                    OAuth Secured Data Routing
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── VALUE MATRIX (3-COLUMN BENTO BLOCKS) ─── */}
        <div className="mb-15 sm:mb-32">
          <div className="text-center lg:text-left mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Our Core Architectures
            </h3>
            <p className="text-[#9CA3AF] text-sm">
              The foundational pillars backing the Croissix engine ecosystem.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="bg-card-surface/70 border border-primary-accent/20 rounded-2xl p-6 hover:border-primary-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary-accent/15 border border-primary-accent/25 flex items-center justify-center text-primary-accent mb-4">
                    {val.icon}
                  </div>
                  <h4 className="text-white font-bold text-base mb-2">
                    {val.title}
                  </h4>
                  <p className="text-[#9CA3AF] text-xs lg:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ─── PROGRESSIVE CHRONOLOGY LINE ─── */}
        <div className="border-t border-primary-accent/10 sm:pt-24 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase font-bold tracking-widest text-primary-accent">
                Trajectory
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mt-2">
                How We Built The Future of Local Search
              </h3>
              <p className="text-[#9CA3AF] text-sm mt-3 leading-relaxed">
                We started by solving the hardest engineering problems inside
                local OAuth directories first, paving the path towards hands-off
                hyper-local visibility growth.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-card-surface">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative pl-12 group">
                  {/* Glowing Node Marker */}
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-base-bg border-2 border-primary-accent group-hover:bg-primary-accent transition-colors duration-300 shadow-[0_0_8px_rgba(159,87,245,0.8)]" />

                  <span className="text-xs font-bold font-display text-primary-accent bg-primary-accent/10 px-2.5 py-1 rounded-md border border-primary-accent/25">
                    {milestone.year}
                  </span>
                  <h4 className="text-white font-bold text-lg mt-3 mb-1">
                    {milestone.title}
                  </h4>
                  <p className="text-[#9CA3AF] text-xs lg:text-sm leading-relaxed max-w-2xl">
                    {milestone.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── FINAL CTA MODULE ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-6 sm:p-8 lg:p-12 bg-linear-to-br from-card-surface/80 to-base-bg border border-primary-accent/30 rounded-3xl text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary-accent/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white sm:mb-4 mb-1 tracking-tight">
            Ready to Put Your Local Visibility on Autopilot?
          </h3>
          <p className="text-[#9CA3AF] text-sm lg:text-base max-w-xl mx-auto sm:mb-8 mb-5">
            Deploy our five core modular workflows to automatically connect,
            capture, audit, and dominate your regional footprint maps.
          </p>
          <div className="inline-flex">
            <Button text="Initialize Your Dashboard" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
