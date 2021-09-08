
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Teacher from './Component/Teacher';
import Adminstraction from "./Component/Adminstraction";
import Student from './Component/Student';
import Login from './Component/Login';
// import Studentlog from './Component/Studentlog';
import Register from './Component/Register';
import Dashbord from './Component/Dashbord';
import Createteacher from './Component/Createteacher';
import AssignSubject from './Component/Assignsubject';
import Studentdashbord from './Component/Studentdashbord';
import Studentprofile from './Component/Studentprofile';
import Quiz from './Component/Quiz';
import Onlineclass from './Component/Onlineclass';
import Teacherdashbord from './Component/Teacherdashbord';
import Quizcreate from './Component/Quizcreate';
function App() {
  return (
   <>
   <BrowserRouter>
     
        <Navbar/>
       
     <Switch>
     
       <Route path="/Teacher" exact component={Teacher}></Route>
       <Route path="/Student" exact component={Student}></Route>
       <Route path="/Adminstraction" exact component={Adminstraction}></Route>
       <Route path="/Login" exact component={Login}></Route>
       <Route path="/Register" exact component={Register}></Route>
       <Route path="/Dashbord" exact component={Dashbord}></Route>
       <Route path="/Dashbord/assignsubject" exact component={AssignSubject}></Route>
       <Route path="/Dashbord/Createteacher" exact component={Createteacher}></Route>
       <Route path="/Dashbord/Studentdashbord" exact component={Studentdashbord}></Route>
       <Route path="/Dashbord/Studentprofile" exact component={ Studentprofile}></Route>
       <Route path="/Dashbord/Quiz" exact component={Quiz}></Route>
       <Route path="/Dashbord/Onlineclass" exact component={Onlineclass}></Route>
       <Route path="/Dashbord/Teacherdashbord" exact component={Teacherdashbord}></Route>
       <Route path="/Dashbord/Quizcreate" exact component={ Quizcreate}></Route>
       {/* <Route path="/Studentlog" exact component={Studentlog }></Route> */}
       <Route path="/Login" exact component={Login}></Route>
       <Route path="/Teacher Sign up Form" exact component={Teacher}></Route>
       <Route path="/Student Sign up Form" exact component={Student}></Route>
       <Route path="/Register" exact component={Adminstraction}></Route>
       <Route path="/Createteacher" exact component={Createteacher}></Route>
       <Route path="/Studentdashbord" exact component={Studentdashbord}></Route>
       <Route path="/Studentprofile" exact component={Studentprofile}></Route>
       <Route path="/Quiz" exact component={Quiz}></Route>
       <Route path="/Onlineclass" exact component={Onlineclass}></Route>
       <Route path="/Teacherdashbord" exact component={Onlineclass}></Route>
       <Route path="/Quizcreate" exact component={Quizcreate}></Route>
       
       
     </Switch>
   </BrowserRouter>
  
   </>
  );
}

export default App;

