type RoadmapCard = {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
    color: string;
};

export const roadmapCards: RoadmapCard[] = [
    {
        title: "Frontend Development",
        description: "Master HTML, CSS, JavaScript, React, and modern frontend frameworks to build stunning user interfaces.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80",
        buttonText: "Start Learning",
        buttonLink: "/roadmap/frontend",
        color: "bg-blue-100",
    },
    {
        title: "Backend Development",
        description: "Learn Node.js, Python, databases, APIs, and server-side development to power your applications.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
        buttonText: "Start Learning",
        buttonLink: "/roadmap/backend",
        color: "bg-green-100",
    },
    {
        title: "DevOps & Cloud",
        description: "Master Docker, Kubernetes, AWS, CI/CD pipelines, and infrastructure automation for scalable systems.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
        buttonText: "Start Learning",
        buttonLink: "/roadmap/devops",
        color: "bg-yellow-100",
    },
    {
        title: "Mobile Development",
        description: "Build cross-platform apps with React Native, Flutter, or native iOS/Android development.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
        buttonText: "Start Learning",
        buttonLink: "/roadmap/mobile",
        color: "bg-purple-100",
    },
    {
        title: "Data Science",
        description: "Learn Python, machine learning, statistics, and data visualization to extract insights from data.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
        buttonText: "Start Learning",
        buttonLink: "/roadmap/data-science",
        color: "bg-pink-100",
    },
    {
        title: "Digital Marketing",
        description: "Master SEO, social media marketing, content strategy, and growth hacking techniques.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
        buttonText: "Start Learning",
        buttonLink: "/roadmap/marketing",
        color: "bg-red-100",
    },
    {
        title: "UI/UX Design",
        description: "Learn design principles, Figma, user research, and create beautiful, functional interfaces.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80",
        buttonText: "Start Learning",
        buttonLink: "/roadmap/design",
        color: "bg-indigo-100",
    },
    {
        title: "Cybersecurity",
        description: "Master ethical hacking, network security, cryptography, and protect systems from threats.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
        buttonText: "Start Learning",
        buttonLink: "/roadmap/cybersecurity",
        color: "bg-orange-100",
    },
];
