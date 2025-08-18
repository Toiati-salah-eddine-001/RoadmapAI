"use client";

import { useState } from 'react';
import { Eye, Trash2, Calendar, Clock, Play, CheckCircle2, Edit3, Copy } from 'lucide-react';
import { Roadmap } from '@/shared/types';

interface RoadmapCardProps {
    roadmap: Roadmap;
    onDelete: (id: number) => void;
    onDuplicate?: (id: number) => void;
}

const statusConfig = {
    'Draft': {
        color: 'bg-gradient-to-r from-neutral-3 to-muted text-neutral-2',
        icon: Edit3,
        glow: 'shadow-neutral-3/20'
    },
    'In Progress': {
        color: 'bg-gradient-accent text-neutral-2',
        icon: Play,
        glow: 'shadow-accent/30'
    },
    'Completed': {
        color: 'bg-gradient-primary text-neutral-2',
        icon: CheckCircle2,
        glow: 'shadow-primary/30'
    },
    'draft': {
        color: 'bg-gradient-to-r from-neutral-3 to-muted text-neutral-2',
        icon: Edit3,
        glow: 'shadow-neutral-3/20'
    },
    'in progress': {
        color: 'bg-gradient-accent text-neutral-2',
        icon: Play,
        glow: 'shadow-accent/30'
    },
    'completed': {
        color: 'bg-gradient-primary text-neutral-2',
        icon: CheckCircle2,
        glow: 'shadow-primary/30'
    },
};

const domainConfig = {
    'Frontend': {
        gradient: 'from-primary/20 to-primary/5',
        border: 'border-primary/30',
        text: 'text-primary',
        glow: 'shadow-primary/10'
    },
    'Backend': {
        gradient: 'from-secondary/20 to-secondary/5',
        border: 'border-secondary/30',
        text: 'text-secondary',
        glow: 'shadow-secondary/10'
    },
    'DevOps': {
        gradient: 'from-accent/20 to-accent/5',
        border: 'border-accent/30',
        text: 'text-accent',
        glow: 'shadow-accent/10'
    },
    'Mobile': {
        gradient: 'from-primary/20 to-primary/5',
        border: 'border-primary/30',
        text: 'text-primary',
        glow: 'shadow-primary/10'
    },
    'Data Science': {
        gradient: 'from-secondary/20 to-secondary/5',
        border: 'border-secondary/30',
        text: 'text-secondary',
        glow: 'shadow-secondary/10'
    },
    'Default': {
        gradient: 'from-neutral-3/20 to-neutral-3/5',
        border: 'border-neutral-3/30',
        text: 'text-neutral-3',
        glow: 'shadow-neutral-3/10'
    },
};

