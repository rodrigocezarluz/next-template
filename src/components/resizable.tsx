"use client";

import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

import { cn } from "@/lib/utils";

export interface ResizableProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultSize: { width: number; height: number };
  minSize: { width: number; height: number };
  maxSize: { width: number; height: number };
  direction: "horizontal" | "vertical" | "both";
  step?: number;
  resizeMode?: "onChange" | "onEnd";
  handleClassName?: string;
}

export default function Resizable({
  children,
  defaultSize,
  minSize,
  maxSize,
  direction,
  step = 1,
  resizeMode = "onChange",
  className,
  handleClassName,
}: ResizableProps) {
  const [size, setSize] = useState(defaultSize);
  const onEndSize = useRef(defaultSize);
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
    if (resizeMode === "onEnd") {
      setSize(onEndSize.current);
    }
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

    if (resizeMode === "onChange") {
      switch (direction) {
        case "horizontal": {
          if (newWidth !== size.width) setSize({ ...size, width: newWidth });
          break;
        }
        case "vertical": {
          if (newHeight !== size.height)
            setSize({ ...size, height: newHeight });
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
    } else if (resizeMode === "onEnd") {
      switch (direction) {
        case "horizontal": {
          if (newWidth !== size.width)
            onEndSize.current = { ...size, width: newWidth };
          break;
        }
        case "vertical": {
          if (newHeight !== size.height)
            onEndSize.current = { ...size, height: newHeight };
          break;
        }
        case "both": {
          if (newWidth !== size.width || newHeight !== size.height)
            onEndSize.current = { width: newWidth, height: newHeight };
          break;
        }
        default:
          break;
      }
    }
  }, 1);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [onEndSize.current]);

  return (
    <div
      style={{ width: size.width }}
      className={cn("group relative", className)}
    >
      {children}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        className={cn(
          "z-50 absolute top-0 left-full -translate-x-1/2 h-full w-2 bg-transparent group-hover:bg-black/50 cursor-col-resize select-none touch-none",
          handleClassName
        )}
      />
    </div>
  );
}
