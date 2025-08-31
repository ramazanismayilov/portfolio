import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { RiNpmjsFill } from "react-icons/ri";

export const socialLinkData = [
    {
        icon: FiGithub,
        url: 'https://github.com/ramazanismayilov',
        label: 'GitHub',
        color: 'hover:text-gray-900 hover:bg-gray-100'
    },
    {
        icon: FiLinkedin,
        url: 'https://www.linkedin.com/in/ramazan-ismayilov',
        label: 'LinkedIn',
        color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    {
        icon: FiInstagram,
        url: 'https://www.instagram.com/r.ismayilof',
        label: 'Instagram',
        color: 'hover:text-pink-600 hover:bg-pink-50'
    },
    {
        icon: RiNpmjsFill,
        url: 'https://www.npmjs.com/~ramazanismayilov',
        label: 'NPM',
        color: 'hover:text-red-600 hover:bg-red-50'
    },
    {
        icon: FiMail,
        url: 'mailto:ramazanismayilovh@gmail.com',
        label: 'Email',
        color: 'hover:text-emerald-600 hover:bg-emerald-50'
    },
];