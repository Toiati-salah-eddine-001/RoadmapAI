import { useState, useEffect } from 'react';
import { Roadmap } from '@/shared/types';

interface UseRoadmapsOptions {
    searchTerm?: string;
    domain?: string;
    sortBy?: 'title' | 'created_at';
    sortOrder?: 'asc' | 'desc';
}

// Mock data for development
const mockRoadmaps: Roadmap[] = [
    {
        id: 1,
        title: "Frontend Development Mastery",
        description: "Complete journey from HTML basics to advanced React patterns and modern CSS techniques.",
        domain: "Frontend",
        status: "In Progress",
        created_at: "2024-01-15T10:30:00Z",
        estimated_duration: "6-8 months",
        progress: 45,
    },
    {
        id: 2,
        title: "Backend API Development",
        description: "Learn to build robust REST APIs and GraphQL services with Node.js and Python.",
        domain: "Backend",
        status: "Completed",
        created_at: "2024-01-10T14:20:00Z",
        estimated_duration: "4-6 months",
        progress: 100,
    },
    {
        id: 3,
        title: "DevOps & Cloud Infrastructure",
        description: "Master Docker, Kubernetes, AWS, and CI/CD pipelines for scalable deployments.",
        domain: "DevOps",
        status: "Draft",
        created_at: "2024-01-20T09:15:00Z",
        estimated_duration: "5-7 months",
        progress: 0,
    },
    {
        id: 4,
        title: "Mobile App Development",
        description: "Build cross-platform mobile apps with React Native and Flutter.",
        domain: "Mobile",
        status: "In Progress",
        created_at: "2024-01-12T16:45:00Z",
        estimated_duration: "3-5 months",
        progress: 30,
    },
    {
        id: 5,
        title: "Data Science Fundamentals",
        description: "Learn Python, machine learning, statistics, and data visualization techniques.",
        domain: "Data Science",
        status: "Draft",
        created_at: "2024-01-18T11:30:00Z",
        estimated_duration: "8-12 months",
        progress: 0,
    },
];

export function useRoadmaps(options: UseRoadmapsOptions = {}) {
    const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchRoadmaps = async () => {
        try {
            setLoading(true);
            
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500));
            
            let filteredRoadmaps = [...mockRoadmaps];

            // Apply search filter
            if (options.searchTerm) {
                filteredRoadmaps = filteredRoadmaps.filter(roadmap =>
                    roadmap.title.toLowerCase().includes(options.searchTerm!.toLowerCase()) ||
                    roadmap.description?.toLowerCase().includes(options.searchTerm!.toLowerCase())
                );
            }

            // Apply domain filter
            if (options.domain) {
                filteredRoadmaps = filteredRoadmaps.filter(roadmap =>
                    roadmap.domain.toLowerCase() === options.domain!.toLowerCase()
                );
            }

            // Apply sorting
            if (options.sortBy) {
                filteredRoadmaps.sort((a, b) => {
                    const aValue = a[options.sortBy!];
                    const bValue = b[options.sortBy!];
                    
                    if (options.sortOrder === 'desc') {
                        return bValue > aValue ? 1 : -1;
                    }
                    return aValue > bValue ? 1 : -1;
                });
            }

            setRoadmaps(filteredRoadmaps);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch roadmaps');
        } finally {
            setLoading(false);
        }
    };

    const deleteRoadmap = async (id: number) => {
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 300));
            
            setRoadmaps(prev => prev.filter(roadmap => roadmap.id !== id));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete roadmap');
        }
    };

    const duplicateRoadmap = async (id: number) => {
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 300));
            
            const roadmapToDuplicate = roadmaps.find(r => r.id === id);
            if (roadmapToDuplicate) {
                const newRoadmap: Roadmap = {
                    ...roadmapToDuplicate,
                    id: Math.max(...roadmaps.map(r => r.id)) + 1,
                    title: `${roadmapToDuplicate.title} (Copy)`,
                    status: 'Draft',
                    created_at: new Date().toISOString(),
                    progress: 0,
                };
                setRoadmaps(prev => [...prev, newRoadmap]);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to duplicate roadmap');
        }
    };

    useEffect(() => {
        fetchRoadmaps();
    }, [options.searchTerm, options.domain, options.sortBy, options.sortOrder]);

    return {
        roadmaps,
        loading,
        error,
        refetch: fetchRoadmaps,
        deleteRoadmap,
        duplicateRoadmap,
    };
}
