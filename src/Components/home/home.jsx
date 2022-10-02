import Pic from "../../Assets/pic.jpg"
import {MdOutlineArrowForwardIos} from "react-icons/md"
import {Link} from "react-scroll"
export default function home(){
    return(
        <div name="home"
         className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto flex md:flex-row items-center justify-center
                            h-full px-4">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Tech Enthusiast</h2>
                    <p className="text-gray-500 py-4 max-w-md text-xl font-semibold">
                        current experience: Learning<br/>
                        who loves to learn and grow,<br/>
                        my skills include MERN-STACK<br/>
                        C++, and Python
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={800} className=" group w-fit px-6 py-3 my-2 flex items-center rounded-md
                         bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                               <MdOutlineArrowForwardIos size={25} className="ml-1"/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={Pic} alt = "My Profile"
                    className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div>

        </div>
    );
}