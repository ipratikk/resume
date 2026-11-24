"use client";

import { asset } from "../lib/asset";
const skillInsights: Record<string, any> = {
  iOS: {
    companies: ["paypal", "rakuten"],
    level: 8,
    years: 5,
    description: "End-to-end iOS systems engineering—designing, building, and scaling high-performance mobile applications and platform capabilities.",
    link: "https://developer.apple.com/ios/",
  },
  Swift: {
    companies: ["paypal", "rakuten"],
    level: 9,
    years: 4,
    description: "Primary language for building scalable, high-performance iOS applications.",
    link: "https://developer.apple.com/swift/",
  },
  UIKit: {
    companies: ["paypal", "rakuten"],
    level: 8,
    years: 4,
    description: "Foundation for building complex, production-grade iOS interfaces with fine-grained control.",
    link: "https://developer.apple.com/documentation/uikit/",
  },
  SwiftUI: {
    companies: ["rakuten"],
    level: 6,
    years: 2,
    description: "Modern declarative UI framework used for rapid UI development and prototyping.",
    link: "https://developer.apple.com/xcode/swiftui/",
  },
  Combine: {
    companies: ["paypal"],
    level: 7,
    years: 2,
    description: "Reactive framework used for handling asynchronous data streams and event-driven logic.",
    link: "https://developer.apple.com/documentation/combine/",
  },
  RxSwift: {
    companies: ["rakuten"],
    level: 8,
    years: 3,
    description: "Reactive programming library enabling composable and scalable asynchronous flows.",
    link: "https://github.com/ReactiveX/RxSwift",
  },
  MVVM: {
    companies: ["paypal", "rakuten"],
    level: 9,
    years: 5,
    description: "Preferred architecture for scalable iOS apps—separating concerns with clear data flow, testability, and modular UI layers.",
    link: "https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app",
  },
  VIPER: {
    companies: ["rakuten"],
    level: 6,
    years: 3,
    description: "Architecture pattern emphasizing separation of concerns through distinct modules—View, Interactor, Presenter, Entity, and Router.",
    link: "https://www.objc.io/issues/13-architecture/viper/",
  },
  Firebase: {
    companies: ["rakuten", "personal"],
    level: 6,
    years: 4,
    description: "Backend-as-a-service used for analytics, authentication, and real-time data to accelerate product development.",
    link: "https://firebase.google.com/docs",
  },
  Git: {
    companies: ["paypal", "rakuten"],
    level: 8,
    years: 7,
    description: "Version control system used for collaborative development, code reviews, and maintaining reliable release workflows.",
    link: "https://git-scm.com/docs",
  },
  CircleCI: {
    companies: ["rakuten"],
    level: 5,
    years: 2,
    description: "CI/CD platform used to automate build, test, and release pipelines for faster and reliable delivery.",
    link: "https://circleci.com/docs/",
  },
  JIRA: {
    companies: ["paypal", "rakuten"],
    level: 8,
    years: 6,
    description: "Issue and project tracking tool used for agile planning, sprint management, and coordinating cross-functional development workflows.",
    link: "https://support.atlassian.com/jira-software-cloud/docs/",
  },
  "React.js": {
    companies: ["personal"],
    level: 4,
    years: 1,
    description: "Frontend library for building interactive user interfaces and component-driven web applications.",
    link: "https://react.dev/learn",
  },
  Java: {
    companies: ["personal"],
    level: 7,
    years: 4,
    description: "General-purpose programming language used for building scalable backend systems and problem-solving across domains.",
    link: "https://docs.oracle.com/en/java/",
  },
  "C++": {
    companies: ["personal"],
    level: 7,
    years: 4,
    description: "General-purpose programming language used for system-level programming, performance-critical applications, and problem-solving.",
    link: "https://en.cppreference.com/w/",
  },
  SQL: {
    companies: ["personal"],
    level: 7,
    years: 4,
    description: "Query language used for managing and analyzing structured data in relational databases.",
    link: "https://www.w3schools.com/sql/",
  },
  "Core Data": {
    companies: ["paypal", "rakuten"],
    level: 8,
    years: 4,
    description: "Persistent storage framework for managing complex object graphs and efficient local data handling in iOS apps.",
    link: "https://developer.apple.com/documentation/coredata",
  },
  "Swift Concurrency": {
    companies: ["paypal", "rakuten"],
    level: 9,
    years: 4,
    description: "Modern concurrency using async/await, Tasks, and structured concurrency for responsive and scalable iOS applications.",
    link: "https://developer.apple.com/documentation/swift/concurrency",
  },
  Networking: {
    companies: ["paypal", "rakuten"],
    level: 8,
    years: 5,
    description: "Designing robust networking layers using URLSession, API abstractions, and error handling for production-grade apps.",
    link: "https://developer.apple.com/documentation/foundation/urlsession",
  },
  "ARC & Memory": {
    companies: ["paypal", "rakuten"],
    level: 9,
    years: 5,
    description: "Deep understanding of ARC, retain cycles, and memory optimization to ensure efficient and leak-free applications.",
    link: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/",
  },
  "Core Animation": {
    companies: ["paypal", "rakuten"],
    level: 7,
    years: 3,
    description: "Advanced animations and rendering using Core Animation for smooth, performant UI transitions and effects.",
    link: "https://developer.apple.com/documentation/quartzcore",
  },
  "Dependency Injection": {
    companies: ["paypal", "rakuten"],
    level: 8,
    years: 4,
    description: "Applying dependency injection patterns to improve modularity, testability, and scalability of iOS architectures.",
    link: "https://developer.apple.com/documentation/swift",
  },
  "Unit Testing (XCTest)": {
    companies: ["paypal", "rakuten"],
    level: 8,
    years: 4,
    description: "Writing reliable unit tests using XCTest to validate business logic, improve code quality, and prevent regressions.",
    link: "https://developer.apple.com/documentation/xctest",
  },
  XCUITest: {
    companies: ["paypal", "rakuten"],
    level: 7,
    years: 3,
    description: "End-to-end UI testing using XCUITest to ensure critical user flows and app stability across releases.",
    link: "https://developer.apple.com/documentation/xctest/user_interface_tests",
  },
  "Test Architecture": {
    companies: ["paypal", "rakuten"],
    level: 8,
    years: 4,
    description: "Designing testable architectures with dependency injection, mocks, and clear boundaries to enable scalable testing.",
    link: "https://developer.apple.com/documentation/xcode/writing-tests",
  },
  "Quick/Nimble": {
    companies: ["paypal", "rakuten"],
    level: 7,
    years: 3,
    description: "BDD-style testing using Quick and Nimble for expressive, readable, and maintainable test suites.",
    link: "https://github.com/Quick/Quick",
  },
};

