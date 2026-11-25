import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  GraduationCap,
  Search,
} from "lucide-react";

import { DashboardLayout } from "@/components/dashboard-page";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Study Dashboard | ExamGlow" },
      {
        name: "description",
        content: "Course search made smarter and simpler. Find courses with high admission chances.",
      },
      { property: "og:title", content: "Study Dashboard | ExamGlow" },
      {
        property: "og:description",
        content: "Explore new opportunities, courses, destinations and university partnerships.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const courses = [
  {
    title: "Doctoral Certificate in Applied Computer Science",
    price: "$10,280",
    university: "Westcliff University, US",
  },
  {
    title: "PhD Health Economics",
    price: "$11,584",
    university: "University of Colorado Denver, US",
  },
  {
    title: "Doctoral Certificate in Applied Computer Science",
    price: "$18,343",
    university: "University of North Carolina at Gree...",
  },
];

const destinations = [
  {
    country: "Canada",
    sub: "Your best destination",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=80",
  },
  {
    country: "Oxford",
    sub: "Your best destination",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80",
  },
  {
    country: "Colorado",
    sub: "United States (USA)",
    img: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&auto=format&fit=crop&q=80",
  },
  {
    country: "Texas",
    sub: "Your best destination",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=80",
  },
];

const partnerships = [
  {
    name: "University of Colorado",
    location: "United States (USA)",
    img: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=100&auto=format&fit=crop&q=80",
    highlight: true,
  },
  {
    name: "University of Texas",
    location: "United States (USA)",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&auto=format&fit=crop&q=80",
    highlight: false,
  },
  {
    name: "University of Canada",
    location: "United States (USA)",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&auto=format&fit=crop&q=80",
    highlight: false,
  },
  {
    name: "University of Toronto",
    location: "United States (USA)",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&auto=format&fit=crop&q=80",
    highlight: false,
  },
];

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout crumbs={[{ label: "Home" }]}>
      <div className="mx-auto max-w-[1200px] py-1">
        {/* Top Bar: Search Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subjects, courses or chapters..."
              className="w-full bg-card rounded-full pl-9 pr-4 py-2 text-xs text-foreground placeholder:text-muted-foreground border border-border/80 focus:outline-none focus:ring-1 focus:ring-border transition"
            />
          </div>
        </header>

        {/* Hero Banner Row: 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-1">
          {/* Yellow Banner (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFD634] rounded-[24px] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-xs">
            {/* Decorative background student illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-90 translate-x-3 translate-y-3">
              <svg width="180" height="150" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="90" y="125" width="70" height="14" rx="3" fill="#333333" />
                <rect x="85" y="112" width="80" height="13" rx="3" fill="#FFFFFF" stroke="#333" strokeWidth="2" />
                <rect x="95" y="100" width="65" height="12" rx="3" fill="#333333" />
                <circle cx="130" cy="55" r="14" fill="#333333" />
                <path d="M120 70 C120 62 140 62 140 70 L145 105 L115 105 Z" fill="#FFFFFF" stroke="#333" strokeWidth="2" />
                <path d="M122 72 L112 50 L118 48 L126 68 Z" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
                <path d="M112 50 C110 44 115 40 118 43 C120 45 118 50 112 50 Z" fill="#FFE2B8" stroke="#333" strokeWidth="1.5" />
                <path d="M165 40 L168 45 L173 48 L168 51 L165 56 L162 51 L157 48 L162 45 Z" fill="#FFFFFF" />
                <circle cx="175" cy="70" r="2" fill="#333333" />
                <circle cx="90" cy="65" r="1.5" fill="#333333" />
              </svg>
            </div>

            <div className="relative z-10 max-w-md">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-950">
                Explore new opportunities
              </h2>
              <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-gray-800 max-w-[320px]">
                Course search made smarter and simpler. Use Yumna to find courses with high admission chances.
              </p>
            </div>

            <div className="relative z-10 mt-6">
              <button
                type="button"
                className="bg-white text-gray-950 font-bold text-xs px-5 py-2.5 rounded-full shadow-xs hover:bg-gray-50 transition cursor-pointer"
              >
                Try now
              </button>
            </div>
          </div>

          {/* Black Event Banner (5 cols) */}
          <div className="lg:col-span-5 bg-[#0D0D0D] rounded-[24px] p-5 sm:p-6 text-white flex items-center justify-between gap-3 relative shadow-xs">
            <div className="flex-1 min-w-0 pr-1">
              <span className="text-[11px] font-medium text-gray-400">Up-coming Events</span>
              <h3 className="mt-1 text-sm font-bold text-white leading-snug">
                IETLS Speaking - Part 3- Tow-way discussion
              </h3>
              <p className="mt-1 text-[10px] text-gray-400">United Kingdom | 09am - 12am</p>
              <button
                type="button"
                className="mt-4 bg-[#FFD634] text-gray-950 font-bold text-xs px-4 py-2 rounded-full hover:bg-amber-300 transition cursor-pointer shadow-xs"
              >
                View Details
              </button>
            </div>

            {/* White Flyer Thumbnail Preview */}
            <div className="relative shrink-0 flex items-center">
              <div className="w-24 bg-white rounded-2xl p-2.5 text-gray-900 shadow-md text-center">
                <p className="text-[8px] font-bold text-gray-400 tracking-wider">✦ Educare</p>
                <p className="text-xs font-extrabold text-black mt-0.5">Hello</p>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&auto=format&fit=crop&q=80"
                  alt="Student"
                  className="size-11 mx-auto rounded-lg object-cover my-1"
                />
                <p className="text-[7px] text-gray-500 font-medium leading-none">Feels Good to the EVENT</p>
                <div className="flex justify-center gap-1 mt-1.5">
                  <span className="size-1 rounded-full bg-black" />
                  <span className="size-1 rounded-full bg-gray-300" />
                </div>
              </div>

              {/* Circular Floating Arrow Button */}
              <button
                type="button"
                className="absolute -right-3 top-1/2 -translate-y-1/2 size-7 rounded-full bg-white text-black shadow-md flex items-center justify-center hover:scale-105 transition"
                aria-label="Next event"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mt-7">
          <div className="flex items-center justify-between pb-3">
            <h3 className="text-sm sm:text-base font-bold text-foreground">Courses</h3>
            <button type="button" className="text-xs font-medium text-muted-foreground hover:text-foreground transition">
              See all
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-card p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-border transition"
              >
                <h4 className="text-xs font-semibold text-card-foreground leading-snug line-clamp-2 min-h-[32px]">
                  {course.title}
                </h4>
                <p className="mt-2 text-sm font-bold text-foreground">{course.price}</p>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] text-muted-foreground">
                  <span className="size-4 rounded-full bg-black text-[#FFD634] flex items-center justify-center shrink-0">
                    <GraduationCap className="size-2.5" />
                  </span>
                  <span className="truncate">{course.university}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 2-Column: Your destinations & Partnerships */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-7">
          {/* Destinations Grid (7 cols) */}
          <div className="lg:col-span-7">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-foreground">Your destinations</h3>
              <p className="text-[11px] text-muted-foreground mt-0.5">Providers 120 world class education in 8 countries</p>
            </div>

            <div className="grid grid-cols-2 gap-3.5 mt-3">
              {destinations.map((dest, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-muted shadow-xs cursor-pointer"
                >
                  <img
                    src={dest.img}
                    alt={dest.country}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-3">
                    <h4 className="text-xs font-bold text-white leading-tight">{dest.country}</h4>
                    <p className="text-[10px] text-gray-300 leading-tight mt-0.5">{dest.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnerships List (5 cols) */}
          <div className="lg:col-span-5">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-foreground">Partnerships</h3>
              <p className="text-[11px] text-muted-foreground mt-0.5">Partnered over 120 world class University</p>
            </div>

            <div className="mt-3 space-y-2">
              {partnerships.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-2xl hover:bg-muted/50 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={partner.img}
                      alt={partner.name}
                      className="size-10 rounded-xl object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-semibold text-foreground truncate">{partner.name}</h4>
                      <p className="text-[10px] text-muted-foreground truncate">{partner.location}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`size-7 rounded-full flex items-center justify-center shrink-0 transition ${
                      partner.highlight
                        ? "bg-foreground text-background hover:opacity-90"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label={`View ${partner.name}`}
                  >
                    <ArrowUpRight className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
