import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-card overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={project.codeUrl} className="button">
            <FiGithub className="mr-1" /> Code
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} className="button">
              <FiExternalLink className="mr-1" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
