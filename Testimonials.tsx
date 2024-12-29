import React from 'react';

const testimonials = [
  {
    quote: "The AI solutions provided transformed our business operations completely. Efficiency increased by 300%.",
    name: "Sarah Johnson",
    role: "CEO, TechForward",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "Their workflow automation expertise helped us save countless hours and reduce operational costs.",
    name: "Michael Chen",
    role: "CTO, InnovateNow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "The custom AI solution they developed exceeded our expectations in every way possible.",
    name: "Emily Rodriguez",
    role: "Director, FutureScale",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl 
              transition-all duration-300 transform hover:scale-105">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-6 object-cover"
              />
              <p className="text-black mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}