import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experences from "./components/Experences"
import Design from "./components/Design"
import OurResult from "./components/OurResult"
import Works from "./components/Works"
import HowWeWork from "./components/HowWeWork"
import WeWork from "./components/WeWork"
import Registration from "./components/Registration"
import Map from "./components/Map"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experences />
      {/*<Design />
      <OurResult />
      <Works />
      <HowWeWork />
      <WeWork />
      <Registration />
      <Map />
      <Footer />*/}
    </div>
  );
}

export default App;
