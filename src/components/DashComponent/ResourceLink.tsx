import { ExternalLink, FileText, Video, BookOpen } from 'lucide-react';

interface Resource {
    type: 'article' | 'video' | 'course';
    title: string;
    url: string;
}

interface ResourceLinkProps {
    resource: Resource;
}

export default function ResourceLink({ resource }: ResourceLinkProps) {
    const getIcon = () => {
        switch (resource.type) {
            case 'article':
                return <FileText className="w-4 h-4" />;
            case 'video':
                return <Video className="w-4 h-4" />;
            case 'course':
                return <BookOpen className="w-4 h-4" />;
            default:
                return <ExternalLink className="w-4 h-4" />;
        }
    };

    const getTypeColor = () => {
        switch (resource.type) {
            case 'article':
                return 'bg-blue-50 text-blue-600 border-blue-200';
            case 'video':
                return 'bg-red-50 text-red-600 border-red-200';
            case 'course':
                return 'bg-purple-50 text-purple-600 border-purple-200';
            default:
                return 'bg-gray-50 text-gray-600 border-gray-200';
        }
    };

    return (
        <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${getTypeColor()}`}
        >
            <div className="flex items-center gap-2 flex-1">
                {getIcon()}
                <span className="font-medium text-sm">{resource.title}</span>
            </div>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>
    );
}
