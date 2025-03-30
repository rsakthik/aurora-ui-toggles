"use client";

import React from "react";
import { AuroraBackground } from "./aurora-background";
import { ThemeToggle } from "../theme-toggle";
export function AuroraBackgroundDemo() {
  return <AuroraBackground>
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4 transition-all duration-300 animate-fade-in" style={{
      animation: "fadeIn 0.8s ease-in-out forwards"
    }}>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">Scale Faster with AI</div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">Leverage AI to revolutionize your business</div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 hover:scale-105 transition-transform">Call us for a Free Discovery</button>
      </div>
    </AuroraBackground>;
}