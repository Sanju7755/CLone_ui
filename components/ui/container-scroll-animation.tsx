"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { BorderBeam } from "./border-beam"; 

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  // Monitor screen size
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]; // Adjust scaling based on screen size
  };

  // Apply scroll-based transforms
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px", // Set perspective to create 3D effect
        }}
      >
        {/* Render Card and attach BorderBeam */}
        <Card rotate={rotate} translate={translate} scale={scale}>
          <BorderBeam
            size={200} // Adjust size as necessary to match card dimensions
            duration={15} // Adjust speed of border movement
            colorFrom="#ffaa40"
            colorTo="#9c40ff"
            borderWidth={1.5}
          />
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // Apply 3D rotation
        scale, // Apply scaling transform
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full relative" // Card sizing
    >
      <div className="h-full w-full overflow-hidden rounded-2xl md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};
