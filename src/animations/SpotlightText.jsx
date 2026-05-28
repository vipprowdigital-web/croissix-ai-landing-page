import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SpotlightText({ text }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw coordinate motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configure high-stiffness spring physics for ultra-snappy tracking
  const springConfig = { stiffness: 450, damping: 28, mass: 0.2 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    // Track cursor location relative to the text element's top-left origin
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <span
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block cursor-pointer select-none"
    >
      {/* The Actual Text */}
      {text}

      {/* The Floating Spotlight Circle */}
      <motion.div
        className="absolute pointer-events-none rounded-full  bg-primary-accent/30 "
        style={{
          width: "180px",
          height: "180px",
          x: circleX,
          y: circleY,
          // Offset the circle by half its width/height so it centers perfectly under the cursor point
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </span>
  );
}

// import { useState } from "react";

// const SpotlightText = ({ text = "Hover Over Me" }) => {
//   const [coords, setCoords] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setCoords({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="relative inline-block px-10 py-5 text-5xl font-black bg-base-bg rounded-xl cursor-pointer overflow-hidden select-none"
//     >
//       {/* 1. Base Dim Text Layer */}
//       <span>{text}</span>

//       {/* 2. Ambient Glow Spotlight Overlay */}
//       <div
//         className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
//           isHovered ? "opacity-100" : "opacity-0"
//         }`}
//         style={{
//           background: `radial-gradient(140px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.15), transparent 100%)`,
//         }}
//       />

//       {/* 3. Illuminated Text Layer (Revealed via CSS Mask) */}
//       <div
//         className={`absolute inset-0 px-10 py-5 text-white pointer-events-none transition-opacity duration-300 ${
//           isHovered ? "opacity-100" : "opacity-0"
//         }`}
//         style={{
//           WebkitMaskImage: `radial-gradient(100px circle at ${coords.x}px ${coords.y}px, black 100%, transparent 100%)`,
//           maskImage: `radial-gradient(100px circle at ${coords.x}px ${coords.y}px, black 100%, transparent 100%)`,
//         }}
//       >
//         {text}
//       </div>
//     </div>
//   );
// };

// export default SpotlightText;
