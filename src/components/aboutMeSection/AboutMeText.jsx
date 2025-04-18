import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I’m Jyoti Mehra, a passionate and driven second-year Bachelor of Computer Applications (BCA) student. I'm fascinated by the ever-evolving world of technology and constantly seek opportunities to expand my knowledge and skills.

With a strong foundation in HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS, and the MERN Stack, I bring both creativity and technical expertise to web development. I also have hands-on experience with advanced Microsoft Excel, making me proficient in handling data-driven tasks and analytical work.

I'm currently seeking internship opportunities where I can apply my skills, contribute meaningfully to real-world projects, and continue learning alongside experienced professionals.

💡 I believe in lifelong learning and am always eager to embrace new challenges in the tech space. Let’s connect and grow together! 🚀
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
