"use client";
import React from 'react';
import VercelV0Chat from "@/components/mvpblocks/v0-chat";
import {roadmapCards} from "@/Data_Fake/DataRoadMap"
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import { MapIcon, ArrowRight, Star } from "lucide-react";

function Page() {
    return (
        <>
            {/* Section 1: AI Chat Interface */}
            <section 
                className="w-full min-h-screen flex flex-col justify-start items-center pt-16 p-4"
                style={{
                    background: 'linear-gradient(135deg, var(--color-Background) 0%, var(--color-Neutral1) 100%)',
                }}
            >
                <div className="w-full max-w-4xl mb-10">
                    <VercelV0Chat/>
                </div>
                
                {/* Ready-made Roadmaps Section */}
                <div className="w-full max-w-6xl">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Star className="w-6 h-6" style={{ color: 'var(--color-Primary)' }} />
                            <h2 
                                className="text-4xl font-bold"
                                style={{ color: 'var(--color-Neutral2)' }}
                            >
                                Ready-Made Roadmaps
                            </h2>
                            <Star className="w-6 h-6" style={{ color: 'var(--color-Primary)' }} />
                        </div>
                        <p 
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: 'var(--color-Neutral3)' }}
                        >
                            Choose from our curated collection of learning paths designed by industry experts
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                        {roadmapCards.map((card, index) => (
                            <Card key={index} title={card.title} description={card.description} buttonLink={card.buttonLink} buttonText={card.buttonText} image={card.image} color={card.color} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Section 2: Call to Action */}
            <section 
                className="w-full py-16 px-4"
                style={{
                    backgroundColor: 'var(--color-Neutral)',
                    borderTop: '2px solid var(--color-Primary)',
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h3 
                        className="text-3xl font-bold mb-6"
                        style={{ color: 'var(--color-Neutral2)' }}
                    >
                        Can't find what you're looking for?
                    </h3>
                    <p 
                        className="text-lg mb-8 max-w-2xl mx-auto"
                        style={{ color: 'var(--color-Neutral3)' }}
                    >
                        Use our AI-powered chat above to create a custom roadmap tailored to your specific goals and experience level.
                    </p>
                    <Button 
                        size="lg" 
                        className="flex items-center gap-2 px-8 py-4 text-lg font-semibold mx-auto"
                        style={{
                            backgroundColor: 'var(--color-Primary)',
                            color: 'var(--color-Neutral2)',
                        }}
                        onClick={() => {
                            // Scroll to top to the chat interface
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        <MapIcon className="h-5 w-5" />
                        Create Custom Roadmap
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                </div>
            </section>
        </>
    );
}

export default Page;