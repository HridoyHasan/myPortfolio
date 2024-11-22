"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "CI/CD",
    summary: "Continuous Integration (CI) and Continuous Delivery/Deployment (CD) are software development practices that aim to improve the speed, quality, and reliability of software releases.",
    image: "/blog1.jpg",
    link: "https://medium.com/@hridoyhasan14/ci-cd-fe907c7ec6b7",
  },
  {
    id: 2,
    title: "Stray Dogs: Do they matter?",
    summary: "Dogs are one of the first animals that are being domesticated by our ancestors for thousands of years. They have been identified as a loyal and useful animal that stayed with human society for ages.",
    image: "/blog2.jpg",
    link: "https://medium.com/@hridoyhasan14/stray-dogs-do-they-matter-9b0e844b94fd",
  },
  {
    id: 3,
    title: "Understanding Software Development to Step Up in SQA",
    summary: "My First ASP.NET Core Journey",
    image: "/blog3.webp",
    link: "https://medium.com/@hridoyhasan14/understanding-software-development-to-step-up-in-sqa-my-first-asp-net-core-journey-9663443f53df",
  },
];

const BlogItem = ({ title, summary, image, link }: any) => (
  <div className="flex flex-col md:flex-row items-center md:items-start my-10">
    <div className="w-full md:w-1/2">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="rounded-md shadow-lg object-cover"
      />
    </div>
    <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0 ">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{summary}</p>
      <Link href={link} className="text-green-400 underline hover:text-green-600" target="_blank">
        Read the full blog →
      </Link>
    </div>
  </div>
);

export default function BlogsPage() {
  return (
    <section className="min-h-screen py-20 px-10">
      <h1 className="text-4xl font-bold text-center -mt-12 mb-8">Blogs</h1>
      {blogs.map((blog) => (
        <BlogItem
          key={blog.id}
          title={blog.title}
          summary={blog.summary}
          image={blog.image}
          link={blog.link}
        />
      ))}
    </section>
  );
}
