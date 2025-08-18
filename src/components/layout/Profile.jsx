import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineLocalPhone } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn } from "react-icons/fa";

const Profile = () => {
  return (
    <div
      className="relative w-[450px] h-[620px] bg-[url('../../assets/images/profile.jpg')] bg-cover bg-center rounded-4xl overflow-hidden"
      style={{ transform: "perspective(1000px) rotateY(10deg) rotateX(5deg)" }}
    >
      <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md pb-8">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold">Ramazan İsmayılov</h2>
          <div className="text-xl font-medium mt-1 h-8">
            <Typewriter
              options={{
                strings: ["Software Developer"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
              }}
            />
          </div>
          <div className="flex items-center justify-center gap-1 text-xl mt-5">
            <Link
              to="https://www.linkedin.com/in/ramazan-ismayilov"
              target="_blank"
              className="relative p-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:text-gray-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://x.com/IsmylvRamazan"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:text-gray-300"
            >
              <RiTwitterXLine />
            </Link>
            <Link
              to="https://www.instagram.com/r.ismayilof"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:text-gray-300"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=61562651615021"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:text-gray-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://github.com/ramazanismayilov"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:text-gray-300"
            >
              <IoLogoGithub />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 mt-8">
            <a
              href="/Ramazan_İsmayılov.pdf"
              download="Ramazan_İsmayılov.pdf"
              className="flex items-center gap-2 font-bold uppercase text-sm bg-white/10 hover:bg-white/20 transition-all rounded-full py-2 px-6 border border-white/20"
            >
              Download CV
              <IoCloudDownloadOutline />
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 font-bold uppercase text-sm bg-white/10 hover:bg-white/20 transition-all rounded-full py-2 px-6 border border-white/20"
            >
              Contact me
              <MdOutlineLocalPhone />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
