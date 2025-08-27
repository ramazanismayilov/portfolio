export interface Project {
    id: number;
    title: string;
    description: string;
    detailedFeatures?: string[];
    tags: string[];
    image: string;
    github?: string;
    demo?: string;
}

export interface ProjectCardProps {
    project: Project;
}