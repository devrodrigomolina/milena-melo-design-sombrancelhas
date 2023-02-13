import { BrowserRouter } from "react-router-dom"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Gallery from "./components/Gallery/Gallery"
import Header from "./components/Header/Header"
import TopHeader from "./components/Header/TopHeader/TopHeader"
import Home from "./components/Home/Home"
import Testimonials from "./components/Testimonials/Testimonials"
import { GlobalStyles } from "./styles/Global"

const App = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <TopHeader />
      <Home />
      <About />
      <Gallery />
      <Testimonials />
      <Footer />
      <GlobalStyles />
    </div>
    </BrowserRouter>
  )
}

export default App
