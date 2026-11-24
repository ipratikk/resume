"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { asset } from "../lib/asset";

export default function IntroAnimation({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const [animationData, setAnimationData] = useState<any>(null);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        fetch(asset("/lottie/hello.json"))
            .then((res) => res.json())
            .then((data) => setAnimationData(data));
    }, []);

    useEffect(() => {
        if (!animationData) return;

        const timeout = setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 500);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [animationData]);

    if (!animationData) return null;

    return (
        <div
            className={`fixed inset-0 z-[999] flex items-center justify-center transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"
                }`}
        >
            <div className="w-[380px] h-[380px]">
                <Lottie animationData={animationData} loop={false} />
            </div>
        </div>
    );
}