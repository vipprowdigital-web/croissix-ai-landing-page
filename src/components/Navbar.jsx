import { motion } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const links = ["Features", "Metrics", "Upcoming"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#101015]/70 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#9f57f5] to-[#6b2fa0] flex items-center justify-center shadow-lg shadow-[#9f57f5]/20">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Croissix <span className="text-[#9f57f5]">AI</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="relative text-[#9CA3AF] hover:text-white text-sm font-medium transition-colors duration-200 group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#9f57f5] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 bg-[#9f57f5] hover:bg-[#b06ff7] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#9f57f5]/25"
        >
          Get Started
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
          className="md:hidden bg-[#101015]/95 border-t border-white/5 px-6 py-4 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#9CA3AF] hover:text-white text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="bg-[#9f57f5] text-white text-sm font-semibold px-5 py-2.5 rounded-xl w-full">
            Get Started
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
