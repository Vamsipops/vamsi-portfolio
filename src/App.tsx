import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-16 max-w-6xl">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        
        <footer className="py-8 text-center border-t">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/Vamsipops" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/vamsipopuri" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:vamsipopuri1997@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:408-592-4482" className="text-gray-600 hover:text-gray-900">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600">© 2024 Vamsi Krishna Popuri. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;