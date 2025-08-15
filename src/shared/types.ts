export interface Roadmap {
    id: number;
    title: string;
    description?: string;
    domain: string;
    status: 'Draft' | 'In Progress' | 'Completed';
    created_at: string;
    updated_at?: string;
    estimated_duration?: string;
    progress?: number;
    sections?: RoadmapSection[];
}

export interface RoadmapSection {
    id: number;
    title: string;
    summary: string;
    order: number;
    steps: RoadmapStep[];
}

export interface RoadmapStep {
    id: number;
    title: string;
    description: string;
    duration: string;
    completed?: boolean;
    resources: RoadmapResource[];
}

export interface RoadmapResource {
    id: number;
    type: 'article' | 'video' | 'course' | 'book' | 'tool';
    title: string;
    url: string;
    description?: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
    error?: string;
} 