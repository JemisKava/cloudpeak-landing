import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <main className="relative min-h-screen bg-[#0B0F1F] text-white overflow-hidden">
      {/* SVG Background (bottom layer) */}
      <div className="absolute inset-0 z-0 mt-32">
        <Image
          src="/assets/water-drop.svg"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main content (top layer) */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-8 pt-16 relative z-20">
        {/* Notification chip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-[#161B33]/60 border border-[#1c244c] inline-block rounded-full px-6 py-2 shadow-lg backdrop-blur-sm"
        >
          <p className="text-sm text-gray-300">
            New version available. Download now!
          </p>
        </motion.div>
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-[820px] flex flex-col items-center gap-8 text-center"
        >
          <h1 className="text-6xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Elevate Your Business with CloudPeak
          </h1>
          <p className="text-lg text-gray-400 max-w-[600px]">
            Empowering Your Success with Cutting-Edge SaaS Solutions Built for
            Scalability, Efficiency, and Growth.
          </p>

          <button className="px-8 py-4 bg-[#0051FF] hover:bg-[#0045DD] text-white font-medium rounded-lg shadow-lg transition-all group flex items-center gap-2">
            Get Started now
            <Image
              src="/assets/arrow.svg"
              alt="arrow"
              width={16}
              height={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
        {/* Dashboard image */}
        <motion.div
          className="relative w-full max-w-[1000px] mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.div
            className="relative aspect-[12/9] rounded-xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
          >
            <Image
              src="/assets/dashboard.png"
              alt="CloudPeak Dashboard"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>{" "}
      </div>
    </main>
  );
};

export default Hero;
