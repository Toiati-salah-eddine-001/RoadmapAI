import {Brain, Menu} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";


function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#B6F500] to-[#A4DD00]">
                        <Brain className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-gray-900">LearnPath AI</span>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        Features
                    </Link>
                    <Link
                        href="#testimonials"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Testimonials
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        Pricing
                    </Link>
                    <Button variant="outline" size="sm" className="border-gray-200 bg-transparent">
                        Sign In
                    </Button>
                    <Button size="sm" className="bg-[#B6F500] hover:bg-[#A4DD00] text-black font-medium">
                        Get Started
                    </Button>
                </nav>

                <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-5 w-5" />
                </Button>
            </div>
        </header>
    );
}

export default Header;







