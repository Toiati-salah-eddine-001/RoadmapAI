import { useState } from 'react';
import { ChevronDown, ChevronUp, Target } from 'lucide-react';
import StepCard from './StepCard';

interface Resource {
    type: 'article' | 'video' | 'course';
    title: string;
    url: string;
}

interface Step {
    title: string;
    description: string;
    duration: string;
    resources: Resource[];
}

interface Section {
    title: string;
    summary: string;
    order: number;
    steps: Step[];
}

interface SectionCardProps {
    section: Section;
}

export default function SectionCard({ section }: SectionCardProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div 
            className="rounded-2xl shadow-lg border-2 overflow-hidden"
            style={{
                backgroundColor: 'var(--color-Neutral)',
                borderColor: 'var(--color-Primary)',
                boxShadow: '0 4px 20px rgba(182, 245, 0, 0.1)',
            }}
        >
            <div
                className="p-6 cursor-pointer border-b transition-all duration-300"
                style={{
                    background: 'linear-gradient(to right, var(--color-Neutral1), var(--color-Neutral))',
                    borderColor: 'var(--color-Primary)',
                }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div 
                            className="flex items-center justify-center w-10 h-10 font-bold rounded-full text-sm"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-Primary), var(--color-Secondary))',
                                color: 'var(--color-Neutral2)',
                            }}
                        >
                            {section.order}
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Target 
                                    className="w-4 h-4" 
                                    style={{ color: 'var(--color-Primary)' }} 
                                />
                                <h3 
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--color-Neutral2)' }}
                                >
                                    {section.title}
                                </h3>
                            </div>
                            <p 
                                className="text-sm"
                                style={{ color: 'var(--color-Neutral3)' }}
                            >
                                {section.summary}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span 
                            className="text-xs px-3 py-1 rounded-full font-medium"
                            style={{
                                backgroundColor: 'var(--color-Primary)',
                                color: 'var(--color-Neutral2)',
                            }}
                        >
                            {section.steps.length} {section.steps.length === 1 ? 'step' : 'steps'}
                        </span>

                        <button 
                            className="transition-colors"
                            style={{ color: 'var(--color-Neutral3)' }}
                        >
                            {isExpanded ? (
                                <ChevronUp className="w-5 h-5" />
                            ) : (
                                <ChevronDown className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isExpanded && (
                <div 
                    className="p-6 space-y-6"
                    style={{ backgroundColor: 'var(--color-Neutral)' }}
                >
                    {section.steps.map((step, index) => (
                        <StepCard
                            key={index}
                            step={step}
                            stepNumber={index + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
