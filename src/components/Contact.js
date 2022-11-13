

function Contact() {



    return (
        <div className='background'>
            <div name='contact' className=' w-full h-screen flex justify-center items-center p-4 mx-auto max-w-[1000px]'>
                <form method='POST'
                      action="https://getform.io/f/e2e6a2db-b9d8-486b-9e78-e2b173f9b80b"
                      className='flex flex-col max-w-[600px] w-full'>
                    <div className='pb-8'>
                        <p className='text-5xl font-bold inline text-pink-500 flex justify-center'>Contact</p>
                        <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - bernara.marat@gmail.com</p>
                    </div>

                    <input className='bg-[#CCD6F6] p-2 rounded-lg' type="text" placeholder='Name' name='name' />
                    <input className='my-4 p-2 bg-[#CCD6F6] rounded-lg' type="text" placeholder='Email' name='email' />
                    <textarea className='bg-[#CCD6F6] p-2 rounded-lg' cols="30" name='message' rows="10" placeholder='Message'></textarea>

                    <button className='btn hover:border-pink-600 my-8 mx-auto'>Let's Collaborate</button>
                </form>

            </div>
        </div>
    );
}

export default Contact;

// /max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full