
import { Outlet } from "react-router";
const About = () =>{

    return (
        <>
        <div className="bg-[#fff2e0] min-h-screen flex flex-col items-center px-6 py-12 text-gray-800">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-[#898ac4] mb-4">Welcome to BiteSome</h1>
        <p className="text-xl text-[#a2aadb] mb-8 italic">Crafted with care. Delivered with code.</p>

        <p className="text-lg mb-4 leading-relaxed">
          <span className="font-semibold text-[#898ac4]">BiteSome</span> is a food delivery web app designed and developed as a
          solo project using <span className="font-medium">React</span>. It's a single-page application (SPA) that showcases not only a smooth user experience, but also my dedication to frontend development, UI design, and component-based architecture.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          This project isn’t about real food delivery—it’s about showing what’s possible when creativity meets code.
          From routing and responsive layouts to reusable components and clean design,
          BiteSome reflects my journey as a developer who loves building user-first applications.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          As a solo developer, I took on the roles of designer, developer, and tester to create a seamless and
          visually appealing experience that feels alive and easy to use.
        </p>

        <p className="text-lg mb-8 leading-relaxed">
          Whether you're here to explore my skills, or just curious about my passion for development—thank you for stopping by!
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-[#898ac4] text-white hover:bg-[#a2aadb] transition shadow-md"
        >
          Back to Home
        </a>
      </div>
    </div>
    <Outlet/>
    </>
    )
}
export default About;