import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
];
const MotionNavLink = motion(NavLink);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.header
        layoutId="global-navbar"
        // initial={{ y: -80, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-base-bg/70 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            {/* <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary-accent to-[#6b2fa0] flex items-center justify-center shadow-lg shadow-primary-accent/20">
            <Sparkles size={16} className="text-white" />
          </div> */}
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/croissix-only-logo.png"
                alt="Croissix Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Croissix <span className="text-primary-accent">AI</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          {/* <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <MotionNavLink
              key={link.name}
              to={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className={`relative text-[#9CA3AF] hover:text-white cursor-pointer text-sm font-bold transition-colors duration-300 group px-3 py-0.5 ${activeLink === link.name ? "text-white bg-primary-accent" : ""}`}
              onClick={() => setActiveLink(link.name)}
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-accent group-hover:w-full transition-all duration-300" />
            </MotionNavLink>
          ))}
        </nav> */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <MotionNavLink
                key={link.name}
                to={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                // Use the built-in active state wrapper function:
                className={({ isActive }) => `
        relative text-[#9CA3AF] hover:text-white cursor-pointer text-sm font-bold transition-colors duration-300 group px-3 py-0.5
        ${isActive ? "text-white bg-primary-accent rounded-md" : ""}
      `}
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-accent group-hover:w-full transition-all duration-300" />
              </MotionNavLink>
            ))}
          </nav>

          {/* CTA */}
          {/* <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 bg-primary-accent hover:bg-primary-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-primary-accent/25"
        >
          Get Started
        </motion.button> */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            // 'overflow-hidden' keeps the rotating light inside the rounded corners
            className="hidden md:flex relative items-center justify-center p-0.5 rounded-xl overflow-hidden shadow-lg shadow-primary-accent/25 transition-all duration-200"
          >
            {/* 1. The Moving Border Element (Rotates infinitely) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 3, // Adjust this number to make the border move faster or slower
              }}
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 40%, #c084fc 80%, var(--color-primary-accent, #9f57f5) 100%)",
              }}
              // Must be a square larger than the button to ensure it clips cleanly on rotation
              className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
            />

            <div
              className="relative z-10 flex items-center gap-2 w-full h-full bg-primary-accent hover:bg-primary-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-[10px] transition-colors duration-200"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </div>
          </motion.button>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#9CA3AF] hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-base-bg/95 border-t border-white/5 px-6 py-4 flex flex-col gap-4"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-[#9CA3AF] hover:text-white text-sm font-medium cursor-pointer transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <button className="bg-primary-accent text-white text-sm font-semibold px-5 py-2.5 rounded-xl w-full">
              Get Started
            </button>
          </motion.div>
        )}
      </motion.header>
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Mask Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)} // Close if user clicks outside on background
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box Frame Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: { type: "spring", duration: 0.5, bounce: 0.3 },
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
                y: 15,
                transition: { duration: 0.2 },
              }}
              className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-base-bg border border-white/10 p-6 text-center shadow-2xl z-10"
            >
              {/* Top Accent Light Glow (Coordinates with your existing theme style) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-primary-accent/20 rounded-full blur-2xl pointer-events-none" />

              {/* Close Top Corner Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#9CA3AF] hover:text-white rounded-lg p-1 hover:bg-white/5 transition-colors duration-200"
              >
                <X size={18} />
              </button>

              {/* Centered Graphic Module Badge */}
              <div className="mx-auto mt-4 mb-4 w-12 h-12 rounded-xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center text-primary-accent shadow-lg shadow-primary-accent/5">
                <Sparkles size={22} className="animate-pulse" />
              </div>

              {/* Main Information Stack Typography */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Coming Soon!
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                We're putting the finishing touches on this feature. It will be
                live for our users shortly!
              </p>

              {/* Action Close Dismissal Anchor Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-primary-accent hover:bg-primary-accent/90 text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                Got it, thanks!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
