import About from "./components/About"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <div className="font-body">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
    </div>
  )
}

export default App
