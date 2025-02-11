"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div className="flex flex-col gap-4 h-[50vh] md:h-[75vh] size-screen mx-auto justify-center">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
          delay: 0.3,
        }}
        initial={{ y: -20, opacity: 0 }}
        className="max-w-7xl mx-auto px-4 flex flex-col gap-4 items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="tracking-tighter text-5xl md:text-6xl xl:text-7xl text-center font-bold my-2">
            <span className="font-bold bg-gradient-to-b from-purple-400 to-purple-700 bg-clip-text text-transparent">
              Samsu
            </span>{" "}
            beckons you into a realm where creativity and commerce intertwine
          </h1>
        </div>
        <p className="text-primary/80 max-w-lg text-center tracking-tight md:text-lg font-light">
          A platform where creators monetize their passion, consumers enjoy
          exclusive content and merchandise, and the digital landscape is
          transformed for the better.
        </p>
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 -z-10" fill="purple"/>
        <ShootingStars />
        <StarsBackground />
      </motion.div>
    </div>
  );
}
