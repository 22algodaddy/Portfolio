import {FaGithub,FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

export default function socialConnect(){
    const Links = [
        {   id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href:"https://www.linkedin.com/in/dhruv-choubey-9a3296144/",
            style:"rounded-tr-md",
        },

        {
        id:2,
        child:(
        <>
            GitHub <FaGithub size={30}></FaGithub>
        </>
    ),
        href:"https://github.com/22algodaddy",
},

        {
            id:3,
            child:(
                <>
                    Mail <HiOutlineMail size={30}></HiOutlineMail>
                </>
            ),
            href:"mailto:choubeydhruv2014@gmail",
        },

        {
            id:4,
            child:(
                <>
                    Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                </>
            ),
            href:"Resume/resume.pdf",
            style:"rounded-br-md",
            download:true,
        },

    ]
    return(
        <div className="hidden lg:flex  flex-col top-[35%] left-0 fixed">
           <ul>
               {Links.map(({id,child,href,style,download})=>(
                   <li key={id} className={`flex justify-between items-center w-40 h-14  px-4 bg-gray-500 ml-[-100px] 
                       hover:ml-[-10px] hover:rounded-md duration-400 ${style}`}>
                       <a href={href} className="flex  justify-between items-center w-full text-white"
                          download={download} target="_blank" rel="noreferrer">
                           <>
                               {child}
                           </>
                       </a>
                   </li>

               ))}

           </ul>
        </div>
    );
}