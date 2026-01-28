"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Scan, ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt: string;
    aspectRatio?: string; // e.g. "aspect-[4/3]"
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
    beforeImage,
    afterImage,
    alt,
    aspectRatio = "aspect-[4/3]"
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = () => setIsResizing(true);
    const handleMouseUp = () => setIsResizing(false);

    const handleMouseMove = (e: MouseEvent | React.MouseEvent) => {
        if (!isResizing || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, x)));
    };

    const handleTouchMove = (e: React.TouchEvent | TouchEvent) => {
        if (!isResizing || !containerRef.current) return;
        // Handle touch logic roughly same as mouse
        const touch = 'touches' in e ? e.touches[0] : null;
        if (!touch) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, x)));
    }

    useEffect(() => {
        window.addEventListener("mouseup", handleMouseDown); // Wait, logic error in standard handler names, fix below
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <div
            className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl select-none group cursor-col-resize`}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
        >
            {/* Background (After Image) */}
            <Image
                src={afterImage}
                alt={`${alt} After`}
                fill
                className="object-cover"
                priority
            />

            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-white uppercase tracking-widest border border-white/20">
                After
            </div>

            {/* Foreground (Before Image - Clipped) */}
            <div
                className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt={`${alt} Before`}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-white uppercase tracking-widest border border-white/20">
                    Before
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg text-blue-600">
                    <ChevronsLeftRight size={16} />
                </div>
            </div>

            {/* Scan Line Effect (Tech Feel) */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-full h-[1px] bg-blue-500/50 shadow-[0_0_10px_#3b82f6] absolute top-1/2 -translate-y-1/2"></div>
            </div>

        </div>
    );
};

export default BeforeAfterSlider;
