import React from "react";
import { Users, GraduationCap, Building, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "25,000+", label: "Students Served" },
  { icon: GraduationCap, value: "95%", label: "Success Rate" },
  { icon: Building, value: "50+", label: "Campus Programs" },
  { icon: Globe, value: "100+", label: "Partner Organizations" },
];

export default function Stats() {
  return (
    <div className="relative py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-6 backdrop-blur-sm bg-white/10 rounded-xl"
            >
              <stat.icon className="h-8 w-8 mb-4" />
              <span className="text-3xl font-bold mb-2">{stat.value}</span>
              <span className="text-sm opacity-80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}