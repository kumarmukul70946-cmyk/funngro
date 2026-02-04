'use client';

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                setMessage(error.message);
            } else {
                setMessage('Check your email for the confirmation link!');
            }
        } catch (error) {
            setMessage('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />

            <main className="pt-32 pb-20 container mx-auto px-4 md:px-6 flex flex-col items-center">
                <div className="w-full max-w-md bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
                    <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <Button variant="outline" className="border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100">
                            I&apos;m a Student
                        </Button>
                        <Button variant="outline">
                            I&apos;m a Company
                        </Button>
                    </div>

                    <form className="space-y-4" onSubmit={handleSignup}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                        </div>

                        {message && <p className="text-sm text-center text-orange-600">{message}</p>}

                        <Button className="w-full" variant="brand" disabled={loading}>
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link href="/login" className="text-orange-600 font-semibold hover:underline">
                            Log in
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
