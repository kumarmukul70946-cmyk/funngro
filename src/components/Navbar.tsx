import Link from "next/link";
import { Button } from "./Button";
import { Menu } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    {/* Placeholder for Logo */}
                    <div className="h-8 w-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">F</div>
                    <span className="text-xl font-bold tracking-tight text-gray-900">FunnGro</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">
                        For Students
                    </Link>
                    <Link href="#business" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">
                        For Companies
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">
                        About Us
                    </Link>
                </div>

                {/* CTAs */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                        Log in
                    </Link>
                    <Button variant="brand" size="sm">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2" aria-label="Toggle menu">
                    <Menu className="h-6 w-6 text-gray-600" />
                </button>
            </div>
        </nav>
    );
}
