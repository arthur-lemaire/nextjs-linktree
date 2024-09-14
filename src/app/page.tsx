import Link from 'next/link'; 
import { Button } from '@/components/ui/button'; // Assure-toi que ce chemin est correct
import links from '../data/links';

export default function Linktree() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Section Alert */}
      <div className="mb-4 w-full max-w-md">
        <div className="bg-yellow-200 text-yellow-800 p-4 rounded-lg">
          <strong>Important Notice</strong>
          <p>Check out our latest updates on social media!</p>
        </div>
      </div>

      {/* Section de liens */}
      <div className="space-y-4 w-full max-w-md">
        {links.map((link, index) => (
          <Link key={index} href={link.url} passHref>
            <Button
              className={`w-full ${link.color} ${link.hoverColor} text-white flex items-center space-x-2 mt-4`} // Appliquer mt-4 ici
            >
              {/* Icône */}
              {link.icon}
              {/* Titre */}
              <span>{link.title}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
