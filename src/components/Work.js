
import RealEstate from '../assets/realestate.jpg';
import GLX from '../assets/glx.png';

function Work() {

    return (
        <div name='work' className='w-full md:h-screen background'>

            {/*Container*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-5xl font-bold inline text-pink-500 flex justify-center'>Work</p>
                    <p className='py-4 font-bold'>Check out some of my recent work</p>
                </div>

                {/*Container*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/*Grid item 1*/}
                    <div style={{backgroundImage: `url(${GLX})`}}
                         className='shadow-lg shadow-[#7F7C82] group container rounded-md flex justify-center
                    items-center mx-auto content-div '>

                        {/*Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                GLX Trading
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://tradegalaxy.us/" target="_blank" rel="noopener noreferrer">
                                    <button
                                        className='btn-work'>
                                        Live Demo
                                    </button>
                                </a>
                                <a href="https://github.com/BernaraD/glx" target="_blank" rel="noopener noreferrer">
                                    <button
                                        className='m-2 btn-work'>
                                        Github
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/*End of Grid item 1*/}

                    {/*Grid Item 2*/}
                    <div style={{backgroundImage: `url(${RealEstate})`}} className='shadow-lg shadow-[#7F7C82] group container rounded-md flex justify-center
                    items-center mx-auto content-div '>

                        {/*Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button
                                        className='btn-work'>
                                        Live Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button
                                        className='m-2 btn-work'>
                                        Github
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/*End of Grid Item 2*/}

                    {/*Grid Item 3*/}
                    <div style={{backgroundImage: `url(${RealEstate})`}} className='shadow-lg shadow-[#7F7C82] group container rounded-md flex justify-center
                    items-center mx-auto content-div '>

                        {/*Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button
                                        className='btn-work'>
                                        Live Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button
                                        className='m-2 btn-work'>
                                        Github
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/*End of Grid Item 3*/}

                    {/*Grid Item 4*/}
                    <div style={{backgroundImage: `url(${RealEstate})`}} className='shadow-lg shadow-[#7F7C82] group container rounded-md flex justify-center
                    items-center mx-auto content-div '>

                        {/*Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button
                                        className='btn-work'>
                                        Live Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button
                                        className='m-2 btn-work'>
                                        Github
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/*End of Grid Item 4*/}

                    {/*Grid Item 5*/}
                    <div style={{backgroundImage: `url(${RealEstate})`}} className='shadow-lg shadow-[#7F7C82] group container rounded-md flex justify-center
                    items-center mx-auto content-div '>

                        {/*Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button
                                        className='btn-work'>
                                        Live Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button
                                        className='m-2 btn-work'>
                                        Github
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/*End of Grid Item 5*/}

                    {/*Grid Item 6*/}
                    <div style={{backgroundImage: `url(${RealEstate})`}} className='shadow-lg shadow-[#7F7C82] group container rounded-md flex justify-center
                    items-center mx-auto content-div '>

                        {/*Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button
                                        className='btn-work'>
                                        Live Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button
                                        className='m-2 btn-work'>
                                        Github
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/*End of Grid Item 6*/}

                </div>

            </div>
        </div>
    );
}

export default Work;