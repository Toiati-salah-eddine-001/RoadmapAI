"use client"

import { useEffect, useState } from "react"
import {useRouter} from "next/navigation";

export default function LoadingPage() {
    const [progress, setProgress] = useState(0)
    const [loadingText, setLoadingText] = useState("Initializing...")
    const route = useRouter();
    const loadingSteps = [
        "Initializing...",
        "Loading resources...",
        "Preparing interface...",
        "Almost ready...",
        "Welcome!",
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + Math.random() * 15
                if (newProgress >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return newProgress
            })
        }, 300)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const textInterval = setInterval(() => {
            setLoadingText((prev) => {
                const currentIndex = loadingSteps.indexOf(prev)
                const nextIndex = (currentIndex + 1) % loadingSteps.length
                return loadingSteps[nextIndex]
            })
        }, 1200)

        return () => clearInterval(textInterval)
    }, [])
    useEffect(() => {
        if (progress === 100) {
            route.replace("/Dashboard/ResultPage");
        }
    }, [progress, route]);
    return (
        <div
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: "var(--color-Background)" }}
        >
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl float-animation"
                    style={{ backgroundColor: "var(--color-Primary)" }}
                />
                <div
                    className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full opacity-15 blur-2xl float-animation"
                    style={{
                        backgroundColor: "var(--color-Secondary)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute bottom-1/4 left-1/2 w-32 h-32 rounded-full opacity-25 blur-xl float-animation"
                    style={{
                        backgroundColor: "var(--color-Accent)",
                        animationDelay: "2s",
                    }}
                />
            </div>

            {/* Main Loading Container */}
            <div className="relative z-10 text-center space-y-8 px-6">
                {/* Logo/Brand Area */}
                <div className="space-y-4">
                    <div
                        className="w-24 h-24 mx-auto rounded-2xl pulse-glow flex items-center justify-center"
                        style={{ backgroundColor: "var(--color-Primary)" }}
                    >
                        <div className="w-12 h-12 rounded-xl rotate-gradient" style={{ backgroundColor: "var(--color-Neutral)" }} />
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--color-Neutral2)" }}>
                        Loading Experience
                    </h1>

                    <p className="text-lg font-medium" style={{ color: "var(--color-Neutral3)" }}>
                        {loadingText}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-md mx-auto space-y-3">
                    <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: "var(--color-Neutral1)" }}>
                        <div
                            className="h-full rounded-full transition-all duration-500 ease-out rotate-gradient"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: "var(--color-Primary)",
                            }}
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <span style={{ color: "var(--color-Neutral3)" }}>{Math.round(progress)}%</span>
                        <span className="font-medium" style={{ color: "var(--color-Accent)" }}>
              Loading...
            </span>
                    </div>
                </div>

                {/* Animated Dots */}
                <div className="flex justify-center space-x-2">
                    {[1, 2, 3].map((dot) => (
                        <div
                            key={dot}
                            className="w-3 h-3 rounded-full bounce-dot"
                            style={{ backgroundColor: "var(--color-Secondary)" }}
                        />
                    ))}
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
                    {[
                        { icon: "⚡", title: "Fast Loading", desc: "Optimized performance" },
                        { icon: "🎨", title: "Beautiful UI", desc: "Stunning interface" },
                        { icon: "🚀", title: "Modern Tech", desc: "Latest technology" },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 float-animation"
                            style={{
                                backgroundColor: "var(--color-Neutral)",
                                borderColor: "var(--color-Primary)",
                                animationDelay: `${index * 0.5}s`,
                            }}
                        >
                            <div className="text-2xl mb-2">{feature.icon}</div>
                            <h3 className="font-semibold text-sm" style={{ color: "var(--color-Neutral2)" }}>
                                {feature.title}
                            </h3>
                            <p className="text-xs mt-1" style={{ color: "var(--color-Neutral3)" }}>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Branding */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <p className="text-sm font-medium" style={{ color: "var(--color-Neutral3)" }}>
                    Powered by Creative Design
                </p>
            </div>
        </div>
    )
}
