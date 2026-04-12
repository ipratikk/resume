"use client";

import { useRef, useState, useEffect } from "react";

/* ================= DATA ================= */

const companies = [
  {
    name: "PayPal",
    showName: false,
    logo: "/logos/paypal.svg",
    website: "https://www.paypal.com",
    app: "https://apps.apple.com/us/app/paypal-pay-send-save/id283646709",
    cards: [
      {
        title: "PayPal Everywhere (PPE)",
        desc: "Unified onboarding and financial platform deployed across multiple regions including US, UK, and Germany.",
        sub: "Led development of native modules and architecture supporting region-specific compliance, data collection, and onboarding flows.",
      },
      {
        title: "PPE US, UK & DE",
        desc: "Scaled onboarding and compliance flows across multiple international markets with varying regulatory requirements.",
        sub: "Built and adapted KYC flows, data collection systems, and APIs to support region-specific rules and seamless rollout.",
      },
      {
        title: "Auto Reload System",
        desc: "Ensures uninterrupted transactions by automatically reloading balance when thresholds are reached.",
        sub: "Owned end-to-end implementation across native client and backend-driven flows, including UI, logic, and integrations.",
      },
      {
        title: "Savings & Balance Platform",
        desc: "Core financial system enabling users to manage funds, savings, and transactions within PayPal.",
        sub: "Designed and built scalable modules, APIs, caching layers, and onboarding flows powering millions of users.",
      },
    ],
  },
  {
    name: "Rakuten",
    showName: false,
    logo: "/logos/rakuten.svg",
    website: "https://www.rakuten.com",
    app: "https://apps.apple.com/us/app/rakuten-link/id1498877539",
    cards: [
      {
        title: "Rakuten Link Office",
        desc: "Enterprise communication platform supporting messaging and calling features.",
        sub: "Contributed to public launch by building core chat and call functionality with improved reliability.",
      },
      {
        title: "Performance Optimization",
        desc: "Improved responsiveness across key user flows in the app.",
        sub: "Refactored legacy code and optimized rendering to reduce latency and improve stability.",
      },
      {
        title: "SwiftUI Migration",
        desc: "Modernized UI architecture to improve scalability and development speed.",
        sub: "Led migration from UIKit to SwiftUI and built reusable UI components.",
      },
    ],
  },
  {
    name: "Ernst & Young",
    showName: true,
    logo: "/logos/ey.svg",
    website: "https://www.ey.com",
    app: null,
    cards: [
      {
        title: "Tax Automation Engine",
        desc: "Automated complex taxation workflows involving data extraction and processing.",
        sub: "Built end-to-end pipelines integrating email ingestion, processing logic, and reporting systems.",
      },
      {
        title: "Data Processing Tools",
        desc: "Systems for extracting and transforming structured and unstructured data.",
        sub: "Developed OCR-based pipelines and export systems for Excel/CSV generation.",
      },
    ],
  },
];

/* ================= CARD ================= */

function Card({ title, desc, sub }: any) {
  return (
    <div className="min-w-[420px] h-[360px] rounded-[28px] bg-[#111] border border-white/10 p-8 flex flex-col justify-between">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
        <p className="text-sm text-white/50 leading-relaxed">{sub}</p>
      </div>
    </div>
  );
}

/* ================= COMPANY ROW ================= */

function CompanyRow({ company }: any) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = ref.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    updateScrollState();

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollRight = () => {
    ref.current?.scrollBy({ left: 450, behavior: "smooth" });
  };

  const scrollLeft = () => {
    ref.current?.scrollBy({ left: -450, behavior: "smooth" });
  };

  const showControls = canScrollLeft || canScrollRight;

  return (
    <div className="space-y-6 px-6 md:px-12 lg:px-20">

      {/* HEADER */}
      <div className="flex items-center justify-between">

  <div className="flex items-center gap-4">

    {/* LOGO */}
    <div className={`${company.showName ? "h-9" : "h-14"} flex items-center`}>
      <img
        src={company.logo}
        alt={company.name}
        className="h-full w-auto object-contain"
      />
    </div>

    {/* EY TEXT */}
    {company.showName && (
      <h2 className="text-base font-medium text-white/80">
        {company.name}
      </h2>
    )}

    {/* ICON LINKS */}
    <div className="flex items-center gap-2 ml-2">

      {/* WEBSITE ICON */}
      <a
        href={company.website}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
      >
        🌐
      </a>

      {/* APP ICON */}
      {company.app && (
        <a
          href={company.app}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
        >
          
        </a>
      )}

    </div>

  </div>

</div>

      {/* SCROLL AREA */}
      <div className="relative">

        {/* LEFT FADE */}
        {canScrollLeft && (
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
        )}

        {/* RIGHT FADE */}
        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />
        )}

        {/* CARDS */}
        <div
          ref={ref}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pr-6"
        >
          {company.cards.map((card: any, i: number) => (
            <Card key={i} {...card} />
          ))}
        </div>

      </div>

      {/* CONTROLS */}
      {showControls && (
        <div className="flex justify-center gap-4 pt-2">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`rounded-full px-4 py-2 text-sm transition ${
              canScrollLeft
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-white/5 text-white/30 cursor-not-allowed"
            }`}
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`rounded-full px-4 py-2 text-sm transition ${
              canScrollRight
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-white/5 text-white/30 cursor-not-allowed"
            }`}
          >
            →
          </button>
        </div>
      )}

    </div>
  );
}

/* ================= MAIN ================= */

export default function ProductShowcase() {
  return (
    <section className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-[20vh]">
      <div className="space-y-32">
        {companies.map((c, i) => (
          <CompanyRow key={i} company={c} />
        ))}
      </div>
    </section>
  );
}