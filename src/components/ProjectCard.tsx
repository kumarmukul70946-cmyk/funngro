import { Project } from "@/lib/projects";
import { Button } from "./Button";
import { BadgeCheck, Clock, Wallet } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col h-full">
            <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 mb-2">
                    {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{project.title}</h3>
                <p className="text-sm text-gray-500 font-medium mt-1 flex items-center gap-1">
                    <BadgeCheck className="h-4 w-4 text-blue-500" /> {project.company}
                </p>
            </div>

            <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                {project.description}
            </p>

            <div className="space-y-4 mt-auto">
                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1">
                        <Wallet className="h-4 w-4 text-green-600" />
                        <span className="font-semibold text-gray-900">{project.stipend}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{project.duration}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100">
                            {tag}
                        </span>
                    ))}
                </div>

                <Button className="w-full" variant="outline">View Details</Button>
            </div>
        </div>
    );
}
