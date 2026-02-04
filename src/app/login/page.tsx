import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | FunnGro",
    description: "Log in to your FunnGro account to manage projects and payments.",
};

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />

            <main className="pt-32 pb-20 container mx-auto px-4 md:px-6 flex flex-col items-center">
                <div className="w-full max-w-md bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
                    <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                        </div>

                        <Button className="w-full" variant="brand">
                            Log In
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="text-orange-600 font-semibold hover:underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
