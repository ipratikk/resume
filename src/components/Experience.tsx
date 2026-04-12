"use client";

/* ================= DATA ================= */

const experiences = [
  {
    company: "PayPal",
    roles: [
      {
        title: "Senior Software Engineer (iOS)",
        duration: "Apr 2025 – Present",
        points: [
          "Leading development of Balance and Savings platform used by millions",
          "Driving architecture decisions for scalable financial systems",
        ],
      },
      {
        title: "Software Development Engineer II (iOS)",
        duration: "Sept 2023 – Mar 2025",
        points: [
          "Built PayPal Everywhere (PPE) platform across US, UK, and Germany",
          "Designed BankingHub architecture with reusable modules and APIs",
          "Delivered Auto Reload system for seamless balance management",
          "Migrated critical flows from web to native",
        ],
      },
    ],
  },
  {
    company: "Rakuten",
    roles: [
      {
        title: "Software Development Engineer I (iOS)",
        duration: "Jun 2022 – Aug 2023",
        points: [
          "Improved performance across core user flows",
          "Optimized rendering and reduced latency in high-traffic screens",
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
    company: "Ernst & Young (EY)",
    roles: [
      {
        title: "Technology Intern",
        duration: "2020",
        points: [
          "Built automation pipelines for financial workflows",
          "Reduced processing time from hours to seconds",
          "Developed OCR-based data processing tools",
        ],
      },
    ],
  },
];

/* ================= COMPONENT ================= */

export default function Experience() {
  return (
    <section className="bg-black text-white py-[20vh]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 relative">

        {/* Main timeline */}
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/10" />

        <div className="space-y-20">

          {experiences.map((company, i) => (
            <div key={i} className="relative pl-12">

              {/* Company dot */}
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-white" />

              {/* Company name */}
              <h2 className="text-2xl font-semibold mb-6">
                {company.company}
              </h2>

              {/* Roles */}
              <div className="space-y-10">

                {company.roles.map((role, j) => (
                  <div key={j} className="relative pl-8">

                    {/* Role connector line */}
                    <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-white/10" />

                    {/* Role dot */}
                    <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-white/60" />

                    {/* Role content */}
                    <div className="space-y-2">

                      <h3 className="text-lg font-medium text-white">
                        {role.title}
                      </h3>

                      <p className="text-xs text-white/50">
                        {role.duration}
                      </p>

                      <ul className="space-y-2 mt-2">
                        {role.points.map((point, k) => (
                          <li
                            key={k}
                            className="text-sm text-white/60 leading-relaxed"
                          >
                            • {point}
                          </li>
                        ))}
                      </ul>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}