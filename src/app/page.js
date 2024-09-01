"use client";

import Cards from "./cards";
import { useRef, useEffect, useState } from "react";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { gsap } from "gsap";

ScrollMagicPluginGsap(ScrollMagic, gsap);

export default function Home() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const browserWindow = window.innerWidth;
    const containerWidth = containerRef.current.scrollWidth;
    if (!isMobile) {
      const controller = new ScrollMagic.Controller();
      const horizontalScrollTween = gsap.to(containerRef.current, {
        x: -(containerWidth - browserWindow) - 100,
        ease: "ease-in-out",
      });

      const scene1 = new ScrollMagic.Scene({
        triggerElement: containerRef.current,
        triggerHook: "onLeave",
        duration: containerWidth,
      })
        .setTween(horizontalScrollTween)
        .setPin(containerRef.current)
        .addTo(controller);

      return () => {
        controller.destroy(true);
      };
    }
  }, [isMobile]);

  return (
    <main
      ref={containerRef}
      id="container"
      className="flex min-h-screen w-[100%] flex-col sm:flex-row items-center sm:items-end justify-between pl-0 pt-0 sm:pl-24 sm:pt-24"
    >
      <Cards />
    </main>
  );
}
