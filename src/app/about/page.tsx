import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About FunnGro | Building Skills & Careers for Teenagers",
    description: "FunnGro helps teenagers gain real-world experience through freelancing projects while supporting businesses with young talent.",
    keywords: ["about funngro", "skill development for teens", "student career platform", "teenage freelancers india"],
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />

            <main className="pt-16">

                {/* HERO SECTION */}
                <section className="py-24 bg-gray-50 text-center">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About FunnGro</h1>

                        <p className="text-xl text-gray-600 leading-relaxed text-balance mx-auto">
                            FunnGro was created to bridge the gap between education and real-world work experience
                            for teenagers. We believe skills are best learned by doing.
                        </p>
                    </div>
                </section>

                {/* MISSION */}
                <section className="py-20 border-b border-gray-100">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our mission is to enable early <span className="font-semibold text-gray-900">skill development for teens</span> by providing access to real,
                            meaningful projects from growing businesses across India.
                        </p>
                    </div>
                </section>

                {/* WHY EXISTS */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="bg-orange-50 rounded-2xl p-8 md:p-12 border border-orange-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why FunnGro Exists</h2>
                            <p className="text-lg text-gray-800 text-center leading-relaxed">
                                Traditional education often lacks practical exposure. FunnGro gives students the opportunity
                                to explore careers, gain confidence, and build portfolios before entering college.
                            </p>
                        </div>
                    </div>
                </section>

                {/* IMPACT */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Impact on Students & Businesses</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* For Students */}
                            <article className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-blue-600">For Students</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Students gain work experience, financial independence, and early career direction.
                                </p>
                            </article>

                            {/* For Businesses */}
                            <article className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-orange-600">For Businesses</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Businesses benefit from affordable, motivated teenage freelancers who deliver fast and fresh ideas.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8">Be Part of the Story</h2>
                        <Button size="lg" variant="brand">Contact Us</Button>
                    </div>
                </section>

            </main>
        </div>
    );
}
