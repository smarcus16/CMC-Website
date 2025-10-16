import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Shield, Calendar, Stethoscope, Baby, Activity, Phone } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Internal Medicine',
      description: 'Comprehensive adult healthcare for all your primary care needs.',
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Pediatric Care',
      description: 'Complete healthcare for children from birth through adolescence.',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Telehealth Services',
      description: 'Virtual healthcare consultations from the comfort of your home.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Chronic Disease Management',
      description: 'Ongoing support for diabetes, hypertension, asthma, and more.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 text-white pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHw0fHxkb2N0b3IlMjBwYXRpZW50fGVufDB8fHx8MTc2MDU4NzU1M3ww&ixlib=rb-4.1.0&q=85" 
            alt="Family healthcare" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Family Healthcare You Can Trust
              </h1>
              <p className="text-xl mb-4 text-blue-50">
                Serving West Volusia families with compassionate primary care for all ages.
              </p>
              <p className="text-lg mb-8 text-blue-100">
                Rural Health Clinic • Medicaid Accepted • Walk-ins Welcome • Telehealth Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:386-775-1792"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Phone className="mr-2" size={20} />
                  Call: (386) 775-1792
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
                >
                  Contact Us
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                      <Shield size={24} />
                    </div>
                    <div className="text-gray-700">
                      <p className="font-semibold">Rural Health Clinic</p>
                      <p className="text-sm">Serving underserved communities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                      <Users size={24} />
                    </div>
                    <div className="text-gray-700">
                      <p className="font-semibold">Medicaid Accepted</p>
                      <p className="text-sm">Sunshine, Humana, FL Community Care</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                      <Calendar size={24} />
                    </div>
                    <div className="text-gray-700">
                      <p className="font-semibold">2 Convenient Locations</p>
                      <p className="text-sm">Orange City & DeLand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg" 
                alt="Family at medical center" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Our Family Practice</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At Community Medical Center of West Volusia, we specialize in providing quality primary healthcare to families in our rural community. Our board-certified physicians and nurse practitioners treat patients from birth through adulthood.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a Rural Health Clinic, we are committed to serving underserved populations with comprehensive care—including well-child visits, sports physicals, immunizations, and treatment for both acute and chronic conditions.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">We Accept Medicaid HMO Plans:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> Sunshine Health</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> Humana</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> Florida Community Care</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> UnitedHealthcare (Coming Soon)</li>
                </ul>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services for the whole family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-blue-600 mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-lg"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Providers Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Providers</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Experienced, compassionate healthcare professionals dedicated to your family's wellbeing
          </p>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">MA</div>
              <h3 className="font-semibold text-gray-900">Dr. Marcelo Anayas</h3>
              <p className="text-sm text-gray-600">Internal Medicine</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
              <div className="w-20 h-20 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">CA</div>
              <h3 className="font-semibold text-gray-900">Dr. Concepcion Anayas</h3>
              <p className="text-sm text-gray-600">Pediatrics</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">PP</div>
              <h3 className="font-semibold text-gray-900">Dr. Pam Perry</h3>
              <p className="text-sm text-gray-600">Pediatrics</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
              <div className="w-20 h-20 bg-teal-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">SR</div>
              <h3 className="font-semibold text-gray-900">Sherene Roach</h3>
              <p className="text-sm text-gray-600">Pediatrics, ARNP</p>
            </div>
          </div>
          <Link
            to="/providers"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Meet All Our Providers
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule your appointment today at one of our convenient locations
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <h3 className="font-bold text-xl mb-2">Orange City Office</h3>
              <p className="text-blue-100 mb-2">810 Commed Blvd.<br />Orange City, FL 32763</p>
              <a href="tel:386-775-1792" className="text-white font-semibold text-lg hover:text-blue-100">(386) 775-1792</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <h3 className="font-bold text-xl mb-2">DeLand Office</h3>
              <p className="text-blue-100 mb-2">1190 N. Stone St.<br />DeLand, FL 32720</p>
              <a href="tel:386-738-1792" className="text-white font-semibold text-lg hover:text-blue-100">(386) 738-1792</a>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Contact Us Online
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;