import { Formik } from 'formik';
import React from 'react';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
function Studentlog() {
    const validate = Yup.object({
        email: Yup.string()
            .email('Email is inval')
            .required('Email is Required'),

        password: Yup.string()
            .min(6, 'password must b at least6 charaters')
            .required('password is required'),
    })
    return (
        <>
            <body className=" stulog bg-gray-300" style={{ "font-family": "Roboto" }}>
                <div className="w-full h-screen  flex items-center">
                    <Formik
                        initialValues={{ email: "" }}
                        validationSchema={validate}
                    >
                        {
                            ({
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                            }) => (

                                <form className="w-full md:w-6/12 py-20 -mt-48" onSubmit={handleSubmit}>
                                    <div className="flex font-bold justify-center mt-6">
                                        <img className="h-20 w-10 mt-10"
                                            // src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" />
                                            src="https://vulms.vu.edu.pk/App_Themes/Default/Images/logos/Logo-New.png" id="logoimg1" />
                                    </div>
                                    <h2 className="text-3xl text-center  text-white mb-4">STUDENT LOG IN</h2>
                                    <div className="px-12 pb-10">

                                        <div className="w-full mb-2">
                                            <div className="flex items-center ">
                                                <i className='ml-3 fill-current text-gray-400  text-xs z-10 fas fa-envelope my-6'></i>
                                                <input name="email" onChange={handleChange} value={values.email} type='text' placeholder="E-Mail"
                                                    className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                                            </div>
                                            <div className="error">
                                                {
                                                    errors.email
                                                }
                                            </div>
                                        </div>

                                        <div className="w-full mb-2">
                                            <div className="flex items-center">
                                                <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock my-6'></i>
                                                <input name="password" onChange={handleChange} value={values.password} type='password' placeholder="Password"
                                                    className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none " />
                                            </div>
                                            <div className="error">
                                                {
                                                    errors.password
                                                }
                                            </div>
                                        </div>

                                        <Link to="/Student Sign up Form"> <a href="#" className="text-xs text-white text-1xl float-right mb-4">First Sign Up</a></Link>
                                        <button type="submit"

                                            className="w-full py-2 rounded-full bg-green-600 text-white text-2xl focus:outline-none">LOG IN</button>
                                    </div>
                                </form>
                            )
                        }
                    </Formik>
                    <div className="w-full md:w-6/12  py-20 -mt-28">
                        <div className="flex font-bold justify-center mt-6">
                            <img className="max-h-80 w-96 -mt-10"
                                src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" />

                        </div>
                    </div>

                </div>
            </body>
        </>
    )
}

export default Studentlog;