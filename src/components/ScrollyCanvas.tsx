"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120; // 0 to 119

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
};

export default function ScrollyCanvas({
  children,
}: {
  children?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // State to hold preloaded images
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  // Use generic object to track drawn info seamlessly
  const drawInfo = useRef({ width: 0, height: 0, loaded: false, lastDrawnIdx: -1 });
  const renderRequestId = useRef<number | null>(null);

  // Preload all images rapidly
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = async () => {
      const imgArray: HTMLImageElement[] = [];
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        imgArray.push(img);

        img.onload = () => {
          loadedCount++;
          if (loadedCount === FRAME_COUNT) {
            setImages(imgArray);
            drawInfo.current.loaded = true;
          }
        };
      }
    };
    preloadImages();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const renderFrameSync = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); // Disable alpha for perf
    if (!ctx) return;

    const img = images[Math.floor(index)];
    if (!img || !img.complete) return;

    const { width, height } = canvas;
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;
    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      drawHeight = height;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    drawInfo.current.lastDrawnIdx = index;
    renderRequestId.current = null;
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (drawInfo.current.loaded) {
      const targetIndex = Math.floor(latest);
      // Only request a frame if the index shifted and isn't already rendering
      if (
        targetIndex !== drawInfo.current.lastDrawnIdx &&
        renderRequestId.current === null
      ) {
        renderRequestId.current = requestAnimationFrame(() =>
          renderFrameSync(targetIndex)
        );
      }
    }
  });

  // Handle Resize optimized
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      // High-DPI canvas fix (optional)
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      if (drawInfo.current.loaded) {
        renderFrameSync(frameIndex.get());
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  useEffect(() => {
    if (images.length === FRAME_COUNT) {
      renderFrameSync(0);
    }
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[400vh] md:h-[500vh] w-full bg-black">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden will-change-transform">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
        />
        {/* Parallax / Story Overlay inside the sticky area */}
        <div className="absolute inset-0 z-10">{children}</div>
      </div>
    </div>
  );
}
