import C from "../../Assets/c++.png"
import CSS from "../../Assets/css.png"
import HTML from "../../Assets/html.png"
import JS from "../../Assets/js.png"
import Mongo from "../../Assets/mongodb.png"
import Node from "../../Assets/node.png"
import reactImg from "../../Assets/react.png"
import git from "../../Assets/git.png"
import tailwind from "../../Assets/tailwind.png"

export default function experience(){
    const techs= [
        {
            id:1,
            src:HTML,
            title:'HTML',
            style:'shadow-orange-500',
        },
        {
            id:2,
            src:CSS,
            title:'CSS',
            style:'shadow-blue-500',
        },
        {
            id:3,
            src:JS,
            title:'JavaScript',
            style:'shadow-yellow-500',
        },
        {
            id:4,
            src:reactImg,
            title:'ReactJs',
            style:'shadow-blue-600',
        },
        {
            id:5,
            src:Node,
            title:'NodeJs',
            style:'shadow-green-500',
        },{
            id:6,
            src:Mongo,
            title:'MongoDB',
            style:'shadow-green-500',
        },
        {
            id:7,
            src:C,
            title:'C++',
            style:'shadow-blue-500',
        },
        {
            id:8,
            src:git,
            title:'GitHub',
            style:'shadow-gray-400',
        },
        {
            id:9,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400',
        },
    ]
    return(
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies I've knowledge about</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
                        {
                            techs.map(({id,src,title,style})=>(
                                <div key = {id}
                                    className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className="rounded-lg w-20 mx-auto" />
                                <p className="mt-4">{title}</p>
                                </div>
                            ))
                        }
                </div>
            </div>

        </div>


    );
}