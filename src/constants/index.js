import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  developer2,
  pytorch,
  tensorflow,
  keras,
  c,
  cpp,
  py,
  NST,
  gesture,
  keypoints,
  movie,
  pokemon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Deep Learning",
    icon: mobile,
  },
  {
    title: "Computer Vision",
    icon: backend,
  },
  {
    title: "Algorithms",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "python",
    icon: py,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Research Intern",
    company_name: "IIT BHU",
    icon: developer2,
    iconBg: "#383E56",
    date: "January 2023 - May 2023",
    points: [
      "Developing Neural Networks for Hyperspectral Image Classifications",
      "Worked on Generative Adversarial Networks (GANs) and applications in Data Augmentation",
      "Focussed on Few Shot Learning methods and MAML Algorithm.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: developer2,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Research Intern",
    company_name: "AIM4U Software Solutions",
    icon: developer2,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "The startup mainly focusses on detection of skin dieseases using images and providing plant based product recommendations.",
      "Worked on a Facial Keypoint Detection model for detection of dark spots and dark circles on an individual's face.",
      "Analysed different speckle noise reduction filters such as Gabor filter, Lee filter and Gaussian filters.",
      "Conducted market survey on the different health-tech startups, their products and features offered.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: developer2,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Sarvesh consistently displayed a keen interest in learning and staying up-to-date with the latest advancements in the field.I have no doubt that Sarvesh is an exceptionally talented and dedicated researcher, which sets him apart from his peers. ",
    name: "Dr. Dhananjay Kalbande",
    designation: "Professor and Head CSE dept. Founder and CEO ",
    company: "AIM4U Software Solutions",
    image: developer2,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Art Generation using Neural Style Transfer",
    description:
      "Implemented Neural Style Transfer (NST) using the VGG-19 network as a pre-trained feature extractor.Through a series of iterations, the generated image progressively captures the content and style aspects, resulting in afinal output that blends the content image’s structure with the artistic style image’s visual characteristics. ",
    tags: [
      {
        name: "VGG19",
        color: "blue-text-gradient",
      },
      {
        name: "Neural Network",
        color: "green-text-gradient",
      },
      {
        name: "Transfer Learning",
        color: "pink-text-gradient",
      },
    ],
    image: NST,
    source_code_link:
      "https://github.com/SarveshD7/Neural-Style-Transfer-Pytorch",
  },
  {
    name: "Gesture Based System Control",
    description:
      "Developed a hand tracking module using Mediapipe, OpenCv, Pycaw and AutoPy. With the application one can effectively control the system volume, navigate the system using a virtual mouse, naivgate presentation slides and capture screenshots.  ",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "Pycaw",
        color: "pink-text-gradient",
      },
    ],
    image: gesture,
    source_code_link: "https://github.com/SarveshD7/Gesture-System-Control",
  },
  {
    name: "Detection of Dark Circles using Facial Keypoint Detection",
    description:
      "Facial keypoint detection is a computer vision technique that involves identifying and locating specific facial landmarks or keypoints, such as the eyes, nose, and mouth, in an image or video.Finding the coordinates for the left eye center and the right eye center can narrow down the area for analysis.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: keypoints,
    source_code_link: "https://github.com/SarveshD7/Facial-Keypoint-Detection",
  },
  {
    name: "Movie Recommender System",
    description:
      "Developed a movie recommender system using the tmdb 5000 movies dataset. Used NLTK, the Natural Language Toolkit, which is a suite of libraries and programs for symbolic and statistical natural language processing for English written in the Python programming language. Used streamlit, which helps to create web apps for data science and machine learning in less time ",
    tags: [
      {
        name: "NLTK",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/SarveshD7/Movie-Recommender-System",
  },
  {
    name: "PokeGAN - Pokemon Generator",
    description:
      "Trained a GAN (Generative Adversarial Network) to generate images of new Pokemon.Generative Adversarial Networks (GANs) are a class of machine learning models consisting of two components: a       generator and a discriminator. The generator generates synthetic data samples, while the discriminator tries to distinguish between real and fake samples",
    tags: [
      {
        name: "GANs",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "Google Colab",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link:
      "https://github.com/SarveshD7/PokeGAN-Pokemon-generator-using-Generative-Adversarial-Network",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
