import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

const ContactUs = () => {
  return (
    <div className="bg-[#fff2e0] min-h-screen flex flex-col items-center justify-center px-6 py-12 text-gray-800">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-[#898ac4] mb-6">
          Contact Me
        </h1>

        <p className="text-lg mb-6 leading-relaxed">
          I’m <span className="font-semibold text-[#898ac4]">Kumari Surbhi</span>,
          currently pursuing <span className="font-medium">MCA</span> and passionate about full-stack web development. 
          I specialize in the <span className="font-medium">MERN Stack</span> and have completed an internship at <span className="font-medium">Apnemy Technology </span> 
           as a <span className="font-medium">Junior ServiceNow Developer</span>. I love building responsive web apps, solving real-world problems, and constantly learning new technologies.
        </p>

        <div className="flex flex-col items-center space-y-4 text-lg mb-8">
          {/* Email */}
          <a
            href="mailto:kumarisurbhi.ctps@gmail.com"
            className="flex items-center space-x-2 text-[#898ac4] hover:text-[#a2aadb] transition"
          >
            <FaEnvelope />
            <span>kumarisurbhi.ctps@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kumari-surbhi02/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#898ac4] hover:text-[#a2aadb] transition"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/its-surbhi02"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#898ac4] hover:text-[#a2aadb] transition"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 mt-4 rounded-full bg-[#898ac4] text-white hover:bg-[#a2aadb] transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
