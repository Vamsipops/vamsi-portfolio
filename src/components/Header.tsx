import React from 'react';
import { Github, Linkedin, Mail, Phone, Code, Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="gradient-animate text-white min-h-[60vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 animate-float">
          <Terminal className="w-16 h-16" />
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Code className="w-12 h-12" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Terminal className="w-8 h-8" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="typing-effect mb-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Vamsi Krishna Popuri</h1>
        </div>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4 items-center">
            <a href="mailto:vamsipopuri1997@gmail.com" 
               className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
              <Mail className="w-4 h-4" /> vamsipopuri1997@gmail.com
            </a>
            <a href="tel:408-592-4482" 
               className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
              <Phone className="w-4 h-4" /> 408-592-4482
            </a>
            <a href="https://github.com/Vamsipops" 
               className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
              <Github className="w-4 h-4" /> github.com/Vamsipops
            </a>
            <a href="https://linkedin.com/in/vamsipopuri" 
               className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
              <Linkedin className="w-4 h-4" /> linkedin.com/in/vamsipopuri
            </a>
          </div>
          <p className="text-xl max-w-3xl leading-relaxed">
            Software Engineer with 4 years of experience specializing in full-stack development,
            data engineering, and AI/ML solutions. Based in Milpitas, CA.
          </p>
        </div>
      </div>
    </header>
  );
}