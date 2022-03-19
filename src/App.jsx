import { Link } from 'react-scroll';
import Services from "./sections/Services";
import AboutUs from "./sections/AboutUs";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Plans from "./sections/Plans";
import Home from "./sections/Home";
import Calendar from "./components/Calendar";

function App() {
    return (
        <div className="app-container">
            <div className="dark"></div>
            <Navbar />
            <Link activeClass="active" className="list__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}><button className="scroll-top"><i className="fas fa-arrow-up"></i></button></Link>
            <div className="body">
                <Home />
                <div className="complementary-sections">
                    <AboutUs />
                    <Services />
                </div>
                <Calendar />
                <Plans />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App
