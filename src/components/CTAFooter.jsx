import { motion } from "framer-motion";
import { isValidElement, useState } from "react";
import { Sparkles, Mail, Phone, ArrowUpRight } from "lucide-react";
import Modal from "./Modal";
import PrivacyPolicy from "./PrivacyPolicy";
import Button from "../animations/Button";

function CTABanner() {
  return (
    <section className="relative overflow-hidden py-15 sm:py-28 bg-base-bg">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, #2a0e45 0%, #101015 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#9f57f5 1px, transparent 1px), linear-gradient(90deg, #9f57f5 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary-accent/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-card-surface/60 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-semibold px-4 py-2 rounded-full mb-7 capitalize"
        >
          <Sparkles size={12} />3 - day free trial available
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight leading-[1.1]"
        >
          Take Control of Your{" "}
          <span className="bg-linear-to-r from-primary-accent to-[#c084fc] bg-clip-text text-transparent">
            Local Market.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-[#9CA3AF] text-md mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Claim your Google Business Profile Score today. No commitment. Just
          data-driven clarity on how to rank #1 locally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="flex flex-row justify-center gap-3 max-w-md mx-auto"
        >
          <Button text="Download the App Now" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="text-[#9CA3AF] text-xs mt-4"
        >
          Join 2,400+ local businesses already growing with Croissix AI.
        </motion.p>
      </div>
    </section>
  );
}

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="bg-base-bg border-t border-white/5 py-12">
      {isOpen && (
        <Modal
          title="Privacy Policy"
          component={PrivacyPolicy}
          onClose={() => setIsOpen(false)}
        />
      )}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3 w-22">
              {/* <div className="w-7 h-7 rounded-lg bg-linear-to-br from-primary-accent to-[#6b2fa0] flex items-center justify-center shadow-lg shadow-primary-accent/20">
                <Sparkles size={13} className="text-white" />
              </div> */}
              <img
                src="/croissix-logo.png"
                alt="Croissix Logo"
                className="w-full h-full object-contain rounded-full"
              />
              {/* <p className="text-white font-bold text-base ">
                Croissix <span className="text-primary-accent">AI</span>
              </p> */}
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              AI-powered local marketing automation for businesses that want to
              dominate their neighborhood, not just survive it.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            {[
              [
                "Product",
                [
                  { name: "Features", link: "/features" },
                  { name: "Pricing", link: "/pricing" },
                  { name: "Web Version", link: "https://ai.croissix.com" },
                ],
              ],
              [
                "Company",
                [
                  { name: "About", link: "/about" },
                  // { name: "Website", link: "https://vipprow.com" },
                  // { name: "Portfolio", link: "https://portfolio.vipprow.com" },
                ],
              ],
            ].map(([group, links]) => (
              <div key={group}>
                <p className="text-white font-semibold text-sm mb-3">{group}</p>
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.link}
                    className="block text-[#9CA3AF] hover:text-white text-sm mb-2 transition-colors duration-200"
                    target={link.link.startsWith("https") ? "_blank" : "_self"}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="hidden sm:block">
            <p className="text-white font-semibold text-sm mb-3">
              Our Platform
            </p>
            {[
              {
                name: "Official Website",
                link: "https://vipprow.com",
              },
              {
                name: "Portfolio",
                link: "https://portfolio.vipprow.com",
              },
            ].map((link) => {
              return (
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-[#9CA3AF] hover:text-white text-sm mb-2 transition-colors duration-200"
                >
                  {link.name}
                  <ArrowUpRight
                    size={14}
                    className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              );
            })}
          </div>

          {/* Legal & Social */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Legal</p>
            {["Privacy Policy"].map((l) => (
              <button
                key={l}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(true);
                }}
                className="block text-[#9CA3AF] hover:text-white text-sm mb-2 transition-colors duration-200"
              >
                {l}
              </button>
            ))}

            <div className="flex gap-3 mt-4">
              {[
                {
                  icon: <Phone size={15} />,
                  label: "Phone",
                  link: "tel:9669932121",
                },
                // {
                //   icon: "/instagram-logo-transparent.svg",
                //   label: "Instagram",
                //   link: "",
                // },
                {
                  icon: <Mail size={15} />,
                  label: "Gmail",
                  link: "mailto:vipprowdigital@gmail.com",
                },
              ].map(({ icon, label, link }) => (
                <motion.a
                  key={label}
                  href={link}
                  whileHover={{ scale: 1.1, color: "#9f57f5" }}
                  className="w-8 h-8 bg-card-surface/60 border border-white/10 rounded-lg flex items-center justify-center text-[#9CA3AF] hover:text-primary-accent hover:border-primary-accent/30 transition-all duration-200 hover:rotate-10"
                >
                  {isValidElement(icon) ? (
                    icon
                  ) : (
                    <img
                      src={icon}
                      className="w-6 h-6 dark:invert hover:text-primary-accent"
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#9CA3AF] text-xs">
            © {new Date().getFullYear()} Croissix AI. All rights reserved.
          </p>
          <p className="text-[#9CA3AF] text-xs">
            Built for local business owners who mean business.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function CTAFooter() {
  return (
    <>
      <CTABanner />
      <Footer />
    </>
  );
}
