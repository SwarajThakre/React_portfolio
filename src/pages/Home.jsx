import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiZap, FiArrowRight } from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/projects';

const features = [
  {
    icon: <FiCode className="w-8 h-8" />,
    title: 'Clean Code',
    description: 'Well-structured, maintainable code following best practices',
  },
  {
    icon: <FiLayers className="w-8 h-8" />,
    title: 'Modern Stack',
    description: 'React, Tailwind CSS, and Vite for optimal performance',
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    title: 'Fast & Responsive',
    description: 'Optimized for all devices and fast load times',
  },
];

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              React Portfolio
            </h1>
            <p className="text-xl mb-8">
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
            </p>
            <div className="flex gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                About Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="glass-card overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1687603921109-46401b201195?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJlYWN0fGVufDB8fDB8fHww"
                alt="React Development"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Why Choose React
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pt-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Projects
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
