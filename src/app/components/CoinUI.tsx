/* eslint-disable */

import Image from "next/image";
import React, { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Copy, ExternalLink } from "lucide-react";
import { CustomAlert } from "./Alert";
import { CustomButton } from "./CustomButton";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
    address: string;
    link: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-28 -left-1/2 translate-x-1/2 flex flex-col items-start justify-center rounded-md bg-black z-50 shadow-3xl px-4 py-3 w-84"
              >
                <div className="flex items-center w-full mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-3"
                  />
                  <div className="font-bold text-white text-2xl">{item.designation}</div>
                </div>
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="text-gray-500"></span>
                  <div className="flex items-center">
                    <span className="text-white mr-2">{item.address.slice(0, 10)}...{item.address.slice(-5)}</span>
                    <button onClick={() => copyAddress(item.address)} className="text-gray-500 hover:text-white">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => window.open(item.link, "_blank")}
                  className="w-full bg-gray-800 hover:bg-gray-600 text-white py-2 rounded-md transition-colors text-center"
                >
                  BUY WITH CHEDDAR
                </button>
                <AnimatePresence>
                  {copiedAddress === item.address && (
                    <CustomAlert message="Address copied!" />
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={56}
            width={56}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};