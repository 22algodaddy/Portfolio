import Navbar from "./Components/navbar/navbar.jsx"
import Home from "./Components/home/home.jsx"
import About from "./Components/About/about.jsx"
import Portfolio from "./Components/Portfolio/portfolio.jsx"
import Socialconnect from "./Components/SocialLinks/socialLink.jsx"
import Experience from "./Components/experience/experience.jsx"
import Contact from "./Components/contact/contact"
function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About></About>
      <Portfolio></Portfolio>
      <Socialconnect></Socialconnect>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;
