import '../../styles/home/index.css';
import {
  ArrowRight,
  FileText,
  Github,
  Link,
  Linkedin,
  Mail,
} from 'lucide-react';
import React from 'react';

const GithubLink = () => {
  return (
    <a
      href='https://github.com/he1l0world'
      target='_blank'
      rel='noopener noreferrer'
      className='text-white hover:text-indigo-300 transition-colors'
    >
      <Github className='h-8 w-8' />
    </a>
  );
};
const LinkedIn = () => {
  return (
    <a
      href='https://linkedin.com/in/suyang-chen'
      target='_blank'
      rel='noopener noreferrer'
      className='text-white hover:text-indigo-300 transition-colors'
    >
      <Linkedin className='h-8 w-8' />
    </a>
  );
};

const Email = () => {
  return (
    <a
      href='mailto:dawson0xff@gmail.com'
      className='text-white hover:text-indigo-300 transition-colors'
    >
      <Mail className='h-8 w-8' />
    </a>
  );
};

const Resume = () => {
  return (
    <a
      href='/assets/resume/Suyang_Chen_Resume.pdf'
      target='_blank'
      rel='noopener noreferrer'
      className='text-white hover:text-indigo-300 transition-colors'
    >
      <FileText className='h-8 w-8' />
    </a>
  );
};

const HeadLine = () => {
  return (
    <div className='hero-section-home flex items-center justify-center'>
      <div className='text-center text-white px-4'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 animate-fade-in'>
          Suyang Chen
        </h1>
        <p className='text-xl md:text-2xl mb-8 opacity-90'>
          Software Engineer | Full Stack Developer
        </p>
        <div className='flex justify-center space-x-6'>
          <GithubLink />
          <LinkedIn />
          <Email />
          <Resume />
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className='text-center mb-16'>
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
        About Me
      </h2>
      <div className='w-24 h-1 bg-indigo-600 mx-auto'></div>
      <p className='mt-8 text-xl text-gray-600 max-w-3xl mx-auto'>
        I'm Suyang Chen, a Software Engineer with a strong background in both
        front-end and back-end development. I earned my Bachelor's in Computer
        Science from the University of Arizona and am currently pursuing my
        Master's in Computer Science at The City College of New York. With
        professional experience at Goldman Sachs developing high-performance
        trading platforms and distributed systems, along with hands-on startup
        experience as a co-founder, I'm now seeking a full-time opportunity to
        drive innovative projects and build robust, scalable software solutions.
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center'>
        Featured Projects
      </h2>
      <div className='w-24 h-1 bg-indigo-600 mx-auto mb-12'></div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Link
          to='/projects/restaurant'
          className='bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl'
        >
          <div className='relative h-48 overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              alt='Restaurant Project'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='p-6'>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              Restaurant Ordering System
            </h3>
            <p className='text-gray-600 mb-4'>
              A modern restaurant ordering system built with React, Redux, and
              TypeScript.
            </p>
            <div className='flex items-center text-indigo-600 font-medium'>
              View Project <ArrowRight className='ml-2 h-4 w-4' />
            </div>
          </div>
        </Link>

        {/* Add more project cards here */}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className='min-h-screen bg-white'>
      <HeadLine />

      <div className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <AboutMe />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
