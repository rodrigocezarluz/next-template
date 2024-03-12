"use client";

import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

interface ResizableParams {
  defaultSize: { width: number; height: number };
  minSize: { width: number; height: number };
  maxSize: { width: number; height: number };
  direction: "horizontal" | "vertical" | "both";
  step?: number;
}

export default function useResizable({
  defaultSize,
  minSize,
  maxSize,
  direction,
  step = 8,
}: ResizableParams) {
  const [size, setSize] = useState(defaultSize);
  const isResized = useRef(false);
  const moveStart = useRef({
    width: defaultSize.width,
    height: defaultSize.height,
    x: 0,
    y: 0,
  });

  const handleMouseDown = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    isResized.current = true;
    moveStart.current = { ...size, x: event.screenX, y: event.screenY };
  };

  const handleMouseUp = () => {
    isResized.current = false;
  };

  const handleMouseMove = useDebouncedCallback((event: any) => {
    if (!isResized.current) {
      return;
    }
    const deltaX = event.screenX - moveStart.current.x;
    const deltaY = event.screenY - moveStart.current.y;

    const newWidth =
      Math.round(
        Math.max(
          Math.min(moveStart.current.width + deltaX, maxSize.width),
          minSize.width
        ) / step
      ) * step;
    const newHeight =
      Math.round(
        Math.max(
          Math.min(moveStart.current.height + deltaY, maxSize.height),
          minSize.height
        ) / step
      ) * step;

    switch (direction) {
      case "horizontal": {
        if (newWidth !== size.width) setSize({ ...size, width: newWidth });
        break;
      }
      case "vertical": {
        if (newHeight !== size.height) setSize({ ...size, height: newHeight });
        break;
      }
      case "both": {
        if (newWidth !== size.width || newHeight !== size.height)
          setSize({ width: newWidth, height: newHeight });
        break;
      }
      default:
        break;
    }
  }, 1);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return { handleMouseDown, size };
}
