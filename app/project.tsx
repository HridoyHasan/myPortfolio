import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; 
import {Autoplay, Navigation } from "swiper/modules"; 

const projects = [
  {
    name: "Portfolio Website",
    year: "2024",
    builtWith: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/project1.png",
    link: "https://yourportfolio.com",
  },
  {
    name: "E-commerce Platform",
    year: "2023",
    builtWith: ["React", "Node.js", "MongoDB"],
    image: "/project.jpg",
    link: "https://ecommerce.com",
  },
  {
    name: "Portfolio Website",
    year: "2024",
    builtWith: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/project2.png",
    link: "https://yourportfolio.com",
  },
  {
    name: "E-commerce Platform",
    year: "2023",
    builtWith: ["React", "Node.js", "MongoDB"],
    image: "/project.jpg",
    link: "https://ecommerce.com",
  },
  {
    name: "Portfolio Website",
    year: "2024",
    builtWith: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/project.jpg",
    link: "https://yourportfolio.com",
  },
  {
    name: "E-commerce Platform",
    year: "2023",
    builtWith: ["React", "Node.js", "MongoDB"],
    image: "/project.jpg",
    link: "https://ecommerce.com",
  },
  // Add more projects as needed
];

const ProjectSection = () => (
  <section id="projects" className="py-20 !bg-[#f3f5f4]">
    <h1 className="text-4xl font-bold text-center text-black mb-10">Projects</h1>
    <Swiper
      modules={[ Autoplay, Navigation]}
      pagination={{ clickable: false }}
      navigation={true} // Enable navigation arrows
      autoplay={{ delay: 4000, disableOnInteraction: false }} 
      spaceBetween={30}
      slidesPerView="auto" // Show multiple slides based on screen size
      centeredSlides={false} // Align slides from left to right
      className="w-full"
      breakpoints={{
        640: {
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3, 
        },
      }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="relative max-w-sm">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-1 transition-opacity">
            <h2 className="text-2xl font-bold text-white mb-2">{project.name}</h2>
            <p className="text-gray-300 mb-2">Year: {project.year}</p>
            <p className="text-gray-300 mb-4">
              Built with: {project.builtWith.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
            >
              View Project
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default ProjectSection;
