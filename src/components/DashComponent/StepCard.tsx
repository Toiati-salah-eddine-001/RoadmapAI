import { Clock, ChevronRight } from 'lucide-react';
import ResourceLink from './ResourceLink';

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

interface StepCardProps {
    step: Step;
    stepNumber: number;
}

export default function StepCard({ step, stepNumber }: StepCardProps) {
    return (
        <div 
            className="rounded-xl shadow-sm border p-6 hover:shadow-lg transition-all duration-300"
            style={{
                backgroundColor: 'var(--color-Neutral)',
                borderColor: 'var(--color-Primary)',
            }}
        >
            <div className="flex items-start gap-4">
                <div 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{
                        background: 'linear-gradient(135deg, var(--color-Primary), var(--color-Secondary))',
                        color: 'var(--color-Neutral2)',
                    }}
                >
                    {stepNumber}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 
                            className="text-lg font-semibold leading-tight"
                            style={{ color: 'var(--color-Neutral2)' }}
                        >
                            {step.title}
                        </h4>

                        <div 
                            className="flex items-center gap-1 text-sm rounded-full px-3 py-1 whitespace-nowrap"
                            style={{
                                backgroundColor: 'var(--color-Neutral1)',
                                color: 'var(--color-Neutral3)',
                            }}
                        >
                            <Clock className="w-3 h-3" />
                            {step.duration}
                        </div>
                    </div>

                    <p 
                        className="mb-4 leading-relaxed"
                        style={{ color: 'var(--color-Neutral3)' }}
                    >
                        {step.description}
                    </p>

                    {step.resources.length > 0 && (
                        <div>
                            <h5 
                                className="text-sm font-medium mb-3 flex items-center gap-2"
                                style={{ color: 'var(--color-Neutral2)' }}
                            >
                                <ChevronRight 
                                    className="w-4 h-4" 
                                    style={{ color: 'var(--color-Primary)' }} 
                                />
                                Resources ({step.resources.length})
                            </h5>
                            <div className="space-y-2">
                                {step.resources.map((resource, index) => (
                                    <ResourceLink key={index} resource={resource} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
