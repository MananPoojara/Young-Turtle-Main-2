"use client";
import { useEffect, useRef, useState } from "react";

export function LazyVideo() {
    const [shouldLoad, setShouldLoad] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 } // load when 20% visible
        );

        if (videoRef.current) observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="none"        // <-- important
            className="absolute inset-0 w-full h-full object-cover"
        >
            {shouldLoad && <source src="../public/turtle.mp4" type="video/mp4" />}
        </video>
    );
}
