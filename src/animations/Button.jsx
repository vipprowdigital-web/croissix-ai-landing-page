// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function Button({ text }) {
//   return (
//     <motion.button
//       initial="initial"
//       whileHover="hover" // Broadcasts hover state to all children
//       whileTap={{ scale: 0.97 }}
//       className="group relative flex items-center justify-center gap-2 bg-primary-accent text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-primary-accent/30 text-sm capitalize overflow-hidden"
//     >
//       {/* 1. The Morphing Color Fill Layer */}
//       <motion.div
//         variants={{
//           initial: {
//             width: "0%",
//             height: "0%",
//             x: "-50%",
//             y: "0%",
//             borderRadius: "100% 100% 100% 100%", // Arched bubble shape at the start
//           },
//           hover: {
//             width: "100%",
//             height: "350%",
//             x: "-50%",
//             y: "0%",
//             borderRadius: "0%", // flattens out as it fills the frame
//             transition: {
//               duration: 0.7,
//               ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for a smooth fluid pop
//             },
//           },
//         }}
//         // Anchor it perfectly to the bottom center line
//         className="absolute left-1/2 bottom-0 bg-base-bg z-0 pointer-events-none origin-bottom"
//       />

//       {/* 2. Main Button Text Layer */}
//       <span className="relative z-10 flex items-center gap-2 group-hover:text-primary-accent transition-colors duration-300">
//         {text}
//       </span>

//       {/* 3. The Sequential Arrow */}
//       <div className="relative z-10 overflow-hidden w-0 group-hover:w-4 transition-all duration-300 ease-out flex items-center">
//         <motion.div
//           variants={{
//             initial: { x: -15, opacity: 0 },
//             hover: {
//               x: 0,
//               opacity: 1,
//               transition: {
//                 delay: 0.18, // Delayed slightly so it aligns with the filling liquid curve
//                 duration: 0.25,
//                 ease: "easeOut",
//               },
//             },
//           }}
//           className="shrink-0"
//         >
//           <ArrowRight size={16} className="text-primary-accent ml-1" />
//         </motion.div>
//       </div>
//     </motion.button>
//   );
// }
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function Button({ text }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <motion.button
        initial="initial"
        whileHover="hover" // Broadcasts hover state to all children
        whileTap={{ scale: 0.97 }}
        className="group relative flex items-center justify-center gap-2 bg-primary-accent text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-primary-accent/30 text-sm capitalize overflow-hidden"
        onClick={() => setIsModalOpen(true)}
      >
        {/* 1. The Morphing Color Fill Layer */}
        <motion.div
          variants={{
            initial: {
              width: "0%",
              height: "0%",
              x: "-50%",
              y: "0%",
              borderRadius: "100% 100% 100% 100%", // Arched bubble shape at the start
            },
            hover: {
              width: "100%", // Increased to 300% so it covers your button width fully when morphing from center
              height: "350%",
              x: "-50%",
              y: "0%",
              borderRadius: "0%", // flattens out as it fills the frame
              transition: {
                duration: 0.7,
                ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for a smooth fluid pop
              },
            },
          }}
          // Anchor it perfectly to the bottom center line
          className="absolute left-1/2 bottom-0 bg-base-bg z-0 pointer-events-none origin-bottom"
        />

        {/* 2. Main Button Text Layer (Added group-active state) */}
        <span className="relative z-10 flex items-center gap-2 group-hover:text-primary-accent group-active:text-primary-accent transition-colors duration-300">
          {text}
        </span>

        {/* 3. The Sequential Arrow (Added group-active state to keep it open on click) */}
        <div className="relative z-10 overflow-hidden w-0 group-hover:w-4 group-active:w-4 transition-all duration-300 ease-out flex items-center">
          <motion.div
            variants={{
              initial: { x: -15, opacity: 0 },
              hover: {
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.18, // Delayed slightly so it aligns with the filling liquid curve
                  duration: 0.25,
                  ease: "easeOut",
                },
              },
            }}
            className="shrink-0"
          >
            <ArrowRight size={16} className="text-primary-accent ml-1" />
          </motion.div>
        </div>
      </motion.button>
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
