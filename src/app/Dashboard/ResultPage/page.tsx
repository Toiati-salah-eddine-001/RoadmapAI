"use client"
import { useState, useEffect } from 'react';
import RoadmapHeader from '@/components/DashComponent/RoadmapHead';
import SectionCard from '@/components/DashComponent/SectionCard';
// import { RoadmapData } from '@/shared/types';

const sampleRoadmap: RoadmapData = {
    roadmap: {
        title: "Frontend Development Roadmap",
        description: "A comprehensive step-by-step guide to becoming a proficient frontend developer, covering everything from basic HTML to advanced frameworks.",
        domain: "Frontend Development",
        estimated_duration: "6 months",
        created_at: "2025-08-11T15:00:00Z",
        sections: [
            {
                title: "Beginner Level",
                summary: "Learn the basic building blocks of the web - HTML, CSS, and fundamental concepts.",
                order: 1,
                steps: [
                    {
                        title: "Learn HTML Basics",
                        description: "Understand HTML structure, elements, attributes, and semantic tags. Master the foundation of web content structure and accessibility best practices.",
                        duration: "1 week",
                        resources: [
                            { type: "article", title: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                            { type: "video", title: "HTML Crash Course", url: "https://youtube.com/html-course" },
                            { type: "course", title: "HTML5 Fundamentals", url: "https://example.com/html5-course" }
                        ]
                    },
                    {
                        title: "Learn CSS Basics",
                        description: "Master styling, colors, fonts, layouts, and responsive design. Learn modern CSS techniques including Flexbox and Grid.",
                        duration: "2 weeks",
                        resources: [
                            { type: "course", title: "CSS Flexbox and Grid", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
                            { type: "article", title: "CSS Grid Complete Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
                            { type: "video", title: "CSS Animation Tutorial", url: "https://youtube.com/css-animations" }
                        ]
                    },
                    {
                        title: "Build Your First Website",
                        description: "Apply your HTML and CSS knowledge to create a complete responsive website from scratch.",
                        duration: "1 week",
                        resources: [
                            { type: "article", title: "Project Ideas for Beginners", url: "https://example.com/project-ideas" },
                            { type: "video", title: "Building a Portfolio Site", url: "https://youtube.com/portfolio-tutorial" }
                        ]
                    }
                ]
            },
            {
                title: "Intermediate Level",
                summary: "Get comfortable with JavaScript programming and modern development workflows.",
                order: 2,
                steps: [
                    {
                        title: "JavaScript Fundamentals",
                        description: "Learn variables, functions, DOM manipulation, ES6+ features, async programming, and modern JavaScript patterns.",
                        duration: "3 weeks",
                        resources: [
                            { type: "article", title: "JavaScript Info", url: "https://javascript.info/" },
                            { type: "course", title: "Modern JavaScript Course", url: "https://example.com/js-course" },
                            { type: "video", title: "JavaScript ES6+ Features", url: "https://youtube.com/es6-tutorial" }
                        ]
                    },
                    {
                        title: "Version Control with Git",
                        description: "Master Git version control system, GitHub workflows, and collaborative development practices.",
                        duration: "1 week",
                        resources: [
                            { type: "article", title: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
                            { type: "video", title: "Git & GitHub Tutorial", url: "https://youtube.com/git-tutorial" }
                        ]
                    },
                    {
                        title: "Package Managers & Build Tools",
                        description: "Learn npm, webpack, and modern development tools for efficient frontend development.",
                        duration: "1 week",
                        resources: [
                            { type: "article", title: "NPM Guide", url: "https://docs.npmjs.com/" },
                            { type: "course", title: "Webpack Tutorial", url: "https://example.com/webpack-course" }
                        ]
                    }
                ]
            },
            {
                title: "Advanced Level",
                summary: "Master modern frameworks, state management, and advanced frontend architectures.",
                order: 3,
                steps: [
                    {
                        title: "React Fundamentals",
                        description: "Learn React components, hooks, state management, and modern React patterns for building dynamic user interfaces.",
                        duration: "4 weeks",
                        resources: [
                            { type: "article", title: "React Official Docs", url: "https://react.dev/" },
                            { type: "course", title: "Complete React Course", url: "https://example.com/react-course" },
                            { type: "video", title: "React Hooks Deep Dive", url: "https://youtube.com/react-hooks" }
                        ]
                    },
                    {
                        title: "State Management",
                        description: "Master Redux, Context API, and other state management solutions for complex applications.",
                        duration: "2 weeks",
                        resources: [
                            { type: "article", title: "Redux Toolkit Guide", url: "https://redux-toolkit.js.org/" },
                            { type: "course", title: "State Management Masterclass", url: "https://example.com/state-management" }
                        ]
                    },
                    {
                        title: "Testing & Deployment",
                        description: "Learn unit testing, integration testing, and deployment strategies for production applications.",
                        duration: "2 weeks",
                        resources: [
                            { type: "article", title: "Testing Library Docs", url: "https://testing-library.com/" },
                            { type: "video", title: "Deployment Best Practices", url: "https://youtube.com/deployment-guide" }
                        ]
                    }
                ]
            }
        ]
    }
};

export default function Home() {
    const [roadmapData, setRoadmapData] = useState<RoadmapData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data
        const timer = setTimeout(() => {
            setRoadmapData(sampleRoadmap);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-500"></div>
            </div>
        );
    }

    if (!roadmapData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">No roadmap found</h2>
                    <p className="text-gray-600">Please check back later.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <RoadmapHeader
                    title={roadmapData.roadmap.title}
                    description={roadmapData.roadmap.description}
                    domain={roadmapData.roadmap.domain}
                    estimated_duration={roadmapData.roadmap.estimated_duration}
                    created_at={roadmapData.roadmap.created_at}
                />

                <div className="space-y-8">
                    {roadmapData.roadmap.sections
                        .sort((a, b) => a.order - b.order)
                        .map((section, index) => (
                            <SectionCard key={index} section={section} />
                        ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
                        <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-600">
              You've reached the end of this roadmap
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
