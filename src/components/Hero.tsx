"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const { scrollY } = useScroll();

    const scale = useTransform(scrollY, [0, 500], [1, 0.96]);

    return (
        <section className="h-screen flex items-center justify-center text-center px-6 pt-16">
            <motion.div style={{ scale }}>
                <h1>I'm Pratik</h1>

                <h3>Senior iOS Engineer | PayPal</h3>

                <p className="mt-6 max-w-lg mx-auto text-subtle">
                    Building high-performance iOS apps used by millions, focused on scalability, reliability, and real-world impact.
                </p>
            </motion.div>
        </section >
    );
}