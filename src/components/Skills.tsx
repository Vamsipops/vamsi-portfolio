import React from 'react';
import { Code2, Database, Brain, Cloud, Network, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Development',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['Python', 'Java', 'Flask (API Development)', 'Fast API', 'Streamlit', 'React'],
  },
  {
    title: 'Databases & Search',
    icon: <Database className="w-6 h-6" />,
    skills: ['MySQL', 'Elasticsearch', 'ChromDB', 'Pinecone', 'MongoDB'],
  },
  {
    title: 'Generative AI & Data Science',
    icon: <Brain className="w-6 h-6" />,
    skills: ['RAG', 'Vector Search', 'Prompt Engineering', 'Document Chunking', 'Embeddings', 'Tableau'],
  },
  {
    title: 'Cloud & Enterprise Tools',
    icon: <Cloud className="w-6 h-6" />,
    skills: ['AWS (Lambda, LightSail, RDS, S3, CloudWatch, SNS, SES)', 'Docker', 'Google APIs', 'ServiceNow', 'Jira'],
  },
  {
    title: 'Data Engineering',
    icon: <Network className="w-6 h-6" />,
    skills: ['Fact and Dimension Table Design', 'Data Transformation & Migration', 'Micro-services Architecture'],
  },
  {
    title: 'Interpersonal Skills',
    icon: <Users className="w-6 h-6" />,
    skills: ['Team Player', 'Empathetic', 'Grit', 'Conflict Resolution'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-white p-6 rounded-lg shadow-sm card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-blue-600">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-600">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}