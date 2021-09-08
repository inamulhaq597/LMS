import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";


function Login() {
    const [userRegister, setUserregister] = useState({
        EMail: "",
        Password: "",
        Student: "",
    });
    const [errors, setErrors] = useState({});
    const History = useHistory()
    const handelinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserregister({ ...userRegister, [name]: value })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        const newerrors = {};
        if (!userRegister.EMail) {
            newerrors.EMail = "Field is Required"
        }
        if (!userRegister.Password) {
            newerrors.Password = "Field is Required"
        }
        setErrors(newerrors);

    }


    const [userLoginpage, setUserLoginpage] = useState({
        logpagestu: "",
    });
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUserLoginpage({ ...userLoginpage, [name]: value })
    }
    console.log(userLoginpage)
    const StudentPage = (e) => {
        e.preventDefault();

        if (userLoginpage.logpagestu == "TEACHER") {
            History.push("Dashbord/Teacherdashbord")
        }
        if (userLoginpage.logpagestu == "STUDENT") {
            History.push("Dashbord/Studentdashbord")
        }
        if (userLoginpage.logpagestu == "ADMIN") {
            History.push("Dashbord")
        }



    }
    return (
        <>
            <div className="bgimg">
                <div className="centerdiv">
                    <img src="http://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-128.png" id="profilepic"></img>
                    <h2 className="hed">LOGIN</h2>
                    <form onSubmit={handlesubmit}>

                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-envelope my-6  '></i>
                                <input type='text' name="EMail" value={userRegister.EMail} onChange={handelinput} placeholder="E-Mail"
                                    className="-mx-6 px-8 w-full rounded-full px-3 py-2 text-gray-700 focus:outline-none" />
                                <div className="error">
                                    {
                                        errors.EMail
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock my-6'></i>
                                <input type='password' name="Password" value={userRegister.Password} onChange={handelinput} placeholder="Password"
                                    className="-mx-6 px-8 w-full rounded-full px-3 py-2 text-gray-700 focus:outline-none -ml-5" />
                                <div className="error">
                                    {
                                        errors.Password
                                    }
                                </div>
                            </div>


                            <div class="block">

                                <div class="mt-2 flex justify-around">
                                    <div>
                                        <label className="inline-flex items-center text-white">
                                            <input onChange={handleChange} type="radio" value={userLoginpage.Teacher} class="form-radio" name="logpagestu" value="TEACHER" />
                                            <span class="ml-2">TEACHER</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center text-white">
                                            <input onChange={handleChange} value={userLoginpage.Student} name="logpagestu" type="radio" class="form-radio" value="STUDENT" />
                                            <span class="ml-2">STUDENT</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center text-white">
                                            <input onChange={handleChange} value={userLoginpage.Admin} type="radio" class="form-radio" name="logpagestu" value="ADMIN" />
                                            <span class="ml-2">ADMIN</span>
                                        </label>
                                    </div>

                                </div>
                            </div>

                        </div>


                        <Link to="/Dashbord"><button onClick={StudentPage} type="submit"

                            className="w-full py-2 rounded-full bg-green-600 text-gray-100 mt-2 focus:outline-none">LOG IN</button> </Link>

                    </form>
                </div>

            </div>

        </>
    )
}

export default Login;