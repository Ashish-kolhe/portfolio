import React from 'react'

const About = () => {
  return (
    <div className=''>
        <h1 id='about' className='text-center font-extrabold text-gray-800 text-3xl mt-10 '>ABOUT <br /><span className='font-mono text-5xl bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent'>-</span></h1>
        <p className='text-center font-semibold text-gray-700 text-md lg:mb-0 mb-4 px-8 lg:px-32'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
    <div className='flex justify-center'>
    <div className='max-w-5xl'>
       <div className="hero bg-white py-10  lg:p-10">
  <div className="hero-content flex-col px-10 lg:flex-row">
    <div className='max-w-sm'>
    <h1 className="text-2xl font-extrabold mb-4 text-gray-800">Who am i?</h1>
  <p className='text-base font-normal leading-relaxed text-gray-600'>My focus is on building websites that solve real problems, not just chasing certifications. I enjoy sharing web development tips and insights on <span className='text-amber-500 font-bold underline'><a href="https://www.linkedin.com/in/ashish-kolhe-b4800b343">LinkedIn</a></span> and <span className='text-amber-500 font-bold underline'><a href="https://instagram.com/ashishkolhe_">Instagram</a></span> to help others improve their skills.
<br/>
<br />
I’m always open to new challenges. If you have an opportunity that aligns with my skills, where I can contribute, learn, and grow, don’t hesitate to reach out!</p>
<a 
  href="#contact" 
  className='btn mt-8 px-10 py-2 border-none bg-gradient-to-r from-yellow-400 to-orange-600 text-white text-lg font-bold block text-center'>
CONTACT
</a>
  </div>
    <div className='max-w-sm mt-10 lg:mt-0 lg:ml-10 '>
      <h1 className="text-2xl font-extrabold mb-4 text-gray-800">My Skills!</h1>
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-orange-500 bg-white hover:shadow-md ">HTML</kbd>
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-blue-700 bg-white hover:shadow-md">CSS</kbd>
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-yellow-500 bg-white hover:shadow-md">JavaScript</kbd>
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-black bg-white hover:shadow-md">Next.js</kbd>
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-sky-600 bg-white hover:shadow-md">React</kbd>
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-purple-700 bg-white hover:shadow-md">OAuth</kbd>
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-cyan-500 bg-white hover:shadow-md">DaisyUI</kbd>
     
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-black bg-white hover:shadow-md">GitHub</kbd>
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-blue-700 bg-white hover:shadow-md">Tailwind CSS</kbd>
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-black bg-white hover:shadow-md">Vercel</kbd>
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-sky-900 bg-white hover:shadow-md">SEO</kbd>
      
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-blue-700 bg-white hover:shadow-md">Razorpay</kbd>
      <kbd className="kbd kbd-md m-2 font-sans font-semibold text-slate-900 bg-white hover:shadow-md">Responsive Design</kbd>
    </div>
  </div>
</div> 
    </div>
    </div>
    </div>
  )
}

export default About