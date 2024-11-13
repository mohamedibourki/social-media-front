import React from 'react';
import { Trophy, Star, Award, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "Top 10 Student Services",
    description: "Ranked among the best student affairs departments nationwide",
    stat: "#8 Nationally"
  },
  {
    icon: Star,
    title: "Student Satisfaction",
    description: "Outstanding satisfaction rate from student surveys",
    stat: "96% Satisfied"
  },
  {
    icon: Award,
    title: "Excellence Award",
    description: "Recognized for innovative student support programs",
    stat: "2024 Winner"
  },
  {
    icon: Target,
    title: "Success Rate",
    description: "Students achieving their academic goals",
    stat: "92% Success"
  }
];

export default function AchievementShowcase() {
  return (
    <div className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Recognition of our commitment to student success and excellence in higher education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white border border-white/10 group-hover:border-white/20 transition-all">
                <item.icon className="h-12 w-12 mb-4 text-blue-300" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 mb-4">{item.description}</p>
                <div className="text-2xl font-bold text-blue-300">{item.stat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}