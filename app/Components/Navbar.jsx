import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-white/60 backdrop-blur-md px-5 fixed z-50 ">
  <div className="navbar-start">
   <img className='w-10 lg:w-12 rounded-full m-1 ' src="./Ashish.jpg" alt="" />
    <a className="text-base lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent " >ASHISH</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-gray-800 z-50 ">
      <li ><a href='#about'>About</a></li>
      <li >
        <details>
          <summary>Projects</summary>
          <ul className="p-2">
            <li className='hover:text-pink-700'><a href='#coddeit'>Coddeit</a></li>
            <li className='hover:text-green-700'><a href='#krypton'>Krypton</a></li>
            <li className='hover:text-blue-700'><a href='#resume'>ResumeForU</a></li>
            <li className='hover:text-cyan-700'><a href='#inlance'>InLance</a></li>
            <li className='hover:text-fuchsia-700'><a href='#mind'>MindBending</a></li>
            <li className='hover:text-blue-700'><a href='#ui'>UiForU</a></li>
          </ul>
        </details>
      </li>
      <li ><a href='#contact'>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold text-gray-800">
   <li><a href='#about'>About</a></li>
        <li>
          <a>Projects</a>
          <ul className="p-2">
          <li className='hover:text-pink-700'><a href='#coddeit' >Coddeit</a></li>
            <li className='hover:text-green-700'><a href='#krypton'>Krypton</a></li>
            <li className='hover:text-blue-700'><a href='#resume'>ResumeForU</a></li>
            <li className='hover:text-cyan-700'><a href='#inlance'>InLance</a></li>
            <li className='hover:text-fuchsia-700'><a href='#mind'>MindBending</a></li>
            <li className='hover:text-blue-700'><a href='#ui'>UiForU</a></li>
          </ul>
        </li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar