// First import all your images
import bgColor from '@/assets/bg-color.png';
import currencyConverter from '@/assets/Screenshot (40).png';
import demoWebsite from '@/assets/Screenshot (41).png';
import passwordGen from '@/assets/Screenshot (42).png';
import todoList from '@/assets/Screenshot (43).png';
import portfolio from '@/assets/Screenshot (44).png';

export const allProjects = [
  {
    id: 1,
    title: 'Background Color',
    description: 'A simple background color generator',
    tags: ['React', 'TailwindCSS'],
    image: bgColor, // Use the imported variable
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
    image: currencyConverter,
    codeUrl:
      'https://github.com/SwarajThakre/React_projects/tree/main/currency_converter',
    liveUrl: 'https://forrates-converter.vercel.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Demo Website',
    description: 'A simple demo website',
    tags: ['React', 'Tailwind'],
    image: demoWebsite,
    codeUrl:
      'https://github.com/SwarajThakre/React_projects/tree/main/demo_website',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Password Generator',
    description: 'Generate strong and secure passwords',
    tags: ['React', 'Tailwind'],
    image: passwordGen,
    codeUrl:
      'https://github.com/SwarajThakre/React_projects/tree/main/password_gen',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 5,
    title: 'Todo List',
    description: 'A simple todo list',
    tags: ['React', 'Tailwind'],
    image: todoList,
    codeUrl:
      'https://github.com/SwarajThakre/React_projects/tree/main/todo_list',
    liveUrl: 'https://taskify-26.vercel.app/',
    featured: true,
  },
  {
    id: 6,
    title: 'Portfolio',
    description: 'A simple portfolio',
    tags: ['React', 'Tailwind'],
    image: portfolio,
    codeUrl: 'https://github.com/SwarajThakre/React_portfolio',
    liveUrl: '#',
    featured: true,
  },
];

export const featuredProjects = allProjects.filter(
  (project) => project.featured
);
