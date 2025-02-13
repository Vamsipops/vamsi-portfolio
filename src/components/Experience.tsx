import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Associate Director/Software Engineer',
    company: 'Lexim AI',
    location: 'Cupertino, California, USA',
    period: 'Sep 2023 – Jan 2025',
    achievements: [
      'Engineered and maintained a MySQL database with 50+ tables and views, optimizing data retrieval efficiency by 40% through stored procedures and indexing strategies.',
      'Integrated Elasticsearch for full-text and semantic search, enhancing search accuracy by 35% and reducing query response time by 50%.',
      'Designed and structured 20+ Dimension and Fact tables, improving analytical query performance by 60% in data warehousing.',
      'Built 100+ REST APIs using Flask and Fast API, facilitating seamless communication between services and handling 20K+ monthly requests with minimal latency.',
      'Designed and implemented server-side pagination and search functionalities, improving data retrieval speeds by 80% using MySQL stored procedures.',
      'Developed Retrieval-Augmented Generation (RAG) pipelines for document processing, integrating OpenAI and Elasticsearch, reducing manual document review efforts by 70%.',
      'Automated document summarization and FAQ generation using prompt engineering with Gemini and OpenAI, cutting down content analysis time by 50%.',
      'Deployed Flask applications in Docker containers on AWS LightSail, reducing infrastructure costs by 30% while improving scalability.',
      'Automated 15+ data workflows with AWS Lambda and LightSail, eliminating 90% of manual intervention in scheduling and processing tasks.',
      'Utilized React to implement critical front-end functionalities (login, logout, and home page) ensuring a cohesive full stack solution.',
    ],
  },
  {
    title: 'Associate Systems Engineer',
    company: 'TCS',
    location: 'Kolkata, West Bengal, India',
    period: 'May 2019 – Aug 2023',
    achievements: [
      'Engineered and sustained SAP Billing support, enhancements, and reporting for ENMAX (Canada based utility client), reducing incident resolution times by 25% across 6 cross-functional teams.',
      'Optimized SAP ABAP enhancements in an Agile, test-driven setting, elevating system uptime by 15% while delivering tailored solutions within the SAP ISU module.',
      'Streamlined incident management by constructing ServiceNow dashboards that monitored over 100 monthly incidents, accelerating response times by 25%.',
      'Executed monthly production updates for all utility rate types, ensuring 100% on-time deployment for more than 100 rate entries per cycle.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.title} className="bg-white p-6 rounded-lg shadow-sm card-hover">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
              </div>
              <div className="flex flex-wrap gap-4 text-gray-600 ml-8">
                <p className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </p>
                <p className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {exp.company} | {exp.location}
                </p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-8">
              {exp.achievements.map((achievement, index) => (
                <li key={index} className="leading-relaxed hover:text-gray-800 transition-colors">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}