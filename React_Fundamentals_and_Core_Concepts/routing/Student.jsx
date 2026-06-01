// Create a React application for a Student Portfolio Website using functional components and React Router.
// Components
// •	Main.jsx – Configure routes 
// •	Home.jsx – Display student details 
// •	Projects.jsx – Display projects 
// •	Nopage.jsx- Page not found.
// Requirements
// •	Create navigation for Home and Projects pages. 
// •	Home page should display: Welcome to My Portfolio also show student Name, Course, and Education. 
// •	Add a link to the Projects page. 
// •	Projects page should display 3 projects using props: 
// o	Project Name 
// o	Description 
// o	Image 
// •	Use functional components and basic CSS styling.


import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Student_home from "./Student_home";
import Student_project from "./Student_project";
import Student_nopage from "./Student_nopage";

import img1 from "../assets/hero.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function Student(){
    const s=[{name:"ABC",desc:"Test",image:img1},
        {name:"ABC",desc:"Test",image:img2},
        {name:"ABC",desc:"Test",image:img2}
    ]

    return(
        <>
            <h1>Student Portfolio</h1>
            <div>
                <Router>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Project</Link></li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<Student_home/>}/>
                        <Route path="/projects" element={<Student_project/>}/>
                        <Route path="/*" element={<Student_nopage/>}/>
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default Student