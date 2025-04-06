import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-12"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 gradient-text">About Me</h1>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="mb-4">
            I'm a passionate frontend developer specializing in modern React
            applications with Tailwind CSS. With a strong foundation in React, I
            create beautiful, performant web experiences.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open source
            projects or exploring new web technologies.
          </p>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'Tailwind CSS',
              'Express',
              'Node.js',
              'MongoDB',
              'PostgreSQL',
              'REST APIs',
              'Next.js',
              'Netlify',
              'Vercel',
              'Git',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <div className="space-y-4">
            <a
              href="mailto:swarajthakre.stud@gmail.com"
              className="flex items-center gap-3 hover:text-blue-500 transition-colors"
            >
              <FiMail className="text-xl" />
              swarajthakre.stud@gmail.com
            </a>
            <a
              href="https://github.com/SwarajThakre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-500 transition-colors"
            >
              <FiGithub className="text-xl" />
              github.com/SwarajThakre
            </a>
            <a
              href="https://www.linkedin.com/in/swaraj-thakre2629/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-500 transition-colors"
            >
              <FiLinkedin className="text-xl" />
              linkedin.com/in/swaraj-thakre2629
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
