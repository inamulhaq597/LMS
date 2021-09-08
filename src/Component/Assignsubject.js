import DashbordLayout from "./DashboardLayout";
import React from 'react';
import picture1 from '../img/book.png'
export default function AssignSubject() {


    return (
        <DashbordLayout>
            <div> <h1 className="text-white text-5xl  flex justify-center">TEACHER SUBJECT ASSIGN</h1></div>
            <div className="flex justify-center">
                <img src={picture1} id="assinpic"></img>
                <form className=" md:w-5/12 bg-red mr-20 mt-14">
                    <div className=" bg-white py-6 flex flex-col justify-center sm:py-12">
                        <div className="p-12">
                            <div className=" relative inline-block text-left dropdown flex justify-between">
                                <select className="inline-flex justify-center  px-14 py-2 text-sm hover:bg-blue-700 mt-16 rounded-full font-medium leading-5 text-gray-500 transition duration-150 border ease-in-out ease-in-out bg-white border border-gray-300 rounded-md hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                                    aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                                    <option>Teachers</option>
                                    <option>Sir Ali</option>
                                    <option>Sir Bilal</option>
                                    <option>Sir Shafiq</option>
                                    <option>Sir Wahab</option>
                                    <option>Sir Asad</option>

                                </select>

                                <select className="inline-flex justify-center  px-14  py-2 text-sm font-medium mt-16  hover:bg-blue-700 rounded-full leading-5 text-gray-500 transition duration-150 border ease-in-out  bg-white border border-gray-300 rounded-md hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                                    aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                                    <option>SUBJECTS</option>
                                    <option>ENGLISH</option>
                                    <option>SCIENCE</option>
                                    <option>MATH</option>
                                    <option>SOCIAL</option>
                                    <option>Physical</option>

                                </select>


                            </div>

                        </div>

                        <div className="flex justify-center">
                            <button type="submit"

                                className=" py-2 px-24 rounded-full bg-green-600 text-gray-100  focus:outline-none">ASSIGN</button>
                        </div>

                    </div>



                </form>
            </div>
        </DashbordLayout>
    )
}