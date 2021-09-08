import React from 'react'
import Studentdashbord from './Studentdashbord';
import picture3 from '../img/COMPUTER.png'
import picture4 from '../img/combg.png'



const Onlineclass = () => {
    return (
        <Studentdashbord>
            <>
                <div className="flex ">
                    <div className="rounded-4x1 mx-10 overflow-hidden shadow-xl max-w-7xl my-3 bg-black">
                        {/* <img src={picture4} className="w-full" /> */}
                        <div className="flex justify-center mt-16">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/yhzwdEhtyCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            {/* <img src={picture3} className="-mt-3" /> */}
                        </div>
                        <div className="text-center px-3 pb-6 pt-2">
                            <h3 className="text-white text-sm text-3xl bold mt-5 font-sans">COMPUTER SCINCE</h3>
                        </div>
                        <div className="flex justify-center pb-3 text-white">

                           
                        </div>
                    </div>

                    <div className="rounded-4x1 mx-10 overflow-hidden shadow-xl max-w-7xl my-3 bg-black">

                        <div className="flex justify-center mt-16">
                            {/* <img src={picture3} className="-mt-3" /> */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/yhzwdEhtyCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="text-center px-3 pb-6 pt-2">
                            <h3 className="text-white text-sm text-3xl bold mt-5 font-sans">DATA STRUCTURE</h3>
                        </div>
                        <div className="flex justify-center pb-3 text-white">

                           
                        </div>
                    </div>

                    {/* <div className="rounded-4xl mx-10 overflow-hidden shadow-xl  max-w-full my-3 bg-blue-500">
                 
                    <div className="flex justify-center mt-16">
                        <img src={picture3} className="-mt-3" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-white text-sm text-3xl bold font-sans">CYBER SECURITY</h3>
                    </div>
                    <div className="flex justify-center pb-3 text-white">
        
                        <button type="submit"

                            className="w-full py-2 rounded-full bg-black hover:bg-red-900  text-gray-100 mt-2 focus:outline-none">PLAY NOW</button>
                    </div>
                </div> */}



                </div>
            </>
        </Studentdashbord>
    )
}

export default Onlineclass;