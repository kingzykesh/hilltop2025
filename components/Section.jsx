"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EmblaCarousel } from "./Carousel/Carousel";

export default function ChurchPhotoPage() {
  const [imageVisible, setImageVisible] = useState(false);
  const [hashtagsCopied, setHashtagsCopied] = useState(false);

  const hashtags = "#watchmanportharcourt #hiltopencounters2025 #hosanna #louditlikehosanna #hilltopencounters #watchmancampus #iamliveathilltopencounters2025";

  const copyHashtags = () => {
    navigator.clipboard.writeText(hashtags);
    setHashtagsCopied(true);
  };

  return (
    <div className="main-div">
      {/* Title */}
      
      <EmblaCarousel />

      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Share Your <span className="">Beautiful Moments</span>
      </motion.h1>

      {/* Reveal Image Button */}
      {/* {!imageVisible && ( */}
        {/* <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,255,255,0.8)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setImageVisible(true)}
          className="bg-white text-black font-semibold px-6 py-3 rounded-full mb-6 transition-all"
        >
          Click to view me
        </motion.button> */}
      {/* )} */}

      {/* Image Reveal */}
      {/* <AnimatePresence>
        {imageVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          > */}
            {/* Replace with your image */}
            {/* <img
              src="/church-service.jpg"
              alt="Church Service"
              className="rounded-2xl shadow-lg mb-6 max-w-md"
            /> */}

            {/* First Button */}
            {/* {!hashtagsCopied && ( */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.8)" }}
                whileTap={{ scale: 0.95 }}
                onClick={copyHashtags}
                className="bg-white text-black font-semibold px-6 py-3 rounded-full transition-all"
              >
                Click to Copy Hashtags
              </motion.button>
            {/* )} */}

            {/* Second Button (Neon Glow) */}
            {hashtagsCopied && (
              <motion.a
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fweb.facebook.com%2Fshare%2Fr%2F1BBETGQZW6%2F&quote=I%E2%80%99m%20live%20at%20Hilltop%20Encounters%202025%20%E2%80%94%20HOSANNA!%0AThe%20atmosphere%20is%20electrifying%20and%20I%E2%80%99m%20being%20tremendously%20blessed%20already!%0A%0A%23hosanna%20%23watchmancampus%20%23hilltopencounters2025%20%23hte2025"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  boxShadow: [
                    "0 0 10px rgba(255,255,255,0.6)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 40px rgba(255,255,255,1)",
                    "0 0 20px rgba(255,255,255,0.8)",
                  ],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 50px rgba(255,255,255,1)",
                }}
                className="relative bg-white text-black font-semibold px-8 py-3 rounded-full mt-4 overflow-hidden"
              >
                <span className="relative z-10">🚀 Share on Facebook</span>
                {/* Light streak effect */}
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-lightStreak"></span>
              </motion.a>
            )}

      {/* Extra Styles */}
      <style jsx>{`
        @keyframes lightStreak {
          0% {
            left: -100%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }
        .animate-lightStreak {
          animation: lightStreak 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
