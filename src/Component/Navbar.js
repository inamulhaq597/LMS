import React, { useState } from 'react';
import { Link } from "react-router-dom";
function Navbar() {

    return (
        <>
        <nav className=" nav1 flex items-center justify-between flex-wrap bg-teal-500 p-6 ">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    {/* <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span> */}
    <div className="logo">
                    <img src="https://vulms.vu.edu.pk/App_Themes/Default/Images/logos/Logo-New.png" id="logoimg"></img>
                </div>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow flex justify-center">
    {/* <a href="#responsive-header" class=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4 text-3xl tracking-wide">
      Home
      </a>
      <Link to="/Teacher"><a href="#responsive-header" class=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4 text-2xl tracking-wide">
      TEACHER
      </a></Link>
      <Link to="/Student"><a href="#responsive-header" class=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black text-2xl tracking-wide">
      STUDENT
      </a></Link>
      <Link to="/Adminstraction"><a href="#responsive-header" class=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black text-2xl tracking-wide px-5">
      ADMIN
      </a></Link> */}
      
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 text-2xl mr-5">Contacts us</a>
    </div>

    <div>
    <Link to="/Student Sign up Form"> <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 text-2xl mr-5">REGISTER</a></Link>
    </div>

    <div>
    <Link to="/Login"> <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 text-2xl mr-5">LOGIN</a></Link>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar