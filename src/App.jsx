// importing css
import "./App.css"
// importing components
import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { MainPage } from "./components/MainPage/MainPage"

function App() {

  return (
    <div className="app">
      <Header />
      <div className="under-header">
        <Sidebar />
        <MainPage />
      </div>
    </div>
  )
}

export default App
