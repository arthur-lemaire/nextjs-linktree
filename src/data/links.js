import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const links = [
  {
    title: 'Twitter',
    url: 'https://twitter.com',
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    icon: <FaTwitter className="w-6 h-6" />
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com',
    color: 'bg-pink-500',
    hoverColor: 'hover:bg-pink-600',
    icon: <FaInstagram className="w-6 h-6" />
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com',
    color: 'bg-blue-700',
    hoverColor: 'hover:bg-blue-800',
    icon: <FaLinkedin className="w-6 h-6" />
  },
  {
    title: 'GitHub',
    url: 'https://github.com',
    color: 'bg-gray-800',
    hoverColor: 'hover:bg-gray-900',
    icon: <FaGithub className="w-6 h-6" />
  }
];

export default links;
