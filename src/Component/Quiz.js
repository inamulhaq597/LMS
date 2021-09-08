import React from 'react'
import Studentdashbord from './Studentdashbord';
import picture3 from '../img/COMPUTER.png'
import picture4 from '../img/combg.png'
import picture5 from '../img/DATASTRU.png'


const Quiz = () => {
    return (
        <Studentdashbord>
            <>
            <div className="flex ">
                <div className="rounded-3xl mx-10 overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
                    <img src={picture4} className="w-full" />
                    <div className="flex justify-center -mt-8">
                        <img src={picture3} className="-mt-3" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-white text-sm text-3xl bold font-sans">COMPUTER SCINCE</h3>
                    </div>
                    <div className="flex justify-center pb-3 text-white">
        
                        <button type="submit"

                            className="w-full py-2 rounded-full bg-black hover:bg-green-900  text-gray-100 mt-2 focus:outline-none">Start Now</button>
                    </div>
                </div>

                <div className="rounded-3xl mx-10 overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
                    <img src={picture4} className="w-full" />
                    <div className="flex justify-center -mt-8">
                        <img src={picture3} className="-mt-3" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-white text-sm text-3xl bold font-sans">DATA STRUCTURE</h3>
                    </div>
                    <div className="flex justify-center pb-3 text-white">
        
                        <button type="submit"

                            className="w-full py-2 rounded-full bg-black hover:bg-green-900  text-gray-100 mt-2 focus:outline-none">Start Now</button>
                    </div>
                </div>

                <div className="rounded-3xl mx-10 overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
                    <img src={picture4} className="w-full" />
                    <div className="flex justify-center -mt-8">
                        <img src={picture3} className="-mt-3" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-white text-sm text-3xl bold font-sans">CYBER SECURITY</h3>
                    </div>
                    <div className="flex justify-center pb-3 text-white">
        
                        <button type="submit"

                            className="w-full py-2 rounded-full bg-black hover:bg-green-900  text-gray-100 mt-2 focus:outline-none">Start Now</button>
                    </div>
                </div>

                <div className="rounded-3xl mx-10 overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
                    <img src={picture4} className="w-full" />
                    <div className="flex justify-center -mt-8">
                        <img src={picture3} className="-mt-3" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-white text-sm text-3xl bold font-sans">COMPUTER TECNOLGEY</h3>
                    </div>
                    <div className="flex justify-center pb-3 text-white">
        
                        <button type="submit"

                            className="w-full py-2 rounded-full bg-black hover:bg-green-900  text-gray-100 mt-2 focus:outline-none">Start Now</button>
                    </div>
                </div>

</div>
            </>
        </Studentdashbord>
    )
}

export default Quiz;