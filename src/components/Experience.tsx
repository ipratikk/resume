"use client";

import { useEffect, useRef, useState } from "react";

/* ================= DATA ================= */

const experiences = [
    {
        id: "paypal",
        logo: "/logos/paypal_light_bg.svg",
        company: "PayPal",
        roles: [
            {
                title: "Senior Software Engineer (iOS)",
                duration: "Apr 2025 – Present",
                points: [
                    "Leading development of Balance and Savings platform used by millions",
                    "Driving architecture decisions for scalable financial systems",
                    "Owning cross-team integrations across onboarding and payments",
                ],
            },
            {
                title: "Software Development Engineer II (iOS)",
                duration: "Sept 2023 – Mar 2025",
                points: [
                    "Built PayPal Everywhere (PPE) platform across US, UK, and Germany",
                    "Designed BankingHub architecture with reusable modules and APIs",
                    "Delivered Auto Reload system for seamless balance management",
                    "Migrated critical flows from web to native, improving performance",
                ],
            },
        ],
    },
    {
        id: "rakuten",
        logo: "/logos/rakuten.svg",
        company: "Rakuten",
        roles: [
            {
                title: "Software Development Engineer I (iOS)",
                duration: "Jun 2022 – Aug 2023",
                points: [
                    "Improved performance across core user flows and reduced latency",
                    "Optimized rendering in high-traffic screens",
                ],
            },
            {
                title: "Associate Software Engineer (iOS)",
                duration: "Jul 2021 – May 2022",
                points: [
                    "Contributed to Rakuten Link Office communication platform",
                    "Worked on messaging and calling features",
                    "Led migration from UIKit to SwiftUI",
                ],
            },
        ],
    },
    {
        id: "ey",
        logo: "/logos/ey_light_bg.svg",
        company: "Ernst & Young (EY)",
        roles: [
            {
                title: "Technology Intern",
                duration: "2020",
                points: [
                    "Built automation pipelines for financial workflows",
                    "Reduced processing time from hours to seconds",
                    "Developed OCR-based data extraction tools",
                ],
            },
        ],
    },
];

/* ================= PROGRESS ================= */

function computeProgress(rect: DOMRect) {
    const vh = window.innerHeight;

    const start = vh;
    const end = vh / 2 - rect.height / 2;

    let p = (start - rect.top) / (start - end);
    p = Math.min(Math.max(p, 0), 1);

    const adjusted = Math.min(p / 0.85, 1);
    return 1 - Math.pow(1 - adjusted, 3);
}

/* ================= COMPONENT ================= */

export default function Experience() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progressList, setProgressList] = useState(
        new Array(experiences.length).fill(0)
    );

    useEffect(() => {
        const handleScroll = () => {
            const vh = window.innerHeight;

            let closest = 0;
            let min = Infinity;

            const newProgress = refs.current.map((el, i) => {
                if (!el) return 0;

                const rect = el.getBoundingClientRect();

                const center = rect.top + rect.height / 2;
                const distance = Math.abs(center - vh / 2);

                if (distance < min) {
                    min = distance;
                    closest = i;
                }

                return computeProgress(rect);
            });

            setActiveIndex(closest);
            setProgressList(newProgress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const current = experiences[activeIndex];
    const progress = progressList[activeIndex];

    return (
        <section className="bg-white text-black relative">

            <div className="flex relative">

                {/* LEFT CONTENT */}
                <div className="w-1/2">
                    <div className="max-w-3xl ml-auto px-6 md:px-12 lg:px-20 space-y-[80vh] pt-[60vh] pb-[40vh]">

                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                ref={(el) => (refs.current[index] = el)}
                            >
                                <div className="space-y-6">

                                    <h2 className="text-4xl font-semibold">
                                        {exp.company}
                                    </h2>

                                    <div className="space-y-8 pt-4">

                                        {exp.roles.map((role, i) => (
                                            <div key={i} className="space-y-3">

                                                {/* ROLE TITLE */}
                                                <div>
                                                    <h3 className="text-lg font-medium text-black">
                                                        {role.title}
                                                    </h3>
                                                    <p className="text-xs text-black/50">
                                                        {role.duration}
                                                    </p>
                                                </div>

                                                {/* ROLE POINTS */}
                                                <ul className="space-y-2">
                                                    {role.points.map((p, j) => (
                                                        <li key={j} className="text-sm text-black/70 leading-relaxed">
                                                            • {p}
                                                        </li>
                                                    ))}
                                                </ul>

                                            </div>
                                        ))}

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* RIGHT SLAB */}
                <div className="absolute inset-y-0 right-0 w-[50vw]">

                    <div className="sticky top-0 h-screen flex items-center pointer-events-none">

                        <div className="w-full h-[520px] bg-white rounded-l-[40px] relative">

                            {/* ===== ELEVATION ===== */}
                            {/* Main elevation (directional) */}
                            <div className="absolute inset-0 rounded-l-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] blur-3xl" />

                            {/* Subtle depth (slightly downward) */}
                            <div className="absolute inset-0 rounded-l-[40px] shadow-[0_20px_20px_rgba(0,0,0,0.08)]" />
                            <div className="absolute bottom-[-30px] left-32 right-32 h-20 bg-black/2 blur-3xl rounded-full" />

                            {/* ===== BEVEL ===== */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/90" />
                            <div className="absolute top-0 bottom-0 left-0 w-[2px]" />

                            {/* ===== LOGO (CINEMATIC TRANSITION) ===== */}
                            <div className="w-full h-full flex items-center justify-center">

                                <img
                                    key={current.id}
                                    src={current.logo}
                                    className="object-contain transition-all duration-500"
                                    style={{
                                        maxWidth: "45%",
                                        maxHeight: "45%"
                                    }}
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}