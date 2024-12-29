import React from 'react';
import { Workflow, Brain, Code } from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Streamline your operations with intelligent automation solutions that save time and reduce errors.'
  },
  {
    icon: Brain,
    title: 'AI Consulting',
    description: 'Expert guidance on implementing AI strategies that align with your business objectives.'
  },
  {
    icon: Code,
    title: 'Custom AI Solutions',
    description: 'Tailored AI applications designed specifically for your unique business challenges.'
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl 
              transition-all duration-300 transform hover:-translate-y-1">
              <service.icon className="w-12 h-12 mb-6 text-black" />
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}