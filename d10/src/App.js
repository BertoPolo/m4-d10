import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyNavbar from "./Components/MyNavbar"
import LoginPage from "./Components/LoginPage"
import Home from "./Components/Home"
import AlbumPage from "./Components/AlbumPage"
import ArtistPage from "./Components/ArtistPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/artistPage/:id" element={<ArtistPage />} />
          <Route path="/albumPage/:id" element={<AlbumPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
