// import React from "react";
// import { motion } from "framer-motion";

// const LandingPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
//       {/* Logo */}
//       <motion.img
//         src="/logo.png" // 👈 place your logo in public/ folder with this name
//         alt="IJMSBC Logo"
//         className="w-40 h-40 mb-6 drop-shadow-2xl landing"
//         initial={{ scale: 0, rotate: -180, opacity: 0 }}
//         animate={{ scale: 1, rotate: 0, opacity: 1 }}
//         transition={{ duration: 3, ease: "easeOut" }}
//       />

//       {/* Title */}
//       <motion.h1
//         className="text-4xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-red-400"
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         International Journal Of <br />
//         Management Science And <br />
//         Business Conclave
//       </motion.h1>

//       {/* Subtitle / Tagline */}
//       <motion.p
//         className="mt-6 text-lg md:text-2xl text-gray-200 text-center max-w-2xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//       >
//         A global platform for innovative research in Management, Science, and Business.
//       </motion.p>

//       {/* Button */}
//       <motion.a
//         href="#explore"
//         className="mt-10 px-8 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-400 text-lg font-semibold text-black shadow-xl hover:scale-105 transition-transform"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 1 }}
//       >
//         Explore Journal
//       </motion.a>
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.5 }} // start fading out before 4s
    >
      {/* Logo */}
      <motion.img
        src="/logo.png"
        alt="IJMSBC Logo"
        className="w-40 h-40 mb-6 drop-shadow-2xl landing"
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-red-400"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        International Journal Of <br />
        Management Science And <br />
        Business Conclave
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-lg md:text-2xl text-gray-200 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        A global platform for innovative research in Management, Science, and Business.
      </motion.p>

      {/* Button */}
      <motion.a
        href="#explore"
        className="mt-10 px-8 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-400 text-lg font-semibold text-black shadow-xl hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Explore Journal
      </motion.a>
    </motion.div>
  );
};

export default LandingPage;
