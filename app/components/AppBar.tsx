"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const AppBar = () => {
  const session = useSession();

  return (
    <nav className="sticky mx-auto wrapper top-0 z-50 flex items-center gap-2 py-6 w-[90vw]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="flex w-full justify-between mx-auto bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border border-primary/10 p-4 rounded-2xl"
      >
        <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
          <span className="text-lg font-bold tracking-tight text-foreground">
            Samsu
          </span>
        </Link>

        <div className="flex justify-center items-center gap-4">
          <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
            <span className="text-lg tracking-tight text-foreground hover:text-slate-600">
              Features
            </span>
          </Link>
          <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
            <span className="text-lg tracking-tight text-foreground hover:text-slate-600">
              About Us
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <Button
            className="h-10 w-30 text-lg bg-gradient-to-b from-purple-400 to-purple-700 text-white hover:from-purple-500 hover:to-purple-800 transition-colors duration-300"
            size={"lg"}
          >
            Let's talk
          </Button>
        </div>
      </motion.div>
    </nav>
  );
};
