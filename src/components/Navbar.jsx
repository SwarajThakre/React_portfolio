import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold gradient-text">
          React Portfolio
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
