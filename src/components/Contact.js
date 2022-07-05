

function Contact () {
    return (
        <div name='contact' className='bg-[#73A9AD] w-full h-screen flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/e2e6a2db-b9d8-486b-9e78-e2b173f9b80b" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - bernara.marat@gmail.com</p>
                </div>

                <input className='bg-[#CCD6F6] p-2 rounded-lg' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#CCD6F6] rounded-lg' type="text" placeholder='Email' name='email' />
                <textarea className='bg-[#CCD6F6] p-2 rounded-lg' cols="30" name='message' rows="10" placeholder='Message'></textarea>

                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8
                mx-auto rounded-lg flex items-center'>Let's Collaborate</button>
            </form>

        </div>
    );
}

export default Contact;