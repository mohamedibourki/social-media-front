import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The support I received from Student Affairs was instrumental in my academic success.",
    author: "Sarah Johnson",
    role: "Senior, Computer Science",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "The career services team helped me land my dream internship at a top tech company.",
    author: "Michael Chen",
    role: "Junior, Business Administration",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  }
];

export default function Testimonials() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Student Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from students who have benefited from our services and support
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.author}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50"
            >
              <Quote className="absolute top-4 left-4 h-8 w-8 text-blue-200" />
              <div className="relative">
                <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}