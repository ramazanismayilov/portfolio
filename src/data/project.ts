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
        image: 'budge.png',
        github: '',
        demo: '',
    },
    {
        id: 3,
        title: 'Port of Baku',
        description: "Port of Baku is a comprehensive logistics platform for managing port operations, vessel scheduling, and cargo handling. It provides real-time visibility into port activities and streamlines communication between stakeholders.",
        detailedFeatures: [
            'Real-time vessel tracking and scheduling',
            'Cargo manifest management and documentation',
            'Container handling and yard management',
            'Integration with customs and regulatory systems',
            'Performance analytics and reporting'
        ],
        tags: [
            'Angular v21',
            'TypeScript',
            'PrimeNG',
            'RxJS',
            'Bootstrap',
            'ApexCharts',
            'CanvasJS',
            'XLSX',
            'SIMA',
            'Toastr & Spinner',
            'Rich Text Editor',
        ],
        image: 'portofbaku.png',
        github: '',
        demo: ''
    },
];