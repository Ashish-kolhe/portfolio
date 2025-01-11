import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='bg-white mb-10'>
            <h1 className='text-center font-extrabold text-gray-800 text-3xl mt-10 '>PROJECTS <br /><span className='font-mono text-5xl bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent'>-</span></h1>
            <p className='text-center font-semibold text-gray-700 text-md lg:mb-0 mb-4 px-8 lg:px-32'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            <div className='flex justify-center'>
                <div className='max-w-5xl'>
                    <div id='coddeit' className="hero bg-white py-10  lg:p-10">
                        <div  className="hero-content flex-col px-10 lg:flex-row">
                            <div className='max-w-sm'>
                               <img src="./Coddeit.png" alt="" />
                            </div>
                            <div className='max-w-sm mt-10 lg:mt-0 lg:ml-10 '>
                                <h1  className="text-2xl font-extrabold">Coddeit</h1>
                                <p className= "mb-4 mt-2"><span className='border border-green-500 p-1 px-2 rounded-lg text-gray-700 font-semibold text-xs'>Live</span></p>
                                <p className='text-base font-normal leading-relaxed text-gray-600'>Coddeit is a practical coding platform focused on building real-world projects. It’s designed to teach by doing, helping students and entrepreneurs turn their ideas into deployable solutions, fast.</p>
                                <a 
  href="https://www.coddeit.site" 
  className='btn mt-8 px-10 py-2 outline-0 bg-gradient-to-r from-yellow-400 to-orange-600 text-white text-lg font-bold block text-center'>
Go to Site 
</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='max-w-5xl'>
                    <div id='krypton' className="hero bg-white py-10  lg:p-10" >
                        <div className="hero-content flex-col px-10 lg:flex-row">
                            <div className='max-w-sm'>
                               <img src="./Krypton.png" alt="" />
                            </div>
                            <div className='max-w-sm mt-10 lg:mt-0 lg:ml-10 '>
                                <h1 className="text-2xl font-extrabold ">Krypton</h1>
                                <p className= "mb-4 mt-2"><span className='border border-amber-500 p-1 px-2 rounded-lg text-gray-700 font-semibold text-xs'>On Hold</span></p>
                                <p className='text-base font-normal leading-relaxed text-gray-600'>Krypton is a digital solutions agency I founded in 2024, specializing in web and mobile development. We offer services like Web Development, App Development, Digital Marketing, and UI/UX Design, empowering businesses with innovative solutions to drive growth.</p>
                               <a href="https://kryptonsite.netlify.app/"> <button className='btn px-4 mt-4 p-2 focus:outline-none bg-gradient-to-r from-yellow-400 to-orange-600 text-white font-bold'>Go to Site</button></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='max-w-5xl'>
                    <div id='gamestore' className="hero bg-white py-10  lg:p-10">
                        <div className="hero-content flex-col px-10 lg:flex-row">
                            <div className='max-w-sm'>
                               <img src="./Gamestore.png" alt="" />
                            </div>
                            <div className='max-w-sm mt-10 lg:mt-0 lg:ml-10 '>
                                <h1 className="text-2xl font-extrabold ">GameStore</h1>
                                                                <p className= "mb-4 mt-2"><span className='border border-black p-1 px-2 rounded-lg text-gray-700 font-semibold text-xs'>Casual</span></p>
                                <p className='text-base font-normal leading-relaxed text-gray-600'>Game Store is a design exercise I created to practice design principles. The project showcases a user-friendly interface featuring popular mobile games, emphasizing clean layout and intuitive navigation.</p>
                               <a href="https://gamestoreforfun.netlify.app/"> <button className='btn px-4 mt-4 p-2 focus:outline-none bg-gradient-to-r from-yellow-400 to-orange-600 text-white font-bold'>Go to Site</button></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='max-w-5xl'>
                    <div id='inlance' className="hero bg-white py-10  lg:p-10">
                        <div className="hero-content flex-col px-10 lg:flex-row">
                            <div className='max-w-sm'>
                               <img src="./InLance.png" alt="" />
                            </div>
                            <div className='max-w-sm mt-10 lg:mt-0 lg:ml-10 '>
                                <h1 className="text-2xl font-extrabold ">InLance</h1>
                                <p className= "mb-4 mt-2"><span className='border border-blue-700 p-1 px-2 rounded-lg text-gray-700 font-semibold text-xs'>SIH</span></p>
                                <p className='text-base font-normal leading-relaxed text-gray-600'>InLance is a platform I created for the Smart India Hackathon 2024 to connect freelancers with clients. It was developed as a prototype to demonstrate key features like a user-friendly interface, secure payments, and diverse project categories.</p>
                                <a href="https://ashishkolhe.netlify.app/"><button className='btn px-4 mt-4 p-2 focus:outline-none bg-gradient-to-r from-yellow-400 to-orange-600 text-white font-bold'>Go to Site</button></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
            <img className='w-36' src="./More.gif" alt="" />
            </div>
            <p className='text-gray-700 font-semibold  text-center px-8'>More exciting projects are on the way, stay tuned!</p>
        </div>
    )
}

export default Projects