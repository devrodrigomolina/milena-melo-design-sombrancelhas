import { BrowserRouter } from "react-router-dom"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import TopHeader from "./components/Header/TopHeader/TopHeader"
import Home from "./components/Home/Home"
import { GlobalStyles } from "./styles/Global"

const App = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <TopHeader />
      <Home />
      <About />
      <GlobalStyles />
    </div>
    </BrowserRouter>
  )
}

export default App
