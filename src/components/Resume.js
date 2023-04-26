import { HiOutlineMail } from "react-icons/hi";
import { AiFillLinkedin, AiOutlinePhone } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";


function Resume() {

    return (
        <div name='resume' className='w-full h-screen background'>

            {/*Container*/ }
            <p className='text-5xl font-bold inline text-pink-500 flex justify-center'>
                About
            </p>

            <div className='mt-8 grid lg:grid-cols-2 gap-10 max-w-[1200px] mx-auto p-4 '>

                {/*Cards*/ }
                {/*Card#1*/ }
                <div className='card resume-card hover:scale-110 duration-500 flex justify-center'>
                    <div className='m-4'>
                        <span className='font-bold text-5xl'>Bernara Marat</span>
                        <div className='font-bold'>Network System Analyst/ Software Developer</div>
                    </div>

                </div>
                {/*Card#2*/ }
                <div className='card resume-card hover:scale-110 duration-500 flex justify-center'>
                    <div className='m-4'>
                        {/*<span className='font-bold inline'>bernara.marat@gmail.com</span>*/ }
                        <a className='flex items-center  text-grey-300 '
                           href="mailto:bernara.marat@gmail.com"><HiOutlineMail size={ 25 }/>bernara.marat@gmail.com
                        </a>
                        <a className='flex items-center  text-grey-300'
                           href=""><AiOutlinePhone size={ 30 }/>+1 347 330 2047
                        </a>
                        <span className='flex text-grey-300'><AiOutlineHome size={ 25 }/>New York, United States</span>
                        <a className='flex items-center  text-grey-300 '
                           href="https://www.linkedin.com/in/bernara-marat-15999ab5"><AiFillLinkedin size={ 30 }/>LinkedIn
                        </a>
                    </div>

                </div>

                {/*Card#3*/ }
                <div className='card resume-card hover:scale-110 duration-500'>
                    <div className='m-4'>
                        {/*<span className='font-bold inline'>bernara.marat@gmail.com</span>*/ }
                        <span className='text-2xl font-bold mb-2'>Summary</span><br/>
                        New York-based Full Stack Developer. Self-motivated learner with strong organisation,
                        time management and communication skills
                        Currently working on designing, developing and implementing web based applications using
                        range of technologies and programming languages.
                        Seeking to leverage broad development experience and hands-on technical expertise
                        in a challenging role as a Full-stack developer.
                    </div>

                </div>

                {/*Card#4*/ }
                <div className=' resume-card hover:scale-110 duration-500'>
                    <div className='m-4'>
                        <span className='text-2xl font-bold mb-2'>Key Skills</span><br/>
                        <button className='key-skills-btn'>React</button>
                        <button className='key-skills-btn'>Redux</button>
                        <button className='key-skills-btn'>Semantic HTML</button>
                        <button className='key-skills-btn'>Advanced CSS</button>
                        <button className='key-skills-btn'>JavaScript</button>
                        <button className='key-skills-btn'>TypeScript</button>
                        <button className='key-skills-btn'>Node.JS</button>
                        <button className='key-skills-btn'>MongoDB</button>
                        <button className='key-skills-btn'>Mongoose</button>
                        <button className='key-skills-btn'>Tailwind</button>
                        <button className='key-skills-btn'>Git/GitHub/Version Control</button>
                    </div>

                </div>


            </div>

            <div className='mt-2 grid lg:grid-cols-1 mx-auto p-4 '></div>
            <div className='card resume-card hover:scale-110 duration-500 flex lg:mx-20 '>
                <div className='m-4'>

                    {/*Experience*/ }
                    <ul className="list-outside list-disc ml-6 ">
                        {/*Job #1*/ }
                        <li>
                            <div><span className="font-bold text-pink-500">Kompot ERP</span></div>
                            <h3 className="italic">Front End Developer</h3>
                            <div>2020 - Present</div>

                            <p className="description">
                                Developed full-stack application across various platforms using the latest <br/>
                                industry-adopted technologies and frameworks such as React/Redux.<br/>
                                Developed HTML and CSS pages according to mockups and images provided by the UX
                                designer.<br/>
                                Integrated a payment system Stripe service, which brought 40% more registered
                                clients.<br/>
                                Implemented Google Maps API for converting geographic coordinates into a human-readable
                                address<br/>
                                Daily scrum meetings, and collaborated to build aesthetically appealing web applications<br/>
                                Conducted unit and load testing which reduced system failure rate by 60%<br/>
                            </p>
                        </li>
                        {/*End of Job #1*/ }
                        <br/>

                        {/*Job #2*/ }
                        <li className=''>
                            <div><span className="font-bold text-pink-500">Skadden, Arps</span></div>
                            <h3 className='italic'>QA Engineer</h3>
                            <div>2018 - 2020</div>

                            <p className="description">
                                Created test documentation and run cross-browser compatibility tests, using Chrome, Edge
                                browsers <br/>
                                Conducted full regression testing of new builds and report issues to a QA lead<br/>
                                Identified and prioritized bugs to a development team and escalated critical ones as
                                needed<br/>
                                Executed series of smoke tests to confirm build stability for each iteration prior to
                                release<br/>

                            </p>
                        </li>
                        {/*End of Job #2*/ }

                        <br/>
                    </ul>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Resume;