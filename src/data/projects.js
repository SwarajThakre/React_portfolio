export const allProjects = [
  {
    id: 1,
    title: 'Background Color',
    description: 'A simple background color generator',
    tags: ['React', 'TailwindCSS'],
    image: '../src/assets/bg-color.png',
    codeUrl:
      'https://github.com/SwarajThakre/React_projects/tree/main/bg_color',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Currency Converter',
    description: 'Convert currencies in real-time',
    tags: ['React', 'API', 'Tailwind'],
    image: '../src/assets/Screenshot (40).png',
    codeUrl:
      'https://github.com/SwarajThakre/React_projects/tree/main/currency_converter',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Demo Website',
    description: 'A demo website for a company',
    tags: ['React', 'Tailwind'],
    image: '../src/assets/Screenshot (41).png',
    codeUrl:
      'https://github.com/SwarajThakre/React_projects/tree/main/demo-website',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Password Generator',
    description: 'Generate secure passwords',
    tags: ['React', 'TailwindCSS'],
    image: '../src/assets/Screenshot (42).png',
    codeUrl:
      'https://github.com/SwarajThakre/React_projects/tree/main/password_gen',
    liveUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Todo List',
    description: 'A simple todo list application',
    tags: ['React', 'TailwindCSS'],
    image: '../src/assets/Screenshot (43).png',
    codeUrl: 'https://github.com/SwarajThakre/React_projects/tree/main/to-do',
    liveUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'React Portfolio',
    description:
      'A portfolio website built with React and TailwindCSS for showcasing projects',
    tags: ['React', 'TailwindCSS'],
    image: '../src/assets/Screenshot (44).png',
    codeUrl: '#',
    liveUrl: '#',
    featured: false,
  },
];

export const featuredProjects = allProjects.filter(
  (project) => project.featured
);
