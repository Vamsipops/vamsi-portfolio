import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Data Analytics',
    school: 'San Jose State University',
    location: 'San Jose, California, USA',
    period: 'Aug 2021 – May 2023',
  },
  {
    degree: 'Bachelor of Technology in Mechanical Engineering',
    school: 'Gokaraju Rangaraju Institute of Technology',
    location: 'Hyderabad, India',
    period: 'Aug 2015 – April 2019',
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.degree} className="bg-white p-6 rounded-lg shadow-sm card-hover">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-600">{edu.degree}</h3>
            </div>
            <div className="space-y-2 ml-9">
              <p className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{edu.school}, {edu.location}</span>
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{edu.period}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}