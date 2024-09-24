/* eslint-disable */

"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CoinToolTip } from "./Headers/Coin";
import Image from "next/image";
import Iphone from "@/app/public/IphoneMockup.png";
import GridBackground from "./GridPatterns/Grid";
import GridBackgroundPlus from "./GridPatterns/PlusGrid";

const textLines = [
  "Lightning Fast Execution",
  "Real-Time Market Data",
  "Intuitive User Interface",
  "Advanced Trading Tools",
  "Secure Transactions",
  "24/7 Customer Support",
  "Unmatched Liquidity",
];

const TextCycler = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textLines.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="h-20">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-customYellow text-2xl md:text-3xl lg:text-4xl font-bold"
        >
          {textLines[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const slap = {
  initial: { opacity: 0, scale: 1.1 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
  viewport: { once: true },
};

function Hero() {
  return (
    <>
      <section className="flex relative flex-col gap-5 justify-center items-center mt-24 max-w-xl md:mt-32 md:max-w-2xl lg:max-w-3xl">
        <motion.h1
          {...{ ...slap, transition: { ...slap.transition, delay: 0.2 } }}
          className="text-center mx-auto bg-[linear-gradient(180deg,_#FFF5E5_0%,_rgba(255,_245,_204,_0.00)_202.08%)] bg-clip-text text-3xl tracking-tighter sm:text-5xl text-transparent md:text-5xl lg:text-6xl"
        >
          Blink Trade{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300">
            & Stack Bags
          </span>{" "}
          With Cheddar
        </motion.h1>
        
        <motion.p
          {...{ ...slap, transition: { ...slap.transition, delay: 0.3 } }}
          className="text-lg text-center text-soft-foreground-text"
        >
          Cheddar is the ultimate financial messenger that lets users connect and trade all in one place. Sign up now to get started.
        </motion.p>

        <div className="p-2">
          <CoinToolTip />
        </div>
        
        <Link
          href="/"
          className="inline-flex text-lg gap-x-2 mt-8 backdrop-blur-md text-black justify-center items-center py-3 px-5 w-fit rounded-3xl border duration-200 group bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 border-white/30 hover:border-zinc-600 hover:bg-transparent/10 hover:text-zinc-100 transition-all"
        >
          Try Now!
          <div className="flex overflow-hidden relative justify-center items-center ml-1 w-5 h-5">
            <ArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
            <ArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
          </div>
        </Link>
      </section>

      <div className="pt-32">
        <div className="relative flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto py-32">
          <GridBackgroundPlus/>
          <div className="md:w-5/12 mb-8 md:mb-0">
            <Image
              src={Iphone}
              alt="Cheddar App Mockup"
              width={400}
              height={800}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="md:w-7/12 md:pl-8">
            <motion.div
              {...{ ...slap, transition: { ...slap.transition, delay: 0.2 } }}
              className="text-center md:text-left"
            >
              <h1 className="bg-[linear-gradient(180deg,_#FFF5E5_0%,_rgba(255,_245,_204,_0.00)_202.08%)] bg-clip-text text-3xl tracking-tighter sm:text-4xl text-transparent md:text-5xl lg:text-6xl mb-4">
                The Future of Trading
              </h1>
              <TextCycler />
              <h2 className="text-transparent font-black bg-clip-text bg-gradient-to-r from-customYellow via-yellow-500 to-orange-600 text-4xl md:text-5xl lg:text-6xl mt-4">
                Trade Smarter, Not Harder
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
