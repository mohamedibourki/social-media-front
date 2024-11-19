import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Academic Support',
    description: 'Get help with your studies through tutoring, writing centers, and academic coaching.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
  },
  {
    title: 'Career Development',
    description: 'Access career counseling, job search resources, and internship opportunities.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  },
  {
    title: 'Wellness Programs',
    description: 'Take care of your physical and mental health with our comprehensive wellness services.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
  },
];

export default function Services() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive support services designed to enhance your academic journey and personal growth
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}