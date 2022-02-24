import { Link } from 'react-scroll';
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import Home from "./components/Home";

function App() {
    return (
        <div className="app-container">
            <div className="dark"></div>
            <Navbar />
            <Link activeClass="active" className="list__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}><button className="scroll-top"><i className="fas fa-arrow-up"></i></button></Link>
            <div className="body">
                <Home />
                <AboutUs />
                <Gallery />
                <Plans />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App
