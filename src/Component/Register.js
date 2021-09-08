import React from 'react'
import {Link} from "react-router-dom";
import Navbar from './Navbar';
const Register = () => {
    return (
        <>

            <body className="bg-gray-300" style={{ "font-family": "Roboto" }}>
                <div className="w-full h-screen flex items-center">
                    <form className="w-full md:w-6/12 bg-white  py-20 mt-28">
                        <div className="flex font-bold justify-center mt-6">
                            <img className="h-20 w-20 -mt-10"
                                // src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" />
                                src="https://vulms.vu.edu.pk/App_Themes/Default/Images/logos/Logo-New.png" id="logoimg1" />
                        </div>
                        <h2 className="text-3xl text-center text-gray-700 mb-4">CREATE FORM</h2>
                        <div className="px-12 pb-10">
                            <div className="w-full mb-2">
                                <div className="flex items-center">
                                    <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user my-6'></i>
                                    <input type='text' placeholder="Username"
                                        className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                                </div>
                            </div>

                            <div className="w-full mb-2">
                                <div className="flex items-center">
                                    <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-envelope my-6'></i>
                                    <input type='text' placeholder="E-Mail"
                                        className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                                </div>
                            </div>
                            <div className="w-full mb-2">
                                <div className="flex items-center">
                                    <i className='ml-3 fill-current text-gray-400 text-xs z-10 fa fa-graduation-cap my-6'></i>
                                    <input type='text' placeholder="Eaducation"
                                        className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                                </div>
                            </div>
                            <div className="w-full mb-2">
                                <div className="flex items-center">
                                    <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-male my-6'></i>
                                    <select type='text'
                                        className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none -ml-3" >
                                        <option className="option ">Gender</option>
                                        <option>Man</option>
                                        <option>Woman</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full mb-2">
                                <div className="flex items-center">
                                    <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-phone my-6'></i>
                                    <input type='text' placeholder="Phone"
                                        className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none -ml-5" />
                                </div>
                            </div>

                            <div className="w-full mb-2">
                                <div className="flex items-center">
                                    <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock my-6'></i>
                                    <input type='text' placeholder="Password"
                                        className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none -ml-5" />
                                </div>
                            </div>
                            <div className="w-full mb-2">
                                <div className="flex items-center">
                                    <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock my-6'></i>
                                    <input type='text' placeholder="Conform Password"
                                        className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none -ml-5" />
                                </div>
                            </div>
                             <a href="#" className="text-xs text-gray-500 float-right mb-4">I allready have an Account</a>
                             <button type="submit"

                                className="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none">CREATE TEACHER</button>
                        </div>
                    </form>
                    <div className="w-full md:w-6/12  py-20 -mt-28">
                        <div className="flex font-bold justify-center mt-6">
                            <img className="max-h-80 w-96 -mt-20"
                                src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" />

                        </div>
                    </div>

                </div>
            </body>



        </>
    )
}

export default Register;