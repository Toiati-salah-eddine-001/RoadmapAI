import { useState, useEffect } from 'react';
import { Roadmap } from '@/shared/types';

interface UseRoadmapsOptions {
    searchTerm?: string;
    domain?: string;
    sortBy?: 'title' | 'created_at';
    sortOrder?: 'asc' | 'desc';
}

// Mock data for development
// const mockRoadmaps: Roadmap[] = [
//     {
//         id: 1,
//         title: "Frontend Development Mastery",
//         description: "Complete journey from HTML basics to advanced React patterns and modern CSS techniques.",
//         domain: "Frontend",
//         status: "In Progress",
//         created_at: "2024-01-15T10:30:00Z",
//         estimated_duration: "6-8 months",
//         progress: 45,
//     },
//     {
//         id: 2,
//         title: "Backend API Development",
//         description: "Learn to build robust REST APIs and GraphQL services with Node.js and Python.",
//         domain: "Backend",
//         status: "Completed",
//         created_at: "2024-01-10T14:20:00Z",
//         estimated_duration: "4-6 months",
//         progress: 100,
//     },
//     {
//         id: 3,
//         title: "DevOps & Cloud Infrastructure",
//         description: "Master Docker, Kubernetes, AWS, and CI/CD pipelines for scalable deployments.",
//         domain: "DevOps",
//         status: "Draft",
//         created_at: "2024-01-20T09:15:00Z",
//         estimated_duration: "5-7 months",
//         progress: 0,
//     },
//     {
//         id: 4,
//         title: "Mobile App Development",
//         description: "Build cross-platform mobile apps with React Native and Flutter.",
//         domain: "Mobile",
//         status: "In Progress",
//         created_at: "2024-01-12T16:45:00Z",
//         estimated_duration: "3-5 months",
//         progress: 30,
//     },
//     {
//         id: 5,
//         title: "Data Science Fundamentals",
//         description: "Learn Python, machine learning, statistics, and data visualization techniques.",
//         domain: "Data Science",
//         status: "Draft",
//         created_at: "2024-01-18T11:30:00Z",
//         estimated_duration: "8-12 months",
//         progress: 0,
//     },
// ];

export function useRoadmaps(options: UseRoadmapsOptions = {}) {
    const [allRoadmaps, setAllRoadmaps] = useState<Roadmap[]>([]);
    const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetching roadmaps from API
    async function getAllUserRoadmapsAPI(userId: string): Promise<Roadmap[] | null> {
        try {
            const response = await fetch("http://127.0.0.1:5000/getuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id: userId }),
            });

            const result = await response.json();
            console.log("API Response:", result);

            if (!response.ok) {
                console.error("Error fetching user roadmaps:", result.message || "Unknown error");
                return null;
            }

            // Handle the response data structure
            const data = result.data || result;
            console.log("Processed data:", data);
            
            // Ensure data is an array
            if (Array.isArray(data)) {
                return data.map((roadmap: any) => ({
                    ...roadmap,
                    user_id: userId
                }));
            } else if (data && typeof data === 'object') {
                // If it's a single roadmap, wrap it in an array
                return [{
                    ...data,
                    user_id: userId
                }];
            }
            
            return null;
        } catch (err) {
            console.error("Fetch error:", err);
            return null;
        }
    }

    // Get profile from localStorage
    const getProfile = () => {
        if (typeof window !== 'undefined') {
            const profile = localStorage.getItem("profile");
            return profile ? JSON.parse(profile) : null;
        }
        return null;
    };

    // Initial data fetching
    useEffect(() => {
        const fetchInitialRoadmaps = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const profile = getProfile();
                console.log("User profile:", profile);
                
                if (!profile || !profile.id) {
                    console.log("No user profile found, using mock data");
                    // Use mock data if no user profile
                    setAllRoadmaps(mockRoadmaps);
                    setRoadmaps(mockRoadmaps);
                    setLoading(false);
                    return;
                }

                const userRoadmaps = await getAllUserRoadmapsAPI(profile.id);
                
                if (userRoadmaps && userRoadmaps.length > 0) {
                    console.log("Setting fetched roadmaps:", userRoadmaps);
                    setAllRoadmaps(userRoadmaps);
                    setRoadmaps(userRoadmaps);
                } else {
                    console.log("No roadmaps found for user, using mock data");
                    // Fallback to mock data if no roadmaps found
                    setAllRoadmaps(mockRoadmaps);
                    setRoadmaps(mockRoadmaps);
                }
            } catch (err) {
                console.error("Error fetching roadmaps:", err);
                setError(err instanceof Error ? err.message : 'Failed to fetch roadmaps');
                // Fallback to mock data on error
                setAllRoadmaps(mockRoadmaps);
                setRoadmaps(mockRoadmaps);
            } finally {
                setLoading(false);
            }
        };

        fetchInitialRoadmaps();
    }, []);

    // Apply filters and sorting
    const applyFilters = () => {
        try {
            let filteredRoadmaps = [...allRoadmaps];

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
            setError(err instanceof Error ? err.message : 'Failed to apply filters');
        }
    };

    const deleteRoadmap = async (id: number) => {
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 300));
            
            setAllRoadmaps(prev => prev.filter(roadmap => roadmap.id !== id));
            setRoadmaps(prev => prev.filter(roadmap => roadmap.id !== id));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete roadmap');
        }
    };

    const duplicateRoadmap = async (id: number) => {
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 300));
            
            const roadmapToDuplicate = allRoadmaps.find(r => r.id === id);
            if (roadmapToDuplicate) {
                const newRoadmap: Roadmap = {
                    ...roadmapToDuplicate,
                    id: Math.max(...allRoadmaps.map(r => r.id)) + 1,
                    title: `${roadmapToDuplicate.title} (Copy)`,
                    status: 'Draft',
                    created_at: new Date().toISOString(),
                    progress: 0,
                };
                setAllRoadmaps(prev => [...prev, newRoadmap]);
                setRoadmaps(prev => [...prev, newRoadmap]);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to duplicate roadmap');
        }
    };

    // Apply filters when options change
    useEffect(() => {
        applyFilters();
    }, [allRoadmaps, options.searchTerm, options.domain, options.sortBy, options.sortOrder]);

    // Debug effect to log roadmaps changes
    useEffect(() => {
        console.log("Roadmaps state updated:", roadmaps);
    }, [roadmaps]);

    return {
        roadmaps,
        loading,
        error,
        refetch: () => {
            const profile = getProfile();
            if (profile && profile.id) {
                getAllUserRoadmapsAPI(profile.id).then(userRoadmaps => {
                    if (userRoadmaps && userRoadmaps.length > 0) {
                        setAllRoadmaps(userRoadmaps);
                    }
                });
            }
        },
        deleteRoadmap,
        duplicateRoadmap,
    };
}
