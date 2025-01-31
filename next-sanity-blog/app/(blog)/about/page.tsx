import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 animate-fade-in">
          {/* Image Section */}
          <div className="relative animate-slide-in-left">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-4 ring-purple-500/30 shadow-2xl transform transition-all duration-500 hover:scale-105">
                <Image
                  src="/my-image.jpg"
                  alt="Saad Naseem"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full transform transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-slide-in-right">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                ABOUT ME
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 animate-fade-in-up delay-100">
                Saad Naseem - <span className="text-purple-600">WEB&APP DEV</span>
              </h2>
            </div>

            <p className="text-xl leading-relaxed text-gray-600 max-w-2xl animate-fade-in-up delay-200">
              I created this blog website so that I can post blogs related to coding and crypto. My passion lies in creating elegant solutions and sharing knowledge with the developer community.
            </p>

            {/* Skills Section */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-fade-in-up delay-200">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium
                           transform transition-all duration-300 hover:scale-105 hover:bg-purple-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start space-x-8 pt-6 animate-fade-in-up delay-300">
              <SocialLink 
                href="https://github.com/saad-rao"
                icon={<Github className="w-7 h-7" />}
                label="GitHub"
              />
              <SocialLink 
                href="https://x.com/Saad_X_0_0"
                icon={<Twitter className="w-7 h-7" />}
                label="Twitter"
              />
              <SocialLink 
                href="https://www.linkedin.com/in/saad-naseem-99651a2b4/"
                icon={<Linkedin className="w-7 h-7" />}
                label="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// Social Link Component with enhanced hover tooltip
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <Link 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative"
  >
    <div className="transform transition-all duration-300 hover:scale-110">
      <div className="p-3 rounded-full bg-white/80 shadow-lg backdrop-blur-sm 
                    text-gray-600 hover:text-purple-600 transition-all duration-300
                    group-hover:shadow-purple-200">
        {icon}
      </div>
      {/* Enhanced Tooltip */}
      <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-2 
                     bg-gray-900 text-white text-sm rounded-lg opacity-0 
                     group-hover:opacity-100 transition-all duration-300
                     whitespace-nowrap shadow-lg">
        {label}
        {/* Tooltip Arrow */}
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 
                      border-4 border-transparent border-b-gray-900" />
      </span>
    </div>
  </Link>
);

export default AboutPage;