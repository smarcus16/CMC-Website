import React from 'react';
import { 
  Stethoscope, Baby, Heart, Activity, Syringe, 
  Microscope, Thermometer, Users, Shield, Eye 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: 'Primary Care',
      description: 'Comprehensive primary healthcare for adults, including routine check-ups, physical examinations, and management of common health conditions.',
      features: ['Annual Physicals', 'Sick Visits', 'Health Screenings', 'Preventive Care'],
    },
    {
      icon: <Baby className="w-12 h-12" />,
      title: 'Pediatric Care',
      description: 'Specialized medical care for infants, children, and adolescents, from well-child visits to treating acute illnesses.',
      features: ['Well-Child Visits', 'Immunizations', 'School Physicals', 'Growth & Development'],
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Chronic Disease Management',
      description: 'Ongoing care and support for patients with chronic conditions to improve health outcomes and quality of life.',
      features: ['Diabetes Care', 'Hypertension Management', 'Asthma Care', 'Heart Disease'],
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'Preventive Medicine',
      description: 'Proactive healthcare services designed to prevent illness and promote long-term wellness.',
      features: ['Health Screenings', 'Wellness Programs', 'Nutrition Counseling', 'Lifestyle Management'],
    },
    {
      icon: <Syringe className="w-12 h-12" />,
      title: 'Immunizations',
      description: 'Complete vaccination services for children and adults, including flu shots and travel vaccines.',
      features: ['Childhood Vaccines', 'Adult Vaccines', 'Flu Shots', 'Travel Immunizations'],
    },
    {
      icon: <Microscope className="w-12 h-12" />,
      title: 'Laboratory Services',
      description: 'On-site laboratory testing for accurate and timely diagnostic results.',
      features: ['Blood Tests', 'Urinalysis', 'Rapid Testing', 'Screening Tests'],
    },
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: 'Acute Care',
      description: 'Immediate treatment for sudden illnesses and injuries that require prompt attention.',
      features: ['Illness Treatment', 'Minor Injuries', 'Infections', 'Urgent Conditions'],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Family Medicine',
      description: 'Comprehensive healthcare for the entire family, from newborns to seniors.',
      features: ['All Ages Welcome', 'Family Planning', 'Geriatric Care', 'Women\'s Health'],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Special Needs Care',
      description: 'Specialized services for children and adults with developmental disabilities and special healthcare needs.',
      features: ['ADHD Screening', 'Autism Screening', 'Developmental Support', 'Care Coordination'],
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: 'Telehealth Services',
      description: 'Virtual healthcare consultations from the comfort and safety of your home. Connect with our providers remotely for many types of appointments.',
      features: ['Video Consultations', 'Remote Monitoring', 'Follow-up Visits', 'Prescription Refills'],
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: 'Health Education',
      description: 'Patient education and resources to help you make informed decisions about your health.',
      features: ['Disease Prevention', 'Wellness Education', 'Medication Management', 'Health Resources'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1611764461465-09162da6465a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2MDU4NzU0OHww&ixlib=rb-4.1.0&q=85" 
            alt="Healthcare services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive healthcare services tailored to meet the diverse needs of our community
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6">
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                What to Expect During Your Visit
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">New Patients</h3>
                  <p>
                    We welcome new patients! Please bring a valid ID, insurance card (if applicable), 
                    and a list of current medications. Arrive 15 minutes early to complete registration forms.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Insurance & Payment</h3>
                  <p>
                    We accept most major insurance plans, Medicare, and Medicaid. We also offer a sliding 
                    fee scale based on family size and income for uninsured patients. Payment plans are available.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Scheduling</h3>
                  <p>
                    Appointments can be scheduled by calling our office. We also accept walk-ins, though 
                    wait times may vary. Same-day appointments are often available for urgent needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Centered Care</h3>
                  <p>
                    Our approach focuses on treating the whole person - physical, mental, and emotional health. 
                    We take time to listen to your concerns and involve you in all healthcare decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg" 
                alt="Medical appointment" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Medical Care?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our team is ready to provide you with the quality healthcare you deserve
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:386-775-0333"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Call: (386) 775-0333
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Contact Us Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
