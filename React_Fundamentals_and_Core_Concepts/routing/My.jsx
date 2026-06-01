
//           MainApp
//             |
//           My.jsx
//        /  /  \    \
//      /  /     \     \ 
// Home  About  Contact  Nopage

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Nopage from "./Nopage"

// <Router>
// <Link to=""
// <Link
// <Routes>
//     <Route>
//     </Route>
// </Routes>
// </Router>

function My(){
    return(
        <>
            <hr />
            <h1>Routing</h1>
            <div>
                <Router>
                    <nav style={{display: 'flex',gap: '16px',padding: '16px',borderBottom: '1px solid #333', alignItems: 'center',backgroundColor: '#1a1a1a',}}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                {/* or  <a href="/home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                        <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
                        <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a> */}
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="*" element={<Nopage />}/>
                    </Routes>
                </Router>
            </div>
        </>
    )
}export default My;
