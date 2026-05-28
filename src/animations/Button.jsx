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
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Button({ text }) {
  return (
    <motion.button
      initial="initial"
      whileHover="hover" // Broadcasts hover state to all children
      whileTap={{ scale: 0.97 }}
      className="group relative flex items-center justify-center gap-2 bg-primary-accent text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-primary-accent/30 text-sm capitalize overflow-hidden"
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
  );
}