import { useEffect, useRef, useState } from "react";


const getSkillClass = (skill: string, index: number) => {
  const data = skillInsights[skill];

  if (!data) return "col-span-2 row-span-1 bg-gray-200";

  // Base importance score
  let score = data.level + data.years;

  // Boost professional experience over personal
  if (data.companies.includes("paypal") || data.companies.includes("rakuten")) {
    score += 3;
  }

  // Hero skill
  if (skill === "iOS") {
    return "col-start-1 col-span-4 row-span-2 bg-gradient-to-br from-blue-200 to-indigo-200";
  }

  // High importance
  if (score >= 12) {
    return "col-span-2 row-span-2 bg-gradient-to-br from-indigo-200 to-purple-200";
  }

  // Medium importance
  if (score >= 9) {
    return "col-span-2 row-span-1 bg-gradient-to-br from-blue-200 to-cyan-200";
  }

  // Low importance
  return "col-span-1 row-span-1 bg-gray-200";
};

const skills = Object.keys(skillInsights).map((skill) => ({
  name: skill,
}));

const canPlace = (grid: number[][], r: number, c: number, w: number, h: number) => {
  if (r + h > grid.length || c + w > grid[0].length) return false;

  for (let i = r; i < r + h; i++) {
    for (let j = c; j < c + w; j++) {
      if (grid[i][j] !== 0) return false;
    }
  }
  return true;
};

const place = (grid: number[][], r: number, c: number, w: number, h: number) => {
  for (let i = r; i < r + h; i++) {
    for (let j = c; j < c + w; j++) {
      grid[i][j] = 1;
    }
  }
};

const isIOSSkill = (name: string) => {
  const iosKeywords = [
    "iOS", "Swift", "UIKit", "SwiftUI", "Combine", "RxSwift",
    "Core Data", "Swift Concurrency", "Networking",
    "ARC & Memory", "Core Animation", "Dependency Injection",
    "Unit Testing (XCTest)", "XCUITest", "Test Architecture", "Quick/Nimble",
    "MVVM", "VIPER"
  ];
  return iosKeywords.includes(name);
};

