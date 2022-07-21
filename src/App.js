import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Work/>
            <Contact/>
            <Resume />

            <Footer />
        </div>
    );
}

export default App;
