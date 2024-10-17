"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import ExperienceSection from "./experiences";
import Skills from "./skills";
import { useEffect } from "react";
import ProjectSection from "./project";
import BlogsPage from "./blog";

export default function HomePage() {
  const form = useRef<any>();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_port321",
      "template_xlm0slq",
      form.current,
      "RcmpDDO1SJ9JdWrNZ"
    );
    e.currentTarget.reset();
  };

  useEffect(() => {
    document.title = "Portfolio"; // Set the page title here
  }, []);
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-start px-10"
      >
        <p className="text-green-400 md:text-2xl mb-4 typing">Hi, my name is</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 typing2">
          Quazi Mahabubul Hasan
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
          I build and test things for the web.
        </h2>
        <p className="max-w-lg text-gray-400 mb-6">
          I&apos;m a Software Engineer in Test specializing in testing systems.
          I also love to develop!
        </p>
        <a
          href="/cv.pdf"
          target="_blank"
          className="mt-6 inline-block px-8 py-3 border border-green-400 rounded text-green-400 hover:bg-green-400 hover:text-[#0a192f] transition"
        >
          Check out my resume!
        </a>
        <div className="absolute top-40 md:right-20 mr-20">
          <img
            src="/image.jpg"
            alt="Quazi Mahabubul Hasan"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mx-auto sm:mx-0"
          />
        </div>
      </section>

      <section id="skills" className="py-20">
        <Skills />
      </section>

      <section id="experience" className="py-20">
        <h1 className="text-4xl font-bold text-center mb-">Experience</h1>
        {/* Import and use the experience component */}
        <ExperienceSection />
      </section>

      <section id="projects" className="py-20">
        <ProjectSection />
      </section>

      <section id="blogs" className="py-20">
        <BlogsPage />
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h1 className="contact-title">Contact</h1>

          <div className="contact-grid">
            {/* Left: Contact Details */}
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">
                  <a
                    href="https://github.com/HridoyHasan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/git.svg" alt="GitHub" className="w-8 h-8" />
                  </a>
                </span>
                <p>
                  <a
                    href="https://github.com/HridoyHasan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    Check Out My Code on GitHub
                  </a>
                </p>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <a
                    href="https://www.linkedin.com/in/quazi-mahabubul-hasan-86713ba1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      className="w-8 h-8"
                    />
                  </a>
                </span>
                <p>
                  <a
                    href="https://www.linkedin.com/in/quazi-mahabubul-hasan-86713ba1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    Let&apos;s Connect on LinkedIn
                  </a>
                </p>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <img src="/email.png" alt="Email" className="w-8 h-8" />
                </span>
                <p>quazi.work@gmail.com</p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label className="form-label">Your name</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  name="client-name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your email</label>
                <input
                  type="email"
                  required
                  name="email"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your message</label>
                <textarea
                  className="form-input form-textarea"
                  required
                  name="message"
                ></textarea>
              </div>

              <button className="contact-button" type="submit" value="send">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
