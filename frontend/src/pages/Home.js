import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Shield, Calendar, Stethoscope, Baby, Activity } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Primary Care',
      description: 'Comprehensive primary healthcare services for adults and families.',
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Pediatric Care',
      description: 'Specialized care for children from infancy through adolescence.',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Preventive Medicine',
      description: 'Health screenings, immunizations, and wellness programs.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Chronic Disease Management',
      description: 'Ongoing care for diabetes, hypertension, and other conditions.',
    },
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Compassionate Care',
      description: 'We treat every patient with dignity, respect, and genuine concern for their wellbeing.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Community Focused',
      description: 'Dedicated to serving the underserved populations of West Volusia with quality healthcare.',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Quality & Safety',
      description: 'Committed to the highest standards of medical care and patient safety.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white pt-32 pb-20 px-4 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHw0fHxkb2N0b3IlMjBwYXRpZW50fGVufDB8fHx8MTc2MDU4NzU1M3ww&ixlib=rb-4.1.0&q=85" 
            alt="Healthcare professionals" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Quality Healthcare for Our Community
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Providing accessible, compassionate primary care to West Volusia families. Your health, our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
                >
                  Schedule Appointment
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <a
                  href="tel:386-775-0333"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
                >
                  Call: (386) 775-0333
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 bg-white/30 rounded-lg p-4">
                      <Calendar className="w-10 h-10" />
                      <div>
                        <p className="font-semibold">Walk-ins Welcome</p>
                        <p className="text-sm text-blue-100">No appointment needed</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-white/30 rounded-lg p-4">
                      <Shield className="w-10 h-10" />
                      <div>
                        <p className="font-semibold">Accepting New Patients</p>
                        <p className="text-sm text-blue-100">All insurance accepted</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-white/30 rounded-lg p-4">
                      <Users className="w-10 h-10" />
                      <div>
                        <p className="font-semibold">2 Convenient Locations</p>
                        <p className="text-sm text-blue-100">Orange City & DeLand</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to meet the needs of our diverse community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                The Community Medical Center of West Volusia is dedicated to providing accessible, quality primary 
                healthcare services to the underserved populations of West Volusia, Florida.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We believe in treating the whole person - body, mind, and spirit - with compassion and respect, 
                regardless of social or economic status.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50fGVufDB8fHx8MTc2MDU4NzU1M3ww&ixlib=rb-4.1.0&q=85" 
                alt="Doctor with patient" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule your appointment today or visit one of our convenient locations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:386-775-0333"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Call: (386) 775-0333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
