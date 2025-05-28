import React from 'react';
import { CheckCircle } from 'lucide-react'; // Optional icon library (requires lucide-react)

function HowItWorks() {
  const steps = [
    {
      title: 'Sign Up',
      description: 'Create your account in just a few clicks. It’s fast and secure.',
    },
    {
      title: 'Choose a Plan',
      description: 'Pick a plan that suits your needs. Monthly and annual options available.',
    },
    {
      title: 'Enjoy the Features',
      description: 'Access all tools and features tailored to simplify your workflow.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">How It Works</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Get started in 3 simple steps. It’s easy, quick, and designed for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

