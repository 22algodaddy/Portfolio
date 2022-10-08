import Navbar from "./Components/navbar/navbar.jsx"
import Home from "./Components/home/home.jsx"
import About from "./Components/About/about.jsx"
import Portfolio from "./Components/Portfolio/portfolio.jsx"
import SocialConnect from "./Components/SocialLinks/socialLink.jsx"
import Experience from "./Components/experience/experience.jsx"
import Contact from "./Components/contact/contact"
function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Portfolio/>
      <SocialConnect/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
