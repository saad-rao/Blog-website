"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/95 supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link 
              href="/"
              className="group flex items-center space-x-2"
            >
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                BLOG-CODE
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            <NavLink href="/" active={pathname === "/"}>
              Home
            </NavLink>
            <NavLink href="/about" active={pathname === "/about"}>
              About
            </NavLink>
            <NavLink href="/contact" active={pathname === "/contact"}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

// Navigation Link Component
interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, active, children }) => (
  <Link
    href={href}
    className={`relative py-2 text-sm font-medium transition-colors duration-300
                group hover:text-purple-600
                ${active ? 'text-purple-600' : 'text-gray-600'}`}
  >
    {children}
    <span
      className={`absolute bottom-0 left-0 h-0.5 bg-purple-600 transition-all duration-300 ease-out
                 group-hover:w-full
                 ${active ? 'w-full' : 'w-0'}`}
    />
  </Link>
);

// Add these styles to your global CSS file
const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
`;

export default Navbar;