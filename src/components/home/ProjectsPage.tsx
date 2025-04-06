import { ArrowRight, Link } from "lucide-react";
import React from "react";

const ProjectsPage = () => {

    return (
        <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-xl text-gray-600">Explore my latest work and practice projects</p>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              to="/projects/restaurant"
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Restaurant Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Restaurant Ordering System
                </h3>
                <p className="text-gray-600 mb-4">
                  A full-featured restaurant ordering system built with React, Redux, and TypeScript.
                  Features include menu browsing, cart management, and a modern UI design.
                </p>
                <div className="flex items-center text-indigo-600 font-medium">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
  
            {/* Add more project cards here */}
          </div>
        </div>
      </div>
    );
}

export default ProjectsPage;