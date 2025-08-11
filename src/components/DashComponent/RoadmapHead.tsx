
import { Clock, BookOpen } from 'lucide-react';

interface RoadmapHeaderProps {
    title: string;
    description: string;
    domain: string;
    estimated_duration: string;
    created_at: string;
}

export default function RoadmapHeader({
                                          title,
                                          description,
                                          domain,
                                          estimated_duration,
                                          created_at
                                      }: RoadmapHeaderProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 text-black p-8 rounded-2xl shadow-lg mb-8">
            <div className="max-w-4xl">
                <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-6 h-6" />
                    <span className="text-sm font-semibold uppercase tracking-wide opacity-80">
            {domain}
          </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    {title}
                </h1>

                <p className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed max-w-2xl">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="flex items-center gap-2 bg-black/10 rounded-full px-4 py-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{estimated_duration}</span>
                    </div>

                    <div className="text-sm opacity-75">
                        Created {formatDate(created_at)}
                    </div>
                </div>
            </div>
        </div>
    );
}
