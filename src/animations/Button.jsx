// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function Button({ text }) {
//   return (
//     <motion.button
//       initial="initial"
//       whileHover="hover" // This broadcasts the "hover" state down to all children automatically
//       whileTap={{ scale: 0.97 }}
//       className="group relative flex items-center justify-center gap-2 bg-primary-accent text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-primary-accent/30 text-sm capitalize overflow-hidden"
//     >
//       {/* 1. The Color Fill Oval Layer */}
//       <motion.div
//         variants={{
//           initial: { y: "105%", x: "-50%" },
//           hover: {
//             y: "0%",
//             x: "-50%",
//             transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
//           },
//         }}
//         // Large width, pill shape, and scale to create that fluid fluid liquid filling effect
//         className="absolute left-1/2 bottom-0 w-[300%] h-[110%] bg-base-bg z-0 pointer-events-none rounded-t-[50%]"
//       />

//       {/* 2. Main Button Text Layer (Changes color if needed, or stays white) */}
//       <span className="relative z-10 flex items-center gap-2 group-hover:text-primary-accent">
//         {text}
//       </span>

//       {/* 3. The Sequential Arrow from the video */}
//       <div className="relative z-10 overflow-hidden w-0 group-hover:w-4 transition-all duration-300 ease-out flex items-center">
//         <motion.div
//           variants={{
//             initial: { x: -15, opacity: 0 },
//             hover: {
//               x: 0,
//               opacity: 1,
//               transition: {
//                 delay: 0.15,
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
            width: "100%",
            // width: "300%",
            height: "350%", // Tall enough to easily clear the top corners of the button
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

      {/* 2. Main Button Text Layer */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-primary-accent transition-colors duration-300">
        {text}
      </span>

      {/* 3. The Sequential Arrow */}
      <div className="relative z-10 overflow-hidden w-0 group-hover:w-4 transition-all duration-300 ease-out flex items-center">
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
