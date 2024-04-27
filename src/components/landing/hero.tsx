"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ChevronRight } from "lucide-react";


type Props = {}

const Hero = (props: Props) => {
  return (
    
    <div className="w-full  padding-X">
    <HeroHighlight>
      <div className="max-w-screen-xl h-screen mx-auto flex flex-col gap-6 md:gap-8 justify-center items-center ">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="heading1 max-w-[810px] text-center "
      >
        Welcome to Your Personal <span className="text-[#F56565]">Internet Assistant!</span>
      </motion.h1>
        <p className="para max-w-[810px] text-center">Drowning in digital chaos? Get organized & conquer your day with our all-in-one app!</p>
        <button className="border backdrop-blur-sm border-gray-500 border-opacity-50 py-2 px-4 md:py-2 md:px-6 flex justify-center items-center gap-1 hover:gap-2 transition-all ease-in-out duration-200 rounded-full font-semibold tracking-wide hover:border-opacity-70 hover:text-gray-200 "><span>Try for free</span> <span><ChevronRight color="#F56565" size={20} strokeWidth={3} className=""/></span></button>
    </div>
    </HeroHighlight>
    </div>
  )
}

export default Hero;