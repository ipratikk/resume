"use client";

import { useEffect, useRef, useState } from "react";

/* ================= DATA ================= */

const steps = [
  {
    text: "Reduced latency by 95% in critical financial flows",
    metric: 95,
    suffix: "%",
    type: "decrease",
    graph: [100, 80, 60, 40, 20, 10, 5],
  },
  {
    text: "Shipped features contributing to $800M+ revenue",
    metric: 800,
    prefix: "$",
    suffix: "M+",
    type: "increase",
    graph: [50, 120, 200, 350, 500, 650, 800],
  },
  {
    text: "Improved app performance by 20% at scale",
    metric: 20,
    suffix: "%",
    type: "stable",
    graph: [60, 65, 70, 75, 78, 80],
  },
] as const;

type StepType = (typeof steps)[number]["type"];

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

/* ================= HELPERS ================= */

function normalize(data: number[]) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  return data.map((d) => (d - min) / (max - min || 1));
}

function catmullRom2bezier(points: number[][]) {
  let d = `M ${points[0][0]} ${points[0][1]}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;

    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;

    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2[0]} ${p2[1]}`;
  }

  return d;
}

/* ================= CHART ================= */

function Chart({
  data,
  progress,
  type,
}: {
  data: number[];
  progress: number;
  type: StepType;
}) {
  const width = 420;
  const height = 200;
  const padding = 28;

  const norm = normalize(data);
  const chartHeight = height - padding * 2;

  const points = norm.map((d, i) => {
    const x =
      padding + (i / (norm.length - 1)) * (width - padding * 2);

    let y;
    if (type === "decrease") y = height - padding - d * chartHeight * 0.9;
    else if (type === "increase") y = height - padding - d * chartHeight;
    else y = height - padding - (0.4 + d * 0.4) * chartHeight;

    return [x, y];
  });

  const path = catmullRom2bezier(points);
  const areaPath = `${path} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`;

  const pathRef = useRef<SVGPathElement | null>(null);
  const [dot, setDot] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!pathRef.current) return;
    const len = pathRef.current.getTotalLength();
    const p = pathRef.current.getPointAtLength(len * progress);
    setDot({ x: p.x, y: p.y });
  }, [progress, path]);

  const color =
    type === "increase"
      ? "#00c878"
      : type === "decrease"
      ? "#ff5050"
      : "#0071e3";

  return (
    <svg width={width} height={height} className="mt-10 overflow-visible">

      {/* AXES ONLY */}
      <line
        x1={padding}
        x2={width - padding}
        y1={height - padding}
        y2={height - padding}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
      />

      <line
        x1={padding}
        x2={padding}
        y1={padding}
        y2={height - padding}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
      />

      {/* AREA */}
      <path d={areaPath} fill={color} opacity={0.18} />

      {/* GLOW */}
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="10"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* LINE */}
      <path
        ref={pathRef}
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={1000}
        strokeDashoffset={1000 * (1 - progress)}
      />

      {/* DOT */}
      <circle cx={dot.x} cy={dot.y} r="6" fill={color} />

    </svg>
  );
}

/* ================= MAIN ================= */

export default function CinematicImpact() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressList, setProgressList] = useState([0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;

      let closest = 0;
      let min = Infinity;

      const newProgress = refs.current.map((el, i) => {
        if (!el) return 0;

        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const d = Math.abs(center - vh / 2);

        if (d < min) {
          min = d;
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

  const step = steps[activeIndex];
  const progress = progressList[activeIndex];

  return (
    <section className="relative bg-black text-white py-[20vh]">
      <div className="container grid md:grid-cols-2 gap-20">

        {/* LEFT */}
        <div className="space-y-[80vh] pt-[60vh] pb-[40vh]">
          {steps.map((s, i) => (
            <div key={i} ref={(el) => (refs.current[i] = el)}>
              <h2 className="text-3xl md:text-4xl">{s.text}</h2>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="sticky top-[18vh] h-fit flex justify-center">
            
            <div className="w-[520px] h-[420px] rounded-[36px] bg-white/5 border border-white/10 p-10">

              <div className="text-7xl font-semibold">
                {step.prefix || ""}
                {Math.round(step.metric * progress)}
                {step.suffix || ""}
              </div>

              <Chart
                data={step.graph}
                progress={progress}
                type={step.type}
              />

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}