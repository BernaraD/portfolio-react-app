import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import MongoDB from '../assets/mongo.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import React from '../assets/react.png';


function Skills() {

    return (
        <div name='skills' className='w-full h-screen background'>

            {/*Container*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-5xl font-bold inline text-pink-500 flex justify-center'>
                        Skills
                    </p>
                    <p className='py-4 font-bold'> These are the technologies I've worked with </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
                    <div className='skills-card hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="html"/>
                        <p className='my-4 text-lg font-bold'>HTML</p>
                    </div>

                    <div className='skills-card hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="html"/>
                        <p className='my-4 font-bold'>CSS</p>
                    </div>

                    <div className='skills-card hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="html"/>
                        <p className='my-4 font-bold'>JavaScript</p>
                    </div>
                    <div className='skills-card hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={React} alt="html"/>
                        <p className='my-4 font-bold'>React</p>
                    </div>
                    <div className='skills-card hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MongoDB} alt="html"/>
                        <p className='my-4 font-bold'>MongoDB</p>
                    </div>
                    <div className='skills-card hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="html"/>
                        <p className='my-4 font-bold'>Node.JS</p>
                    </div>

                    <div className='skills-card hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="html"/>
                        <p className='my-4 font-bold'>TailWind</p>
                    </div>
                    <div className='skills-card hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="html"/>
                        <p className='my-4 font-bold'>GitHub</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;