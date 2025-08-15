"use client";

import React, { useState } from 'react';
import { useRoadmaps } from '@/hooks/useRoadmaps';
import RoadmapCard from '@/components/HestoryComponent /RoadmapCard';
import EmptyState from '@/components/HestoryComponent /EmptyState';
import { Search, Filter, SortAsc, SortDesc, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HistoryPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDomain, setSelectedDomain] = useState('');
    const [sortBy, setSortBy] = useState<'title' | 'created_at'>('created_at');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const { roadmaps, loading, error, deleteRoadmap, duplicateRoadmap } = useRoadmaps({
        searchTerm,
        domain: selectedDomain,
        sortBy,
        sortOrder,
    });

    const domains = ['Frontend', 'Backend', 'DevOps', 'Mobile', 'Data Science'];

    const handleDelete = (id: number) => {
        deleteRoadmap(id);
    };

    const handleDuplicate = (id: number) => {
        duplicateRoadmap(id);
    };

    if (loading) {
        return (
            <div 
                className="min-h-screen flex items-center justify-center"
                style={{
                    background: 'linear-gradient(135deg, var(--color-Background) 0%, var(--color-Neutral1) 100%)',
                }}
            >
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: 'var(--color-Primary)' }}></div>
                    <p style={{ color: 'var(--color-Neutral3)' }}>Loading your roadmaps...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div 
                className="min-h-screen flex items-center justify-center"
                style={{
                    background: 'linear-gradient(135deg, var(--color-Background) 0%, var(--color-Neutral1) 100%)',
                }}
            >
                <div className="text-center">
                    <p style={{ color: '#ef4444' }}>Error: {error}</p>
                    <Button 
                        onClick={() => window.location.reload()}
                        className="mt-4"
                        style={{
                            backgroundColor: 'var(--color-Primary)',
                            color: 'var(--color-Neutral2)',
                        }}
                    >
                        Retry
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div 
            className="min-h-screen p-6"
            style={{
                background: 'linear-gradient(135deg, var(--color-Background) 0%, var(--color-Neutral1) 100%)',
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 
                        className="text-4xl font-bold mb-4"
                        style={{ color: 'var(--color-Neutral2)' }}
                    >
                        My Learning Roadmaps
                    </h1>
                    <p 
                        className="text-lg"
                        style={{ color: 'var(--color-Neutral3)' }}
                    >
                        Track your progress and manage your learning journeys
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-8 space-y-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: 'var(--color-Neutral3)' }} />
                        <input
                            type="text"
                            placeholder="Search roadmaps..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                            style={{
                                backgroundColor: 'var(--color-Neutral)',
                                borderColor: 'var(--color-Primary)',
                                color: 'var(--color-Neutral2)',
                            }}
                        />
                    </div>

                    {/* Filters and Controls */}
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Domain Filter */}
                        <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4" style={{ color: 'var(--color-Neutral3)' }} />
                            <select
                                value={selectedDomain}
                                onChange={(e) => setSelectedDomain(e.target.value)}
                                className="px-3 py-2 rounded-lg border-2 focus:outline-none transition-all duration-300"
                                style={{
                                    backgroundColor: 'var(--color-Neutral)',
                                    borderColor: 'var(--color-Primary)',
                                    color: 'var(--color-Neutral2)',
                                }}
                            >
                                <option value="">All Domains</option>
                                {domains.map(domain => (
                                    <option key={domain} value={domain}>{domain}</option>
                                ))}
                            </select>
                        </div>

                        {/* Sort Controls */}
                        <div className="flex items-center gap-2">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'title' | 'created_at')}
                                className="px-3 py-2 rounded-lg border-2 focus:outline-none transition-all duration-300"
                                style={{
                                    backgroundColor: 'var(--color-Neutral)',
                                    borderColor: 'var(--color-Primary)',
                                    color: 'var(--color-Neutral2)',
                                }}
                            >
                                <option value="created_at">Date Created</option>
                                <option value="title">Title</option>
                            </select>
                            <Button
                                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                                className="p-2 rounded-lg"
                                style={{
                                    backgroundColor: 'var(--color-Primary)',
                                    color: 'var(--color-Neutral2)',
                                }}
                            >
                                {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                            </Button>
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex items-center gap-2 ml-auto">
                            <Button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'opacity-100' : 'opacity-50'}`}
                                style={{
                                    backgroundColor: viewMode === 'grid' ? 'var(--color-Primary)' : 'var(--color-Neutral1)',
                                    color: 'var(--color-Neutral2)',
                                }}
                            >
                                <Grid className="w-4 h-4" />
                            </Button>
                            <Button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg ${viewMode === 'list' ? 'opacity-100' : 'opacity-50'}`}
                                style={{
                                    backgroundColor: viewMode === 'list' ? 'var(--color-Primary)' : 'var(--color-Neutral1)',
                                    color: 'var(--color-Neutral2)',
                                }}
                            >
                                <List className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p 
                        className="text-sm"
                        style={{ color: 'var(--color-Neutral3)' }}
                    >
                        {roadmaps.length} roadmap{roadmaps.length !== 1 ? 's' : ''} found
                    </p>
                </div>

                {/* Roadmaps Grid/List */}
                {roadmaps.length === 0 ? (
                    <EmptyState />
                ) : (
                    <div className={viewMode === 'grid' 
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                        : "space-y-6"
                    }>
                        {roadmaps.map((roadmap) => (
                            <RoadmapCard
                                key={roadmap.id}
                                roadmap={roadmap}
                                onDelete={handleDelete}
                                onDuplicate={handleDuplicate}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
