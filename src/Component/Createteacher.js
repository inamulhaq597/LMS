import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DashbordLayout from './DashboardLayout';

const Createteacher = () => {
   

    const [userRegister, setUserregister] = useState({
        Username: "",
        EMail: "",
        Eaducation: "",
        Gender: "",
        Phone: "",
        Password: "",
        CPassword: "",
        
    });
    const [errors, setErrors] = useState({});

    const handelinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserregister({ ...userRegister, [name]: value })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        const newerrors = {};
        if (!userRegister.Username) {
            newerrors.Username = "Field is Required"
        }
        if (!userRegister.EMail) {
            newerrors.EMail = "Field is Required"
        }
        if (!userRegister.Eaducation) {
            newerrors.Eaducation = " Field is Required"
        }

        if (!userRegister.Gender) {
            newerrors.Gender = "Field is Required"
        }
        if (!userRegister.Phone) {
            newerrors.Phone = "Field is Required"
        }

        if (!userRegister.Password) {
            newerrors.Password = "Field is Required"
        }
        if (!userRegister.CPassword) {
            newerrors.CPassword = "Field is Required"
        }

        setErrors(newerrors);

    }
    return (
        <>
<DashbordLayout>
<div className="flex justify-center">
                <form className=" md:w-5/12 bg-white  py-10 " onSubmit={handlesubmit}>
                    {/* <div className="flex font-bold justify-center mt-6">
                            <img className="h-20 w-20 -mt-10"
                               
                                src="https://vulms.vu.edu.pk/App_Themes/Default/Images/logos/Logo-New.png" id="logoimg1" />
                        </div> */}
                    <h2 className="text-3xl text-center text-gray-700 mb-4">CREATE TEACHER</h2>
                    <div className="px-12 pb-0.5">
                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user my-6'></i>
                                <input type='text' name="Username" value={userRegister.Username} onChange={handelinput} placeholder="Username"
                                    className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                            </div>
                            <div className="error">
                                {
                                    errors.Username
                                }
                            </div>
                        </div>

                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-envelope my-6'></i>
                                <input type='e-mail' name="EMail" value={userRegister.EMail} onChange={handelinput} placeholder="E-Mail"
                                    className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                            </div>
                            <div className="error">
                                {
                                    errors.EMail
                                }
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <i className='ml-3 fill-current text-gray-400 text-xs z-10 fa fa-graduation-cap my-6'></i>
                                <input type='text' name="Eaducation" value={userRegister.Eaducation} onChange={handelinput} placeholder="Eaducation"
                                    className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                            </div>
                            <div className="error">
                                {
                                    errors.Eaducation
                                }
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-male my-6'></i>
                                <select type='text' name="Gender" value={userRegister.Gender} onChange={handelinput}
                                    className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none -ml-3" >
                                    <option className="option ">Gender</option>
                                    <option>Man</option>
                                    <option>Woman</option>
                                </select>
                            </div>
                            <div className="error">
                                {
                                    errors.Gender
                                }
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-phone my-6'></i>
                                <input type='number' name="Phone" value={userRegister.Phone} onChange={handelinput} placeholder="Phone"
                                    className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none -ml-5" />
                            </div>
                            <div className="error">
                                {
                                    errors.Phone
                                }
                            </div>
                        </div>

                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock my-6'></i>
                                <input type='Password' name="Password" value={userRegister.Password} onChange={handelinput} placeholder="Password"
                                    className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none -ml-5" />
                            </div>
                            <div className="error">
                                {
                                    errors.Password
                                }
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock my-6'></i>
                                <input type='Password' name="CPassword" value={userRegister.CPassword} onChange={handelinput} placeholder="Conform Password"
                                    className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none -ml-5" />
                            </div>
                            <div className="error">
                                {
                                    errors.CPassword
                                }
                            </div>
                        </div>

                        <button type="submit"

                            className="w-full py-3 text-2xl  mt-2 rounded-full bg-green-600 text-gray-100  focus:outline-none">CREATE</button>
                    </div>
                </form>
            </div>
</DashbordLayout>


        </>
    )
}

export default Createteacher;