import React from 'react'
import { Link } from "react-router-dom";

const Adminstraction = () => {
    return (
        <>

            <div className="bgimg">
                <div className="centerdiv">
                    <img src="http://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-128.png" id="profilepic"></img>
                    <h2 className="hed">Adminstraction</h2>
                    <form>
                        <div>
                            <Link to="/Register"> <button className="singup" type="submit">CREATE TEACHER</button></Link>
                        </div>
                        <div>
                            <button className="singin" type="submit">ASSIGN SUBJECT</button>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Adminstraction;