export default function RoadmapCard({ roadmap, onDelete, onDuplicate }: RoadmapCardProps) {
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getDomainConfig = (domain: string) => {
        return domainConfig[domain as keyof typeof domainConfig] || domainConfig.Default;
    };

    const getStatusConfig = (status: string) => {
        const normalizedStatus = status?.toLowerCase() || 'draft';
        return statusConfig[normalizedStatus as keyof typeof statusConfig] || statusConfig.Draft;
    };

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await onDelete(roadmap.id);
            setShowDeleteConfirm(false);
        } catch (error) {
            console.error("Error in handleDelete:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    const handleDuplicate = () => {
        if (onDuplicate) {
            onDuplicate(roadmap.id);
        }
    };

    const domainStyle = getDomainConfig(roadmap.domain);
    const statusStyle = getStatusConfig(roadmap.status);
    const StatusIcon = statusStyle.icon;

    return (
        <>
            <div 
                className="group rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                style={{
                    backgroundColor: 'var(--color-Neutral)',
                    border: '2px solid var(--color-Primary)',
                    boxShadow: '0 4px 20px rgba(182, 245, 0, 0.1)',
                }}
            >
                {/* Subtle gradient overlay */}
                <div 
                    className="absolute inset-0 rounded-2xl opacity-50"
                    style={{
                        background: 'linear-gradient(135deg, var(--color-Background), var(--color-Neutral1))',
                    }}
                ></div>

                <div className="relative z-10">
                    {/* Status and Domain Badges */}
                    <div className="flex items-center justify-between mb-6">
                        <div 
                            className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-Primary), var(--color-Secondary))',
                                border: '1px solid var(--color-Primary)',
                            }}
                        >
                            <div 
                                className="w-2 h-2 rounded-full opacity-80"
                                style={{ backgroundColor: 'var(--color-Neutral2)' }}
                            ></div>
                            <span 
                                className="text-sm font-semibold"
                                style={{ color: 'var(--color-Neutral2)' }}
                            >
                                {roadmap.domain}
                            </span>
                        </div>

                        <div 
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full shadow-lg"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-Primary), var(--color-Secondary))',
                                color: 'var(--color-Neutral2)',
                            }}
                        >
                            <StatusIcon className="w-3.5 h-3.5" />
                            <span className="text-xs font-bold tracking-wide">
                                {(roadmap.status || 'Draft').toUpperCase()}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 
                        className="text-2xl font-bold mb-4 transition-colors duration-300 line-clamp-2 leading-tight"
                        style={{ color: 'var(--color-Neutral2)' }}
                    >
                        {roadmap.title}
                    </h3>

                    {/* Description */}
                    <p 
                        className="text-sm mb-6 line-clamp-3 leading-relaxed font-light transition-colors duration-300"
                        style={{ color: 'var(--color-Neutral3)' }}
                    >
                        {roadmap.description || 'Embark on a structured learning journey tailored to your goals.'}
                    </p>

                    {/* Progress Bar */}
                    {roadmap.progress !== undefined && (
                        <div className="mb-6">
                            <div className="flex items-center justify-between text-sm mb-2" style={{ color: 'var(--color-Neutral3)' }}>
                                <span className="font-medium">Progress</span>
                                <span className="font-bold" style={{ color: 'var(--color-Primary)' }}>
                                    {roadmap.progress}%
                                </span>
                            </div>
                            <div 
                                className="w-full h-2 rounded-full overflow-hidden"
                                style={{ backgroundColor: 'var(--color-Neutral1)' }}
                            >
                                <div 
                                    className="h-full rounded-full transition-all duration-500"
                                    style={{
                                        width: `${roadmap.progress}%`,
                                        background: 'linear-gradient(90deg, var(--color-Primary), var(--color-Secondary))',
                                    }}
                                ></div>
                            </div>
                        </div>
                    )}

                    {/* Meta Information */}
                    <div className="flex items-center gap-6 text-sm mb-8" style={{ color: 'var(--color-Neutral3)' }}>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{formatDate(roadmap.created_at)}</span>
                        </div>
                        {roadmap.estimated_duration && (
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span className="font-medium">{roadmap.estimated_duration}</span>
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-Primary), var(--color-Secondary))',
                                color: 'var(--color-Neutral2)',
                            }}
                            title="View Roadmap"
                        >
                            <Eye className="w-4 h-4" />
                            <span>Explore</span>
                        </button>

                        {onDuplicate && (
                            <button
                                onClick={handleDuplicate}
                                className="flex items-center justify-center p-3 rounded-xl font-medium transition-all duration-300 border"
                                style={{
                                    backgroundColor: 'rgba(182, 245, 0, 0.1)',
                                    color: 'var(--color-Primary)',
                                    borderColor: 'rgba(182, 245, 0, 0.3)',
                                }}
                                title="Duplicate Roadmap"
                            >
                                <Copy className="w-4 h-4" />
                            </button>
                        )}

                        <button
                            onClick={() => setShowDeleteConfirm(true)}
                            disabled={isDeleting}
                            className="flex items-center justify-center p-3 rounded-xl font-medium transition-all duration-300 border disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                color: '#ef4444',
                                borderColor: 'rgba(239, 68, 68, 0.3)',
                            }}
                            title="Delete Roadmap"
                        >
                            {isDeleting ? (
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500"></div>
                            ) : (
                                <Trash2 className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div 
                        className="absolute inset-0 rounded-2xl"
                        style={{
                            background: 'linear-gradient(135deg, rgba(182, 245, 0, 0.1), transparent, rgba(164, 221, 0, 0.1))',
                        }}
                    ></div>
                </div>
            </div>

            {/* Enhanced Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div 
                        className="rounded-2xl p-8 max-w-md w-full shadow-2xl"
                        style={{
                            backgroundColor: 'var(--color-Neutral)',
                            border: '2px solid var(--color-Primary)',
                        }}
                    >
                        <div className="text-center mb-6">
                            <div 
                                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                            >
                                <Trash2 className="w-8 h-8" style={{ color: '#ef4444' }} />
                            </div>
                            <h3 
                                className="text-2xl font-bold mb-2"
                                style={{ color: 'var(--color-Neutral2)' }}
                            >
                                Delete Pathway
                            </h3>
                            <p 
                                className="leading-relaxed"
                                style={{ color: 'var(--color-Neutral3)' }}
                            >
                                This will permanently remove <span style={{ color: 'var(--color-Primary)', fontWeight: '600' }}>"{roadmap.title}"</span> from your collection.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowDeleteConfirm(false)}
                                className="flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                style={{
                                    backgroundColor: 'var(--color-Neutral1)',
                                    border: '1px solid var(--color-Primary)',
                                    color: 'var(--color-Neutral2)',
                                }}
                            >
                                Keep It
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={isDeleting}
                                className="flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{
                                    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                                    color: 'white',
                                }}
                            >
                                {isDeleting ? 'Deleting...' : 'Delete Forever'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
