import React from 'react';
import { Lightbulb, PenTool as Tool } from 'lucide-react';

const projects = [
  {
    title: 'Data-Driven Analysis and Prediction Models for Solar Power',
    icon: <Lightbulb className="w-6 h-6" />,
    points: [
      'Devised and validated robust regression models for forecasting solar power generation using Python, Pandas, XGBoost, and an LSTM+CNN architecture—achieving an R2 score exceeding 0.92 and boosting prediction accuracy by 20%.',
      'Enhanced dataset integrity by applying advanced interpolation and imputation techniques with Pandas, increasing data completeness by 30% and ensuring reliable inputs for subsequent analysis with Tableau.',
      'Constructed an interactive user interface using Streamlit for real-time visualization of solar power trends, expediting insights and reducing analysis turnaround time by 30%.',
    ],
  },
  {
    title: 'Design and Manufacturing of All-Terrain Vehicle (SAE BAJA)',
    icon: <Tool className="w-6 h-6" />,
    period: 'Aug 2016 - Feb 2019',
    points: [
      'Led the design, manufacturing, and assembly of an All-Terrain Vehicle meeting competition requirements.',
      'Progressed from junior member to club captain over three years, taking on leadership and strategic planning roles.',
      'Managed a project budget of $20,000–$25,000, overseeing material procurement and engaging with over 20 vendors for machining and custom parts manufacturing.',
      'Participated in six national SAE competitions, achieving a notable second-place finish in one event.',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Projects</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white p-6 rounded-lg shadow-sm card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-blue-600">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
            </div>
            {project.period && (
              <p className="text-gray-500 mb-4 ml-9">{project.period}</p>
            )}
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-9">
              {project.points.map((point, index) => (
                <li key={index} className="leading-relaxed hover:text-gray-800 transition-colors">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}