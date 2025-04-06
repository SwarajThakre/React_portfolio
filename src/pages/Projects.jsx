import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../data/projects';

function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        All Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
