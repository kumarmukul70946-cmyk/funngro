import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Browse Projects | FunnGro",
    description: "Explore real-world projects from top companies. Apply now and start earning.",
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <Navbar />

            <main className="pt-24 pb-20 container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Live Projects</h1>
                        <p className="text-gray-600 mt-2">Find the perfect project to kickstart your career.</p>
                    </div>
                    <div className="text-sm text-gray-500">
                        Showing {projects.length} opportunities
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </main>
        </div>
    );
}
