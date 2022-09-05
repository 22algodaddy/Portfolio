import Navbar from "./Components/navbar/navbar.jsx"
import Home from "./Components/home/home.jsx"
import About from "./Components/About/about.jsx"
import Socialconnect from "./Components/SocialLinks/socialLink.jsx"
function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About></About>
      <Socialconnect></Socialconnect>
    </div>
  );
}

export default App;
