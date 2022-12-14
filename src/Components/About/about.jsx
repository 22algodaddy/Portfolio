export default function About(){
    return(
        <div name="about" className="w-full h-full  bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-20 break-words">
                    I am currently a <strong>sophomore</strong> at RV College Of Engineering Bengaluru, pursuing Bachelor of Engineering in Electronics and
                    Telecommunication.I love both coding and my core electronics subjects also. I had  recently
                    completed a <strong>Full-Stack Web Development</strong> Bootcamp at Udemy. I also love to solve DSA problems using C++.
                    I love to learn more about new tech stacks.
                </p>
                <br/>
                {/*<p className="text-xl">*/}
                {/*    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been*/}
                {/*    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley*/}
                {/*    of type and scrambled it to make a type specimen book. It has survived not only five centuries,*/}
                {/*    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised*/}
                {/*    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently*/}
                {/*    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu*/}
                {/*</p>*/}

            </div>
        </div>
    );
}
