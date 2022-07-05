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
        <div name='skills' className='bg-[#73A9AD] text-gray-300 w-full h-screen'>

            {/*Container*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        Skills
                    </p>
                    <p className='py-4'> These are the technologies I've worked with </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
                    <div className='shadow-md shadow-[#7F7C82] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="html"/>
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#7F7C82] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="html"/>
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#7F7C82] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="html"/>
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#7F7C82] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={React} alt="html"/>
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#7F7C82] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MongoDB} alt="html"/>
                        <p className='my-4'>MongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#7F7C82] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="html"/>
                        <p className='my-4'>Node.JS</p>
                    </div>

                    <div className='shadow-md shadow-[#7F7C82] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="html"/>
                        <p className='my-4'>TailWind</p>
                    </div>
                    <div className='shadow-md shadow-[#7F7C82] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="html"/>
                        <p className='my-4'>GitHub</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;