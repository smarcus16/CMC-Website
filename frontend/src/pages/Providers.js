import React from 'react';
import { Stethoscope, GraduationCap, Award } from 'lucide-react';

const Providers = () => {
  const providers = [
    {
      name: 'Dr. Marcelo Anayas',
      credentials: 'M.D.',
      specialty: 'Internal Medicine',
      image: 'https://www.cmcwv.com/images/providers/marcelo_anayas.jpg',
      bio: [
        'Dr. M. Anayas graduated from Cebu Institute of Medicine in 1975. He completed his residency and internship at Bon Secours Hospital, in Michigan. His practice has been predominantly focused in serving the underserved areas and providing healthcare to the rural population.',
        'He is a founding partner and Medical Director of the Community Medical Center of West Volusia. The founding President of Missionaries of Hope, a non-profit organization and medical missionary devoted to the well-being, education and spiritual growth, of those in need in the underprivileged areas.',
        'He is a front-runner in the campaign to eliminate the disparities in the healthcare system. Especially on healthcare professional shortages in the underserved areas. Dr. M. Anayas gave a speech during the 2008-2010 National Summit of Clinicians for Healthcare Justice in Washington, DC.',
        'Dr. M. Anayas is a member of the Association of Clinicians for the Underserved, Florida Medical Association and the American Medical Association.'
      ]
    },
    {
      name: 'Dr. Concepcion Anayas',
      credentials: 'M.D.',
      specialty: 'Pediatrics',
      image: 'https://www.cmcwv.com/images/providers/concepcion_anayas.jpg',
      bio: [
        'Dr. C Anayas is a founding partner and the Head of Pediatrics of Community Medical Center of West Volusia. She is Board-Certified by the American Board of Pediatrics. Dr. C. Anayas graduated from Cebu Institute of Medicine in the Philippines. She did her residency training in Pediatrics at Mt. Carmel Mercy Hospital and completed her Internship at South Macomb Hospital and Detroit Memorial Hospital in Michigan.',
        'In addition, she co-founded the MOH, and has been involved in rural healthcare since 1975 from her native country, Philippines until now here in the U.S. She co-authored a poster presentation on "A Comprehensive Approach to Address Healthcare Providers\' Shortage in the US", during the 2011 Florida Medical Association\'s Annual convention in Orlando, Florida.',
        'She is a member of the American Academy of Pediatrics, Florida Pediatric Society and the Florida Medical Association.'
      ]
    },
    {
      name: 'Dr. Pam Perry',
      credentials: 'ARNP, DNP',
      specialty: 'Pediatrics',
      image: 'https://www.cmcwv.com/images/providers/bernavette_perry.jpg',
      bio: [
        'Dr. Perry graduated Magna Cum Laude from Bethune-Cookman University with a Bachelor\'s degree in Nursing. She continued and completed both her Master of Science in Nursing as well as her Doctorate of Nursing Practice at the University of Florida in Gainesville, with special focus on Childhood Obesity and Children Vaccinations. She holds an additional Certificate in Public Health.',
        'She is currently the Supervising Pediatric Nurse Practitioner of Community Medical Center and concurrently doing preceptorship in Community Medical Center with its affiliated educational institutions like UF, UCF, BCU and many others.',
        'Before she came to Community Medical Center, she used to work with the United Healthcare Providers of Florida, Central Florida Child Health Program and Shands Teaching Hospital.',
        'She is Board-Certified by the Pediatric National Certification Board and is an active member of the Florida Nurses Association, the National Association of Pediatric Nurse Practitioners (NAPNAP), the National Pediatric Asthma Trainer (NPAT), the American Nurses Association and the Reach-Out and Read Special Interest Group.'
      ]
    },
    {
      name: 'Sherene Roach',
      credentials: 'ARNP',
      specialty: 'Pediatrics',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
      bio: [
        'Sherene Roach graduated from Bethune-Cookman University with a Bachelor\'s degree in Nursing and completed her Master of Science in Nursing at the University of Florida in Gainesville.',
        'Her practice is largely on rural health with special focus on Child Immunizations as evidently seen with her eight long years of experience working as a Nurse and then a Nurse Practitioner at the Volusia County Health Department before joining the health team of Community Medical Center in 2004.',
        'She is an active member of the Florida Nurses Association, the National Association of Pediatric Nurse Practitioners (NAPNAP), the American Cancer Society - "Sisters Alive" Breast Cancer Awareness and the National Black Nurses Association.'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc2MDU4NzU0OHww&ixlib=rb-4.1.0&q=85" 
            alt="Healthcare professionals" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Our Providers</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experienced and compassionate healthcare professionals dedicated to serving our community
          </p>
        </div>
      </section>

      {/* Providers Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {providers.map((provider, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative">
                    <img 
                      src={provider.image} 
                      alt={provider.name} 
                      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85';
                      }}
                    />
                    <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                          <Stethoscope size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">{provider.specialty}</p>
                          <p className="text-xs text-gray-500">{provider.credentials}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''} mt-8 md:mt-0`}>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{provider.name}</h2>
                    <p className="text-xl text-blue-600 font-semibold">{provider.credentials} - {provider.specialty}</p>
                  </div>
                  <div className="space-y-4">
                    {provider.bio.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
                      <GraduationCap className="text-blue-600" size={20} />
                      <span className="text-sm text-gray-700 font-medium">Board Certified</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-lg">
                      <Award className="text-teal-600" size={20} />
                      <span className="text-sm text-gray-700 font-medium">Experienced</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Schedule an Appointment</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our experienced providers are ready to serve you and your family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:386-775-1792"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Call: (386) 775-1792
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

export default Providers;