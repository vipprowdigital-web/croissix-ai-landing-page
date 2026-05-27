import { motion } from "framer-motion";
import {
  ShieldCheck,
  Info,
  Database,
  Image as ImageIcon,
  CreditCard,
  Eye,
  Lock,
  UserCheck,
  Mail,
  GlobeIcon,
} from "lucide-react";

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

export default function PrivacyPolicy() {
  return (
    <section
      className="bg-base-bg text-[#9CA3AF] py-24 relative overflow-hidden min-h-screen"
      id="privacy-policy"
    >
      {/* Decorative background accent grids */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-125 bg-primary-accent/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#c084fc]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 border-b border-primary-accent/10 pb-10"
        >
          <span className="inline-flex items-center gap-2 bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-semibold px-4 py-2 rounded-full mb-5">
            <Lock size={12} /> Legal Documentation
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#9CA3AF]">
            Effective Date:{" "}
            <span className="text-white font-medium">2nd May 2026</span>
          </p>
        </motion.div>

        {/* Content Modules */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-12"
        >
          {/* 1. Introduction */}
          <motion.div
            variants={itemVariants}
            className="bg-card-surface/40 border border-primary-accent/10 rounded-2xl p-6 lg:p-8 space-y-4"
          >
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <span className="text-primary-accent">
                <Info size={22} />
              </span>
              <h2>1. Introduction</h2>
            </div>
            <p className="leading-relaxed text-sm lg:text-base">
              Welcome to Croissix, a product of Vipprow (“Company”, “we”, “our”,
              or “us”). Croissix is an AI-powered digital marketing and business
              automation platform designed to help businesses manage marketing,
              leads, content, and customer engagement efficiently.
            </p>
            <p className="leading-relaxed text-sm lg:text-base">
              We are committed to protecting your privacy and ensuring that your
              personal data is handled in a safe, transparent, and responsible
              manner in accordance with applicable laws and Google Play
              Developer Policies.
            </p>
            <p className="leading-relaxed text-sm lg:text-base">
              By using our application, you agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </motion.div>

          {/* 2. Information We Collect */}
          <motion.div
            variants={itemVariants}
            className="bg-card-surface/40 border border-primary-accent/10 rounded-2xl p-6 lg:p-8 space-y-6"
          >
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <span className="text-primary-accent">
                <Database size={22} />
              </span>
              <h2>2. Information We Collect</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
                  2.1 Personal Information
                </h3>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Full Name</li>
                  <li>Phone Number</li>
                  <li>Email Address</li>
                  <li>Business/Company Details</li>
                  <li>Location (if provided by user)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-sm tracking-wide uppercase text-primary-accent/90">
                  2.2 Usage & Technical Data
                </h3>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Device type and model</li>
                  <li>Operating system version</li>
                  <li>App usage behavior</li>
                  <li>Crash logs and diagnostics</li>
                  <li>IP address (for security & analytics)</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold text-base">
                <ImageIcon size={18} className="text-primary-accent" />
                <h3>2.3 Media & File Access (Photos/Videos)</h3>
              </div>
              <p className="text-sm">
                Croissix may request access to your device’s gallery for:
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-sm pl-2">
                <li>Uploading images or videos within the app</li>
                <li>Creating marketing posts</li>
                <li>
                  Publishing content on platforms like Google Business or social
                  media
                </li>
              </ul>
            </div>

            {/* Custom Highlight Panel */}
            <div className="bg-primary-accent/5 border border-primary-accent/20 rounded-xl p-4 mt-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Important Clarifications:</span>
              </div>
              <ul className="space-y-1.5 text-xs lg:text-sm text-[#9CA3AF] list-disc list-inside pl-1">
                <li>
                  We do <span className="text-white font-medium">NOT</span>{" "}
                  access your media without your permission
                </li>
                <li>
                  We do <span className="text-white font-medium">NOT</span> scan
                  or store your gallery data in bulk
                </li>
                <li>Access is only used when you explicitly upload content</li>
              </ul>
            </div>
          </motion.div>

          {/* 3. Payments & Financial Information */}
          <motion.div
            variants={itemVariants}
            className="bg-card-surface/40 border border-primary-accent/10 rounded-2xl p-6 lg:p-8 space-y-4"
          >
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <span className="text-primary-accent">
                <CreditCard size={22} />
              </span>
              <h2>3. Payments & Financial Information</h2>
            </div>
            <p className="text-sm lg:text-base">
              Croissix enables payments via Razorpay, a trusted third-party
              payment gateway.
            </p>
            <ul className="space-y-2 list-disc list-inside text-sm">
              <li>
                We do <span className="text-white font-medium">NOT</span> store
                credit/debit card details
              </li>
              <li>
                We do <span className="text-white font-medium">NOT</span> store
                UPI or bank information
              </li>
              <li>All transactions are processed securely via Razorpay</li>
            </ul>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs italic text-center">
              Users are advised to review Razorpay’s Privacy Policy for more
              details.
            </div>
          </motion.div>

          {/* 4 & 5. Combined Strategy Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 4. How We Use Info */}
            <motion.div
              variants={itemVariants}
              className="bg-card-surface/40 border border-primary-accent/10 rounded-2xl p-6 space-y-3"
            >
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-4 bg-primary-accent rounded-full inline-block" />
                4. How We Use Your Information
              </h2>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>Provide and maintain app functionality</li>
                <li>Manage user accounts</li>
                <li>Enable content uploads</li>
                <li>Process payments</li>
                <li>Improve performance and experience</li>
                <li>Send notifications and support communication</li>
              </ul>
              <div className="text-emerald-400 font-semibold text-xs pt-2">
                ✓ We do NOT sell, rent, or misuse your personal data.
              </div>
            </motion.div>

            {/* 5. Permissions We Request */}
            <motion.div
              variants={itemVariants}
              className="bg-card-surface/40 border border-primary-accent/10 rounded-2xl p-6 space-y-3"
            >
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#c084fc] rounded-full inline-block" />
                5. Permissions We Request
              </h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-white block">
                    Storage / Media Access:
                  </strong>
                  For uploading images/videos
                </li>
                <li>
                  <strong className="text-white block">Internet Access:</strong>
                  App functionality, syncing, payments
                </li>
                <li>
                  <strong className="text-white block">
                    Notifications (Optional):
                  </strong>
                  Alerts and updates
                </li>
              </ul>
            </motion.div>
          </div>

          {/* 6, 7 & 8. Data Management Row */}
          <motion.div
            variants={itemVariants}
            className="bg-card-surface/40 border border-primary-accent/10 rounded-2xl p-6 lg:p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="text-white font-bold text-base">
                  6. Data Sharing
                </h3>
                <p className="text-xs leading-relaxed">
                  We share data with payment processors (Razorpay), secure cloud
                  hosting infrastructure, and compliance services only when
                  legally required.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-bold text-base">
                  7. Data Retention
                </h3>
                <p className="text-xs leading-relaxed">
                  We retain your credentials only as long as necessary for
                  active business services and legal operations. Users can
                  trigger deletion loops anytime.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-bold text-base">
                  8. Data Security
                </h3>
                <p className="text-xs leading-relaxed">
                  Protected via continuous architecture encryption models,
                  secure servers, and absolute restricted hardware access
                  mechanics.
                </p>
              </div>
            </div>
            <div className="bg-primary-accent/5 border border-primary-accent/10 text-center rounded-xl py-2 text-xs">
              We never sell your personal data to malicious advertising third
              parties.
            </div>
          </motion.div>

          {/* 9 & 10 User Rights & Assets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-card-surface/40 border border-primary-accent/10 rounded-2xl p-6 space-y-3"
            >
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                <Eye size={18} className="text-primary-accent" /> 9. User Rights
                & Control
              </h2>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>Access your encrypted data files</li>
                <li>Update or correct active records</li>
                <li>Request absolute account deletion</li>
                <li>Withdraw system permission parameters</li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card-surface/40 border border-primary-accent/10 rounded-2xl p-6 space-y-3"
            >
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                <UserCheck size={18} className="text-[#c084fc]" /> 10.
                Third-Party Links
              </h2>
              <p className="text-sm leading-relaxed">
                Croissix endpoints integrate natively with secure Google
                micro-services, payment tokens, and usage metrics algorithms.
                These operate strictly under their respective standalone policy
                wrappers.
              </p>
            </motion.div>
          </div>

          {/* 11 & 12 Children and Compliance */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2 p-2">
              <h3 className="text-white font-bold text-base">
                11. Children’s Privacy
              </h3>
              <p className="text-sm leading-relaxed">
                Croissix is optimized for enterprise management and not
                configured for audiences below 13. We do not knowingly hold
                under-age pipeline telemetry logs.
              </p>
            </div>
            <div className="space-y-2 p-2 bg-white/5 rounded-xl border border-white/5">
              <h3 className="text-white font-bold text-base">
                12. Google Play Compliance
              </h3>
              <p className="text-xs leading-relaxed text-slate-400">
                Transparent pipeline data visibility · Strategic restricted
                permission scopes · Zero undocumented target tracking layers ·
                Complete compliance mapping parameters.
              </p>
            </div>
          </motion.div>

          {/* 13. Changes to Policy */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-6 border-t border-white/5 text-sm"
          >
            <p>
              <span className="text-white font-medium">
                13. Policy Revisions:
              </span>{" "}
              We update these parameters systematically. Critical structural
              variations will reflect proactively via clear inside-app banner
              warnings.
            </p>
          </motion.div>
        </motion.div>

        {/* 14. Modernized Footer / Contact Details */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-primary-accent/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="space-y-1">
            <p className="text-white font-extrabold text-lg tracking-wide bg-linear-to-r from-primary-accent to-[#c084fc] bg-clip-text">
              Vipprow
            </p>
            <p className="text-xs text-[#9CA3AF]">
              © 2026 Vipprow. All platform assets protected.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-xs">
            <a
              href="mailto:vipprowdigital@gmail.com"
              className="flex items-center gap-2 bg-card-surface border border-white/10 hover:border-primary-accent/40 rounded-xl px-4 py-2.5 text-white transition-all duration-300"
            >
              <Mail size={12} className="text-primary-accent" />
              <span>vipprowdigital@gmail.com</span>
            </a>
            <a
              href="https://vipprow.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-card-surface border border-white/10 hover:border-primary-accent/40 rounded-xl px-4 py-2.5 text-white transition-all duration-300"
            >
              <GlobeIcon size={12} className="text-[#c084fc]" />
              <span>www.vipprow.com</span>
            </a>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
