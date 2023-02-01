import Header from "./components/Header/Header"
import TopHeader from "./components/Header/TopHeader/TopHeader"
import Home from "./components/Home/Home"
import { GlobalStyles } from "./styles/Global"

const App = () => {
  return (
    <div className="app">
      <Header />
      <TopHeader />
      <Home />
      <GlobalStyles />
    </div>
  )
}

export default App
