'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils'; // Assuming you have utils, we need to make sure we do or define cn here.
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
};

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = 'up',
    duration = 0.5
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Smooth ease out
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: delay,
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
}

export const ZoomIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
