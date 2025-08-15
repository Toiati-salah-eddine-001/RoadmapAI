import { Sparkles, Plus } from 'lucide-react';

export default function EmptyState() {
    return (
        <div 
            className="flex flex-col items-center justify-center py-24 px-4"
            style={{
                background: 'linear-gradient(135deg, var(--color-Background) 0%, var(--color-Neutral1) 100%)',
            }}
        >
            {/* Floating icon with glow effect */}
            <div className="relative mb-8">
                <div 
                    className="rounded-3xl p-8 shadow-2xl"
                    style={{
                        backgroundColor: 'var(--color-Neutral)',
                        border: '2px solid var(--color-Primary)',
                        boxShadow: '0 8px 32px rgba(182, 245, 0, 0.2)',
                    }}
                >
                    <Sparkles 
                        className="w-20 h-20" 
                        style={{ color: 'var(--color-Primary)' }} 
                    />
                </div>
                <div 
                    className="absolute inset-0 rounded-3xl blur-2xl"
                    style={{
                        backgroundColor: 'var(--color-Primary)',
                        opacity: 0.3,
                    }}
                ></div>
            </div>

            <div className="text-center max-w-lg">
                <h3 
                    className="text-4xl font-bold mb-4"
                    style={{
                        background: 'linear-gradient(135deg, var(--color-Neutral2), var(--color-Primary), var(--color-Secondary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Your Journey Awaits
                </h3>

                <p 
                    className="text-lg mb-12 leading-relaxed font-light"
                    style={{ color: 'var(--color-Neutral3)' }}
                >
                    Create your first AI-powered learning pathway and unlock structured growth in any domain you choose.
                </p>

                <button 
                    className="group relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                    style={{
                        background: 'linear-gradient(135deg, var(--color-Primary), var(--color-Secondary))',
                        color: 'var(--color-Neutral2)',
                        boxShadow: '0 8px 32px rgba(182, 245, 0, 0.3)',
                    }}
                >
                    <div className="flex items-center gap-3 relative z-10">
                        <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        <span>Start Your Path</span>
                    </div>

                    {/* Button shine effect */}
                    <div 
                        className="absolute inset-0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        style={{
                            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)',
                        }}
                    ></div>
                </button>
            </div>
        </div>
    );
}
