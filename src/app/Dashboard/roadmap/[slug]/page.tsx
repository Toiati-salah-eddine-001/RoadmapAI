import React from 'react';
import { notFound } from 'next/navigation';
import { roadmapCards } from '@/Data_Fake/DataRoadMap';
import SectionCard from '@/components/DashComponent/SectionCard';

interface PageProps {
  params: {
    slug: string;
  };
}

// Mock roadmap data - in a real app, this would come from a database
const mockRoadmapData = {
  frontend: {
    title: "Frontend Development Roadmap",
    description: "A comprehensive guide to becoming a modern frontend developer",
    sections: [
      {
        title: "HTML & CSS Fundamentals",
        summary: "Learn the building blocks of web development",
        order: 1,
        steps: [
          {
            title: "HTML Basics",
            description: "Learn HTML structure, semantic elements, and forms",
            duration: "2-3 weeks",
            resources: [
              { type: 'article' as const, title: 'MDN HTML Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
              { type: 'video' as const, title: 'HTML Crash Course', url: '#' }
            ]
          },
          {
            title: "CSS Styling",
            description: "Master CSS selectors, layouts, and responsive design",
            duration: "3-4 weeks",
            resources: [
              { type: 'article' as const, title: 'CSS Grid Layout', url: '#' },
              { type: 'course' as const, title: 'Advanced CSS', url: '#' }
            ]
          }
        ]
      },
      {
        title: "JavaScript Programming",
        summary: "Learn modern JavaScript and ES6+ features",
        order: 2,
        steps: [
          {
            title: "JavaScript Fundamentals",
            description: "Variables, functions, objects, and control structures",
            duration: "4-5 weeks",
            resources: [
              { type: 'article' as const, title: 'JavaScript.info', url: '#' },
              { type: 'video' as const, title: 'Modern JavaScript', url: '#' }
            ]
          }
        ]
      }
    ]
  },
  backend: {
    title: "Backend Development Roadmap",
    description: "Master server-side development and APIs",
    sections: [
      {
        title: "Programming Fundamentals",
        summary: "Learn a backend programming language",
        order: 1,
        steps: [
          {
            title: "Choose Your Language",
            description: "Python, Node.js, Java, or Go - pick your path",
            duration: "1-2 weeks",
            resources: [
              { type: 'article' as const, title: 'Backend Language Comparison', url: '#' }
            ]
          }
        ]
      }
    ]
  }
};

export default function RoadmapPage({ params }: PageProps) {
  const roadmap = mockRoadmapData[params.slug as keyof typeof mockRoadmapData];
  
  if (!roadmap) {
    notFound();
  }

  return (
    <div 
      className="min-h-screen p-4"
      style={{
        background: 'linear-gradient(135deg, var(--color-Background) 0%, var(--color-Neutral1) 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--color-Neutral2)' }}
          >
            {roadmap.title}
          </h1>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-Neutral3)' }}
          >
            {roadmap.description}
          </p>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-8">
          {roadmap.sections.map((section, index) => (
            <SectionCard key={index} section={section} />
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <a 
            href="/Dashboard/PromptPage"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-Primary)',
              color: 'var(--color-Neutral2)',
            }}
          >
            ← Back to Roadmaps
          </a>
        </div>
      </div>
    </div>
  );
} 