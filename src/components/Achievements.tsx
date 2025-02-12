import React from 'react';
import { Trophy } from 'lucide-react';

const achievements = [
  'Achieved first place at the department level in the Smart India Hackathon with a project focused on a Negative Pressure Irrigation System.',
  'Volunteered for election duty during the Andhra Pradesh General Election in 2015.',
];

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Achievements & Volunteering</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-blue-600">Highlights</h3>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-9">
          {achievements.map((achievement, index) => (
            <li key={index} className="leading-relaxed hover:text-gray-800 transition-colors">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}