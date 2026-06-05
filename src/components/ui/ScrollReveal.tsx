"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Animation direction */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Distance to travel (px) */
  distance?: number;
  /** Duration in ms */
  duration?: number;
  /** Only animate once */
  once?: boolean;
  /** Intersection threshold 0–1 */
  threshold?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 600,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up": return `translateY(${distance}px)`;
      case "down": return `translateY(-${distance}px)`;
      case "left": return `translateX(${distance}px)`;
      case "right": return `translateX(-${distance}px)`;
      case "none": return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : getInitialTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/** Staggered reveal for a list of children */
interface StaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  stagger?: number;
  delay?: number;
  direction?: "up" | "left" | "none";
}

export function StaggerReveal({
  children,
  className,
  stagger = 80,
  delay = 0,
  direction = "up",
}: StaggerRevealProps) {
  return (
    <>
      {children.map((child, i) => (
        <ScrollReveal
          key={i}
          className={className}
          delay={delay + i * stagger}
          direction={direction}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}
