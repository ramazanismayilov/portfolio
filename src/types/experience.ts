export interface ExperienceCardProps {
    exp: {
        id: number;
        type: string;
        duration: string;
        role: string;
        company: string;
        location: string;
        description: string[];
        technologies: string[];
    };
    index: number;
}