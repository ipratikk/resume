"use client";

import React, { useState, useRef, useEffect } from "react";

type Project = {
    name: string;
    description: string;
    tech: string[];
    link?: string;
    media?: string[]; // multiple images
};

const projects: Project[] = [
    {
        name: "Spendora",
        description:
            "Offline-first finance system using Core Data as a persistent cache, enabling instant UI updates, background synchronization, secure data storage via Keychain, and seamless sync capabilities leveraging iCloud.",
        tech: ["Swift", "SwiftUI", "Combine", "Core Data", "iCloud", "Keychain", "Caching", "Offline-first", "Architecture"],
        link: "https://github.com/ipratikk/Spendora",
        media: [
            "https://raw.githubusercontent.com/ipratikk/Spendora/main/SpendoraTests/__Snapshots__/SpendDashboardSnapshotTests/DashboardSnapshotInitial.Dark.png",
            "https://raw.githubusercontent.com/ipratikk/Spendora/main/SpendoraTests/__Snapshots__/SpendDashboardSnapshotTests/AnalysisView.Dark.png",
            "https://raw.githubusercontent.com/ipratikk/Spendora/main/SpendoraTests/__Snapshots__/SpendDashboardSnapshotTests/LoginScreen.Dark.png"
        ],
    },
    {
        name: "MindNote",
        description:
            "Feature-based modular iOS architecture with protocol-driven services, offline caching, secure storage using Keychain, and sync mechanisms leveraging iCloud, exploring scalable system design patterns.",
        tech: ["Swift", "SwiftUI", "Combine", "iCloud", "Keychain", "Modular Architecture", "Networking", "Caching", "DI"],
        link: "https://github.com/ipratikk/MannKiBaat",
        media: [
            "https://raw.githubusercontent.com/ipratikk/MannKiBaat/main/MannKiBaatTests/__Snapshots__/NotesSnapshotTests/AuthScreen.Dark.png",
            "https://raw.githubusercontent.com/ipratikk/MannKiBaat/main/MannKiBaatTests/__Snapshots__/NotesSnapshotTests/NotesNormal.Dark.png",
            "https://raw.githubusercontent.com/ipratikk/MannKiBaat/main/MannKiBaatTests/__Snapshots__/NotesSnapshotTests/NoteDetail.Dark.png",
            "https://raw.githubusercontent.com/ipratikk/MannKiBaat/main/MannKiBaatTests/__Snapshots__/MemoryLaneSnapshotTests/MemoryLaneNormal.Dark.png",
            "https://raw.githubusercontent.com/ipratikk/MannKiBaat/main/MannKiBaatTests/__Snapshots__/NotesSnapshotTests/NotesHeavy.Dark.png"
        ],
    },
    {
        name: "Google Calendar API Demo",
        description:
            "Reactive iOS app built with SwiftUI and Combine, integrating Google Calendar APIs with authentication, structured data pipelines, and real-time updates.",
        tech: ["SwiftUI", "Combine", "Google APIs", "Reactive Programming"],
        link: "https://github.com/ipratikk/Google-Calendar-API-Demo",
        media: ["/projects/calendar.mp4"],
    },
];

type CarouselProps = {
    media: string[];
    projectName: string;
};

