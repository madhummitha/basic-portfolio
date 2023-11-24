import React from "react";
import {
  faContactBook,
  faFileDownload,
  faFileSignature,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const projects = [
    {
      id: 1,
      title: "React Chat App",
      description: "React Chat App using Firebase Authentication.",
      image: "/images/hero-image.png",
      link: "https://react-chat-app-gold.vercel.app/",
    },
    {
      id: 2,
      title: "Book Management App",
      description: "Book Management App",
      image: "/images/hero-image.png",
      link: "https://book-management-app-omega.vercel.app/",
    },
    {
      id: 3,
      title: "Budget Tracker App",
      description: "Budget Tracker App",
      image: "/images/hero-image.png",
      link: "https://budget-tracker-8cvn.vercel.app/",
    },
    {
      id: 1,
      title: "React Chat App",
      description: "React Chat App using Firebase Authentication.",
      image: "/images/hero-image.png",
      link: "https://react-chat-app-gold.vercel.app/",
    },
    {
      id: 2,
      title: "Book Management App",
      description: "Book Management App",
      image: "/images/hero-image.png",
      link: "https://book-management-app-omega.vercel.app/",
    },
    {
      id: 3,
      title: "Budget Tracker App",
      description: "Budget Tracker App",
      image: "/images/hero-image.png",
      link: "https://budget-tracker-8cvn.vercel.app/",
    },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container mx-auto p-8 font-serif font-semibold ">
        <div className="max-w-2xl mx-auto text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent mt-10 text-2xl">
          Projects
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent">
          {projects.map((project) => (
            <div key={project.id} className="mb-8">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  width={250}
                  height={250}
                  src={project.image}
                  alt={project.title}
                  className="mx-auto rounded-md"
                />
              </a>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;