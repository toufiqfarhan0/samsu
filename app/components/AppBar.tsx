"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
//@ts-ignore
import { Link } from "react-scroll";
import ContactForm from "./contact-form";

export const AppBar = () => {
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
        <Link to="home" className="flex items-center gap-2 cursor-pointer">
          <span className="text-lg font-bold tracking-tight text-foreground">
            Samsu
          </span>
        </Link>

        <div className="flex justify-center items-center gap-4">
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-lg tracking-tight text-foreground hover:text-slate-600">
              Features
            </span>
          </Link>
          <Link
            to="aboutus"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-lg tracking-tight text-foreground hover:text-slate-600">
              About Us
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ContactForm />
        </div>
      </motion.div>
    </nav>
  );
};
