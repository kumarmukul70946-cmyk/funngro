export interface Project {
    id: string;
    title: string;
    category: "Marketing" | "Design" | "Content" | "Tech" | "Research";
    company: string;
    stipend: string;
    duration: string;
    description: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Social Media Content Strategy",
        category: "Marketing",
        company: "GrowthX Startups",
        stipend: "₹5,000",
        duration: "1 Month",
        description: "Create engaging content calendars for LinkedIn and Twitter. Ideal for students who love storytelling.",
        tags: ["Canva", "Copywriting", "Social Media"],
    },
    {
        id: "2",
        title: "Logo Design Rebrand",
        category: "Design",
        company: "EcoGreen Solutions",
        stipend: "₹3,000",
        duration: "2 Weeks",
        description: "Redesign our brand identity with a modern, eco-friendly look. Submit 3 variations.",
        tags: ["Figma", "Illustrator", "Brand Identity"],
    },
    {
        id: "3",
        title: "Market Research for GenZ",
        category: "Research",
        company: "FMCG Giant",
        stipend: "₹8,000",
        duration: "1.5 Months",
        description: "Conduct surveys and interviews to understand GenZ snacking habits. Compile a PDF report.",
        tags: ["Research", "Data Analysis", "Reporting"],
    },
    {
        id: "4",
        title: "Blog Writing - Tech Trends",
        category: "Content",
        company: "TechDaily",
        stipend: "₹2,000",
        duration: "Per Article",
        description: "Write 1000-word articles on AI and future tech. SEO knowledge is a plus.",
        tags: ["SEO", "Writing", "Tech"],
    },
    {
        id: "5",
        title: "Frontend Bug Fixes",
        category: "Tech",
        company: "DevLabs",
        stipend: "₹10,000",
        duration: "1 Month",
        description: "Fix UI bugs in a React application. Good first issue for beginner developers.",
        tags: ["React", "CSS", "Bug Fixing"],
    },
];