const DeviceCarousel: React.FC<CarouselProps> = ({ media, projectName }) => {
    const [activeIndex, setActiveIndex] = useState(Math.floor(media.length / 2));
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setRevealed(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <div
            className="relative w-full flex justify-center items-center h-[500px] cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => {
                e.preventDefault(); // prevents selection issues
                const startX = e.clientX;

                const onMove = (moveEvent: MouseEvent) => {
                    const delta = moveEvent.clientX - startX;

                    if (Math.abs(delta) > 40) { // more sensitive
                        setActiveIndex((prev) => {
                            let next = prev + (delta < 0 ? 1 : -1);
                            if (next < 0) next = media.length - 1;
                            if (next >= media.length) next = 0;
                            return next;
                        });
                        cleanup();
                    }
                };

                const cleanup = () => {
                    window.removeEventListener("mousemove", onMove);
                    window.removeEventListener("mouseup", cleanup);
                };

                window.addEventListener("mousemove", onMove);
                window.addEventListener("mouseup", cleanup);
            }}
        >
            {media.map((item, i) => {
                let offset = i - activeIndex;
                if (offset > media.length / 2) offset -= media.length;
                if (offset < -media.length / 2) offset += media.length;

                return (
                    <div
                        key={i}
                        className="absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{
                            transform: revealed
                                ? `translateX(${offset * 140}px) scale(${offset === 0 ? 1 : 0.9})`
                                : `translateX(0px) scale(${offset === 0 ? 1 : 0.95})`,
                            opacity: revealed
                                ? Math.abs(offset) <= 1
                                    ? offset === 0
                                        ? 1
                                        : 0.4
                                    : 0
                                : offset === 0
                                    ? 1
                                    : 0,
                            zIndex: offset === 0 ? 10 : 10 - Math.abs(offset),
                            filter: offset === 0 ? "none" : "blur(1px)",
                        }}
                    >
                        <div className={`relative ${offset === 0 ? "w-[240px]" : "w-[200px]"}`}>
                            <div className="relative w-full">

                                <div
                                    className="absolute z-0 overflow-hidden"
                                    style={{
                                        top: "0.5%",
                                        left: "1.7%",
                                        width: "96.6%",
                                        height: "98.8%",
                                    }}
                                >
                                    {item.endsWith(".mp4") ? (
                                        <video src={item} autoPlay muted loop className="w-full h-full object-cover pointer-events-none" />
                                    ) : (
                                        <img src={item} alt={projectName} className="w-full h-full object-cover pointer-events-none" />
                                    )}
                                </div>

                                <img
                                    src="/iphone.svg"
                                    alt="iPhone mockup"
                                    className="relative z-10 w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}

            <button
                onClick={() =>
                    setActiveIndex((prev) => (prev - 1 + media.length) % media.length)
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur px-3 py-2 rounded-full"
            >
                ←
            </button>

            <button
                onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % media.length)
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur px-3 py-2 rounded-full"
            >
                →
            </button>
        </div>
    );
};

export default function Projects() {

    return (
        <section className="bg-black text-white min-h-screen flex items-center py-20">
            <div className="w-full max-w-7xl mx-auto px-10 space-y-24">

                {projects.map((project, index) => {
                    const isReversed = index % 2 !== 0;

                    return (
                        <div
                            key={project.name}
                            className="grid grid-cols-2 gap-16 items-center"
                        >

                            {/* LEFT - MEDIA */}
                            <div className={`${isReversed ? "md:order-2" : "md:order-1"} relative`}>
                                <DeviceCarousel
                                    media={project.media || []}
                                    projectName={project.name}
                                />
                            </div>

                            {/* RIGHT - DETAILS */}
                            <div className={`flex flex-col justify-between h-full ${isReversed ? "md:order-1" : "md:order-2"}`}>

                                {/* Title */}
                                <div>
                                    <h2 className="text-4xl font-semibold mb-4">
                                        {project.name}
                                    </h2>

                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* FEATURES */}
                                    <div className="mb-6">
                                        <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                                            Key Highlights
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                                            {project.name === "Spendora" && (
                                                <>
                                                    <li>Offline-first architecture with Core Data</li>
                                                    <li>Reactive UI updates using SwiftUI + Combine</li>
                                                    <li>Write-through caching with background sync and iCloud integration</li>
                                                </>
                                            )}
                                            {project.name === "MindNote" && (
                                                <>
                                                    <li>Feature-based modular architecture</li>
                                                    <li>Reactive pipelines using SwiftUI + Combine</li>
                                                    <li>Protocol-driven services with caching, iCloud sync, and secure Keychain storage</li>
                                                </>
                                            )}
                                            {project.name === "Google Calendar API Demo" && (
                                                <>
                                                    <li>Reactive data pipelines using Combine</li>
                                                    <li>Google OAuth + API integration</li>
                                                    <li>Structured async data flow</li>
                                                </>
                                            )}
                                        </ul>
                                    </div>

                                    {/* ARCHITECTURE */}
                                    <div className="mb-6">
                                        <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                                            Architecture
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {project.name === "Spendora" &&
                                                "MVVM + Repository + Core Data as source of truth + iCloud sync layer + Keychain security"}
                                            {project.name === "MindNote" &&
                                                "Feature modularization + DI + service layer + iCloud sync + Keychain-based security"}
                                            {project.name === "Google Calendar API Demo" &&
                                                "MVVM + Combine + API abstraction"}
                                        </p>
                                    </div>

                                    {/* TECH STACK */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* LINK */}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            className="text-sm font-medium"
                                            style={{ color: "#2997ff" }}
                                        >
                                            View Project →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}