const generateLayout = () => {
  const rows = 6; // fixed height
  const cols = Math.ceil(skills.length * 1.5); // expand horizontally
  const grid = Array.from({ length: rows }, () => Array(cols).fill(0));
  const layout: any[] = [];

  const sorted = [...skills].sort((a, b) => {
    const isAIOS = isIOSSkill(a.name);
    const isBIOS = isIOSSkill(b.name);

    // iOS skills first
    if (isAIOS && !isBIOS) return -1;
    if (!isAIOS && isBIOS) return 1;

    const A = skillInsights[a.name];
    const B = skillInsights[b.name];

    // then sort by importance
    return (B.level + B.years) - (A.level + A.years);
  });

  for (const skill of sorted) {
    const data = skillInsights[skill.name];

    let w = 1, h = 1;

    if (skill.name === "iOS") {
      w = 3; h = 2;
    } else if (data.level + data.years >= 12) {
      w = 2; h = 2;
    } else if (data.level + data.years >= 9) {
      w = 2; h = 1;
    }

    outer:
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (canPlace(grid, r, c, w, h)) {
          place(grid, r, c, w, h);
          layout.push({ ...skill, row: r, col: c, w, h });
          break outer;
        }
      }
    }
  }

  return layout;
};

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const [progress, setProgress] = useState(0);
  const [activeSkill, setActiveSkill] = useState<string>("iOS");
  const [scrollState, setScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      let p = (vh - rect.top) / vh;
      p = Math.min(Math.max(p, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleHorizontalScroll = () => {
      setScrollState({
        canScrollLeft: el.scrollLeft > 0,
        canScrollRight:
          el.scrollLeft + el.clientWidth < el.scrollWidth - 1,
      });
    };

    el.addEventListener("scroll", handleHorizontalScroll);
    handleHorizontalScroll();

    return () => el.removeEventListener("scroll", handleHorizontalScroll);
  }, []);

  const data = skillInsights[activeSkill];

  return (
    <section ref={sectionRef} className="bg-white h-screen flex items-center snap-start">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-4 gap-8 items-center">

          {/* LEFT PANEL */}
          <div className="col-span-1 h-[75vh]">
            <div className="w-full h-full rounded-[28px] bg-black text-white p-6 flex flex-col">

              {data && (
                <div key={activeSkill} className="flex flex-col h-full transition-all duration-300">

                  {/* TOP */}
                  <div className="space-y-3">
                    <div className="text-2xl font-semibold">{activeSkill}</div>
                    <div className="text-sm text-white/70">{data.description}</div>

                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#2997ff]/80 hover:text-[#2997ff]"
                    >
                      Learn more ↗
                    </a>
                  </div>

                  {/* BOTTOM GROUP */}
                  <div className="mt-auto space-y-6">
                    <div className="flex gap-3">
                      {data.companies.map((c: string, i: number) => (
                        <img key={i} src={asset(`/logos/${c}_dark_bg.svg`)} className="h-8" />
                      ))}
                    </div>

                    <div>
                      <div className="text-xs text-white/60 mb-1">Proficiency ({data.level}/10)</div>
                      <div className="w-full h-2 bg-white/20 rounded-full">
                        <div className="h-full bg-white rounded-full" style={{ width: `${data.level * 10}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                    <span className="text-xs text-white/60">Experience</span>
                    <span className="text-lg font-semibold">{data.years}+</span>
                    <span className="text-sm text-white/60">years</span>
                  </div>

                </div>
              )}
            </div>
          </div>

          {/* MOSAIC */}
          <div className="col-span-3 relative h-[75vh]">
            {/* Scroll Buttons */}
            {scrollState.canScrollLeft && (
              <button
                onClick={() => {
                  scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md shadow-lg rounded-full p-3 hover:bg-white"
              >
                ←
              </button>
            )}
            {scrollState.canScrollRight && (
              <button
                onClick={() => {
                  scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md shadow-lg rounded-full p-3 hover:bg-white"
              >
                →
              </button>
            )}
            <div
              ref={scrollRef}
              onMouseDown={(e) => {
                if (!scrollRef.current) return;
                isDragging.current = true;
                startX.current = e.pageX;
                scrollLeftStart.current = scrollRef.current.scrollLeft;
              }}
              onMouseMove={(e) => {
                if (!isDragging.current || !scrollRef.current) return;
                const dx = e.pageX - startX.current;
                scrollRef.current.scrollLeft = scrollLeftStart.current - dx;
              }}
              onMouseUp={() => {
                isDragging.current = false;
              }}
              onMouseLeave={() => {
                isDragging.current = false;
              }}
              onTouchStart={(e) => {
                if (!scrollRef.current) return;
                isDragging.current = true;
                startX.current = e.touches[0].pageX;
                scrollLeftStart.current = scrollRef.current.scrollLeft;
              }}
              onTouchMove={(e) => {
                if (!isDragging.current || !scrollRef.current) return;
                const dx = e.touches[0].pageX - startX.current;
                scrollRef.current.scrollLeft = scrollLeftStart.current - dx;
              }}
              onTouchEnd={() => {
                isDragging.current = false;
              }}
              className="h-full overflow-x-auto overflow-y-visible px-12 py-8 cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                userSelect: isDragging.current ? "none" : "auto",
              }}
            >
              <div className="grid grid-rows-6 auto-cols-[minmax(120px,1fr)] gap-4 h-full w-max -mx-6 -my-4">
                {generateLayout().map((item, i) => (
                  <div
                    key={item.name}
                    onMouseEnter={() => setActiveSkill(item.name)}
                    style={{
                      gridColumn: `${item.col + 1} / span ${item.w}`,
                      gridRow: `${item.row + 1} / span ${item.h}`,
                    }}
                    className="rounded-[28px] flex items-center justify-center text-center bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                  >
                    <span className={`${item.name === "iOS" ? "text-3xl font-semibold" : "text-lg font-medium"}`}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}