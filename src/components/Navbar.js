import Logo from '../assets/BM.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from "react-icons/bs";
import {useState} from "react";
import {Link} from 'react-scroll';

function Navbar() {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#73A9AD] text-gray-300'>

            <div>
                <a href="/">
                    <img src={Logo} alt="Logo" style={{width: '80px'}}/>
                </a>

            </div>

            {/*Menu*/}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={800}>Home</Link>
                </li>

                <li>
                    <Link to="about" smooth={true} duration={800}>About</Link>
                </li>

                <li>
                    <Link to="skills" smooth={true} duration={800}>Skills</Link>
                </li>

                <li>
                    <Link to="work" smooth={true} duration={800}>Work</Link>
                </li>

                <li>
                    <Link to="contact" smooth={true} duration={800}>Contact</Link>
                </li>

                <li>
                    <Link to="resume" smooth={true} duration={800}>Resume</Link>
                </li>
            </ul>


            {/*Hamburger*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/*Mobile menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#73A9AD] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link to="home" smooth={true} duration={800} onClick={handleClick}>Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="about" smooth={true} duration={800} onClick={handleClick}>About</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="skills" smooth={true} duration={800} onClick={handleClick}>Skills</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="work" smooth={true} duration={800} onClick={handleClick}>Work</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="contact" smooth={true} duration={800} onClick={handleClick}>Contact</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="resume" smooth={true} duration={800} onClick={handleClick}>Resume</Link>
                </li>
            </ul>


            {/*Social*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center
                                   ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]'>
                        <a className='flex justify-between items-center w-full text-grey-300'
                           href="https://www.linkedin.com/in/bernara-marat-15999ab5">LinkedIn <FaLinkedin
                            size={30}/></a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center
                                   ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'>
                        <a className='flex justify-between items-center w-full text-grey-300'
                           href="https://github.com/BernaraD">GitHub <FaGithub size={30}/></a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center
                                   ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6FC2B0]'>
                        <a className='flex justify-between items-center w-full text-grey-300'
                           href="mailto:bernara.marat@gmail.com">Email <HiOutlineMail size={30}/></a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center
                                   ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565F69]'>
                        <a className='flex justify-between items-center w-full text-grey-300'
                           href="/resume">Resume <BsFillPersonLinesFill size={30}/></a>
                    </li>

                </ul>

            </div>
        </div>
    );
}

export default Navbar;