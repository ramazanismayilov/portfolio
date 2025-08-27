import { Project } from "../types/project";

export const projectData: Project[] = [
    {
        id: 1,
        title: 'Global Logistics Operations',
        description: 'GLLOC is a logistics management platform for tracking freight cars and managing transportation. It shows real-time locations and helps organize shipments efficiently. The system also provides dashboards and tools to make logistics operations easier and faster.',
        detailedFeatures: [
            'Real-time GPS tracking and route optimization for freight cars',
            'Comprehensive dashboards for monitoring operations and performance',
            'Advanced booking and shipment management with automated notifications',
            'Intelligent wagon information with maintenance and repair tracking',
            'Multi-station management for capacity planning and operational coordination',
            'Automated compliance and customs documentation handling',
            'Workflow automation from booking to delivery with status updates',
            'Integrated payment processing and contract management'
        ],
        tags: [
            'Angular v18',
            'TypeScript',
            'RxJS',
            'Angular Material',
            'Tailwind css',
            'NgRx',
            'ngx-translate',
            'Flatpickr',
            'ApexCharts',
            'Toastr & Spinner',
            'ExcelJs'
        ],
        image: 'glloc.svg',
        github: '',
        demo: 'https://glloc.com',
    },
    {
        id: 2,
        title: 'Budget Management System',
        description: "Budget Management System is an ERP platform for the Ministry of Education of Azerbaijan, enabling efficient management of budgets, contracts, and financial operations. It supports ministry staff, vendors, and educational institutions with secure login and tailored workflows.",
        detailedFeatures: [
            'Ministry staff can manage budgets, contracts, financial approvals, and reporting with secure login credentials',
            'Vendors can handle contracts, payments, and document signing via SIMA',
            'Educational institutions can submit and track contracts, approvals, and reports through SIMA'
        ],
        tags: [
            'Angular v14',
            'TypeScript',
            'Angular Material',
            'RxJS',
            'Bootstrap',
            'ApexCharts',
            'CanvasJS',
            'XLSX',
            'SIMA',
            'Toastr & Spinner',
            'Rich Text Editor',
        ],
        image: 'budge.jpg',
        github: '',
        demo: '',
    },
    {
        id: 3,
        title: 'Epic Games',
        description: 'The backend system for Epic Games was built using NestJS with robust database management and security features. The project includes comprehensive API documentation and media management.',
        detailedFeatures: [
            'Secure user authentication and authorization system',
            'RESTful API design with comprehensive documentation',
            'Cloud-based media storage and management',
            'Database optimization with TypeORM and PostgreSQL',
            'Scalable architecture for high-performance gaming platform'
        ],
        tags: ['NestJs', 'TypeORM', 'PostgreSQL', 'JWT & Bcrypt'],
        image: 'epic-games.svg',
        github: 'https://github.com/ramazanismayilov/epicGames-api',
        demo: '',
    },
    {
        id: 4,
        title: 'Servis333',
        description: '333 Servis offers professional repair and installation services for air conditioners, combi boilers, and refrigerators. The platform provides easy technician booking and service management.',
        detailedFeatures: [
            'Online service booking system with calendar integration',
            'Technician assignment and scheduling management',
            'Service history tracking and customer profiles',
            'Multi-media project gallery showcasing completed work',
            'Integrated contact system with location mapping'
        ],
        tags: ['NestJs', 'TypeScript', 'Typeorm', 'MySql', 'Multer'],
        image: 'servis333.png',
        github: '',
        demo: 'https://servis333.az/',
    },
];