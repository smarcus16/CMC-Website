import React from 'react';
import { Heart, Target, Award, Users, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '25+', label: 'Years of Service' },
    { number: '10,000+', label: 'Patients Served' },
    { number: '2', label: 'Convenient Locations' },
    { number: '100%', label: 'Community Focused' },
  ];

  const team = [
    {
      role: 'Medical Director',
      description: 'Board-certified physicians leading our team with years of experience in primary care.',
    },
    {
      role: 'Nursing Staff',
      description: 'Compassionate registered nurses and medical assistants dedicated to patient care.',
    },
    {
      role: 'Support Team',
      description: 'Administrative professionals ensuring smooth operations and excellent patient experience.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Committed to providing accessible, quality healthcare to the West Volusia community since 1998
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Community Medical Center of West Volusia is dedicated to providing accessible, quality primary 
                healthcare services to the underserved populations of West Volusia, Florida. We strive to address 
                the body, mind, and spirit of every patient with compassion and respect, regardless of their social 
                or economic status.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-teal-600 text-white p-3 rounded-lg mr-4">
                  <Award size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the premier community healthcare provider in West Volusia, recognized for our commitment to 
                accessible, high-quality medical care, prevention-focused services, and our dedication to improving 
                the health and wellbeing of every individual in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Community Medical Center of West Volusia was established in 1998 with a simple yet powerful mission: 
                  to ensure that quality healthcare is accessible to everyone in our community, regardless of their 
                  ability to pay.
                </p>
                <p>
                  Over the past two decades, we have grown from a small clinic to a comprehensive healthcare center 
                  serving thousands of patients across West Volusia. Our commitment to preventive care, chronic disease 
                  management, and patient education has helped improve health outcomes for countless families.
                </p>
                <p>
                  Today, with two convenient locations in Orange City and DeLand, we continue to expand our services 
                  to meet the evolving needs of our community. From pediatric care to adult primary care, our dedicated 
                  team of healthcare professionals works tirelessly to ensure every patient receives compassionate, 
                  quality care.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2MDU4NzU0OHww&ixlib=rb-4.1.0&q=85" 
                alt="Healthcare professional" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg" 
                alt="Medical team" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced healthcare professionals dedicated to your wellbeing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-4 rounded-lg mb-6 inline-block">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{member.role}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart size={32} />,
                title: 'Compassion',
                description: 'We treat every patient with empathy, dignity, and genuine care.',
              },
              {
                icon: <Shield size={32} />,
                title: 'Integrity',
                description: 'We uphold the highest ethical standards in all our interactions.',
              },
              {
                icon: <Users size={32} />,
                title: 'Community',
                description: 'We are dedicated to serving and improving our local community.',
              },
              {
                icon: <Award size={32} />,
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of patient care.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
