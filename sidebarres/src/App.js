import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import Documents from "./TTable/TimeTable";
import Projects from "./Login";
import Cluster from "./Pages/CourseReg/Cluster";
import ClusterNo from "./Pages/CourseReg/ClusterNo"
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Signup from "./Reg";
import './bg.css'
import DashBoard from "./dashboard/DashBoard";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
 margin-left:40px;
 
  
  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
   
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <div className="log">
<Sidebar/>
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
        
            <Route exact path="/" component={DashBoard} />
            <Route path="/calender" component={Calender} />
            <Route path="/team" component={Cluster} />
            <Route path="/Login" component={Projects} />
            <Route path="/courses" component={ClusterNo} />
            <Route path="/timetable" component={Documents} />
            <Route path="/Registration" component={Signup} />
          </Switch> 
        </AnimatePresence>
      </Pages>
     
    </div>
  );
}

export default App;
