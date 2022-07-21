import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';

function Home() {
    return (
        <div name='home' className='w-full h-screen background'>

            {/*Container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 text-3xl text-bold'>Hello, I am</p>
                <h3 className='text-4xl sm: text-7xl font-bold textDark'>Bernara Marat</h3>
                <h2 className='text-4xl sm: text-5xl font-bold'>I design & build things for the web</h2>
                <p className='text-[#494949] py-4 max-w-[700px] '>
                    I'm a full-stack developer specializing in building and designing exceptional digital experience.
                    Currently I'm focused on building responsive full-stack web applications.
                </p>

                <div>
                    <button
                        className='group flex hover: btn bg-pink-600 hover:border-pink-600'>
                        <Link to='work' smooth={true} duration={800}> View Work</Link>

                        <span className='group-hover:rotate-90 duration-300'>
                               <HiArrowNarrowRight className='ml-3'/>
                        </span>

                    </button>
                </div>
            </div>

        </div>
    );
}

export default Home;