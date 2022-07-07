import Photo from '../assets/BM.png'

function About() {
    return (
        <div name='about' className='w-full h-screen background'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-5xl font-bold inline text-pink-500'>
                            About
                        </p>
                    </div>

                    <div></div>

                </div>

                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-4xl font-bold '>
                        <p>Hi. I'm Bernara, nice to meet you. Please have a look around</p>
                    </div>

                    <div>
                        <p className='text-lg'>I am passionate about building excellent software that improves the lives of those around me.
                            I'm a self-motivated learner with strong organisation, time management & communication
                            skills.
                            I'm able to work independently & collaboratively in a team with a meticulous attention to
                            details.
                        </p>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default About;