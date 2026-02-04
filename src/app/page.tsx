'use client';

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, ZoomIn } from "@/components/animations/FadeIn";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FunnGro",
    "url": "https://www.funngro.com/",
    "description": "Teen Freelancing Platform for Real Work & Real Money",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.funngro.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-16">

        {/* HERO SECTION */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50 via-white to-white">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                Teen Freelancing Platform for <span className="text-orange-600">Real Work Experience</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                FunnGro empowers teenagers to work on real business projects, develop practical skills,
                and earn money — all within a safe and structured ecosystem.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <Link href="/projects">
                <Button size="lg" variant="brand" className="px-8 py-6 text-lg shadow-lg shadow-orange-500/20 transform hover:scale-105 transition-transform">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* WHAT IS FUNNGRO */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is FunnGro?</h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                FunnGro is India’s first structured <span className="font-semibold text-gray-900">student freelancing</span> platform built exclusively for teenagers.
                We connect motivated students with businesses looking for affordable, high-quality project support.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <FadeIn><h2 className="text-3xl md:text-4xl font-bold text-gray-900">How FunnGro Works</h2></FadeIn>
            </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Step 1 */}
              <FadeIn className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold text-xl mb-6">1</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skill-Based Student Profiling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Teenagers create profiles highlighting interests and skills to get matched with relevant projects.
                </p>
              </FadeIn>

              {/* Step 2 */}
              <FadeIn className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl mb-6">2</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Projects from Businesses</h3>
                <p className="text-gray-600 leading-relaxed">
                  Businesses post live projects across marketing, content, design, research, and social media.
                </p>
              </FadeIn>

              {/* Step 3 */}
              <FadeIn className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-xl mb-6">3</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn Skills & Earn Money</h3>
                <p className="text-gray-600 leading-relaxed">
                  Students gain real-world work experience, earn money, and build verified portfolios.
                </p>
              </FadeIn>
            </StaggerContainer>
          </div>
        </section>

        {/* BENEFITS - SPLIT SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <FadeIn><h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose FunnGro?</h2></FadeIn>
            </div>

            <StaggerContainer className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Students */}
              <FadeIn className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">Benefits for Teenagers</h3>
                <ul className="space-y-4">
                  {[
                    'Real-world work experience for students',
                    'Earn money while learning skills',
                    'Early career clarity'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              {/* Parents */}
              <FadeIn className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">Benefits for Parents</h3>
                <ul className="space-y-4">
                  {[
                    'Safe and monitored environment',
                    'Focus on skill development over screen time'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="h-6 w-6 text-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              {/* Businesses */}
              <FadeIn className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">Benefits for Businesses</h3>
                <ul className="space-y-4">
                  {[
                    'Hire teens for projects at affordable cost',
                    'Fast turnaround with fresh Gen-Z ideas'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="h-6 w-6 text-orange-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Footer Wrapper */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container mx-auto px-4">
            <ZoomIn>
              <h2 className="text-3xl font-bold mb-6">Ready to empower the next generation?</h2>
            </ZoomIn>
            <FadeIn delay={0.2} className="flex justify-center gap-4">
              <Link href="/projects">
                <Button variant="brand" size="lg">Get Started</Button>
              </Link>
            </FadeIn>
          </div>
        </section>

      </main>
    </div>
  );
}
