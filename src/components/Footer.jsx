import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} React Portfolio by Swaraj Thakre. All
            rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com/SwarajThakre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/thakre_swaraj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/swaraj-thakre2629/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:swarajthakre.stud@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-6 text-sm">
          <Link
            to="/privacy"
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact" // This links to your Contact page
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
