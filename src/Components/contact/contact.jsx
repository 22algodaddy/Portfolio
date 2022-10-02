export default function Contact(){
    return(
        <div name='contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
                <div className=" pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">
                        Submit the form to get in touch with me
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <form action='https://getform.io/f/ac955725-e72d-412b-8715-87cf48939ac5' method="post"
                          className="flex flex-col w-full md:w-1/2" >
                        <input type="text" name="name" placeholder="Enter Your Name"
                               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <input type="text" name="email" placeholder="Enter Your E-Mail"
                               className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <textarea name="message" placeholder="Enter Your Message" rows='10'
                         className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
                        </textarea>
                        <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6
                        my-8 mx-auto py-3 flex items-center rounded-md hover:scale-110 duration-300">
                        Let's Connect</button>
                    </form>
                </div>
            </div>
        </div>
    )
}