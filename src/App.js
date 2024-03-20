import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Movies from "./components/Movies.jsx";
import MyFooter from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Header />
        <Routes>
          <Route path="/" element={<Movies title="Lord of the Rings" category="Trending Now" />} />
          <Route path="/prima" element={<Movies title="Disney" category="Watch It Again" />} />
          <Route path="/seconda" element={<Movies title="Marvel" category="New Releases" />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
