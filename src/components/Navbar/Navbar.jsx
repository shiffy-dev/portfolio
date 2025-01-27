import React, { useState } from 'react';
import logo from '../../assets/sLogo.webp';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
// import "./Navbar.css";
import {Link} from 'react-scroll';

// this is my navbar component

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 h-16 mb-40 z-50">
            <div>
                <img src={logo} alt="Logo Image" className="w-16 h-16 md:w-28 md:h-28" />
                {/* <Image src={logo} alt="Logo Image" className="w-16 h-16 md:w-28 md:h-28" height={50} width={50} /> */}
            </div>
            <div className="hidden md:flex">
                <ul className="flex space-x-4">
                    <li>
                        <Link to='home' smooth={true} duration={500}>
                        Home
                        </Link>
                    </li>
                    <li><Link to='about' smooth={true} duration={500}>
                        About
                        </Link></li>
                    <li><Link to='skills' smooth={true} duration={500}>
                        Skills
                        </Link></li>
                        <li><Link to='projects' smooth={true} duration={500}>
                        Projects
                        </Link></li>
                    <li><Link to='contact' smooth={true} duration={500}>
                        Contact
                        </Link></li>
                </ul>
                {/* Hamburger*/ }
            </div>
            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
                {nav ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                        </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                        </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                        </Link></li>
                        <li className="py-6 text-4xl"><Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        Projects
                        </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                        </Link></li>
            </ul>
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-40 h-15 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a href="https://www.linkedin.com/in/shifa-yashfeen-a93bb6218/" className="flex justify-between items-center w-full text-gray-300">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-40 h-15 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
                        <a href="https://github.com/shiffy-dev" className="flex justify-between items-center w-full text-gray-300">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-40 h-15 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2d0]">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shifa.yashfeen@gmail.com" className="flex justify-between items-center w-full text-gray-300">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-40 h-15 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a href="https://drive.google.com/file/d/1LSd1M3GDO5DWRAdH6r3TSqjBYUZTVczt/view?usp=drive_link" className="flex justify-between items-center w-full text-gray-300">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
