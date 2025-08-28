import { FaCode, FaServer, FaTools } from "react-icons/fa";

export const technicalSkills = [
    {
        category: 'Frontend',
        icon: FaCode,
        color: 'from-blue-500 to-blue-600',
        items: [
            { name: 'HTML5', icon: 'html.svg' },
            { name: 'CSS3', icon: 'css.svg' },
            { name: 'Sass/Scss', icon: 'sass.svg' },
            { name: 'Tailwind css', icon: 'tailwindcss.svg' },
            { name: 'Bootstrap', icon: 'bootstrap.svg' },
            { name: 'JavaScript', icon: 'javascript.svg' },
            { name: 'TypeScript', icon: 'typescript.svg' },
            { name: 'React', icon: 'react.svg' },
            { name: 'Angular', icon: 'angular.svg' },
            { name: 'Redux', icon: 'redux.svg' },
        ],
    },
    {
        category: 'Backend',
        icon: FaServer,
        color: 'from-green-500 to-green-600',
        items: [
            { name: 'Node.js', icon: 'nodejs.svg' },
            { name: 'Express.js', icon: 'expressjs.svg' },
            { name: 'Nest.js', icon: 'nestjs.svg' },
            { name: 'TypeORM', icon: 'typeorm.svg' },
            { name: 'Sequelize', icon: 'sequelize.svg' },
            { name: 'PostgreSQL', icon: 'postgresql.svg' },
            { name: 'MongoDB', icon: 'mongodb.svg' },
            { name: 'Redis', icon: 'redis.svg' },
            { name: 'Socket.io', icon: 'socketio.svg' },
        ],
    },
    {
        category: 'Tools & Other',
        icon: FaTools,
        color: 'from-purple-500 to-purple-600',
        items: [
            { name: 'Git & GitHub', icon: 'git.svg' },
            { name: 'Figma', icon: 'figma.svg' },
            { name: 'VS Code', icon: 'vscode.svg' },
            { name: 'Bruno', icon: 'bruno.svg' },
            { name: 'Postman', icon: 'postman.svg' },
            { name: 'Webpack', icon: 'webpack.svg' },
            { name: 'Vite', icon: 'vite.svg' },
            { name: 'Npm', icon: 'npm.svg' },
        ],
    },
];

export const additionalSkills = [
    { name: 'Agile Methodologies', icon: '🎯' },
    { name: 'Team Collaboration', icon: '🤝' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Code Review', icon: '🔍' },
    { name: 'Technical Writing', icon: '📝' },
    { name: 'Time Management', icon: '⏰' },
    { name: 'Adaptability', icon: '🔄' },
    { name: 'Effective Communication', icon: '💬' },
    { name: 'Leadership', icon: '👑' },
    { name: 'Continuous Learning', icon: '📚' }
]