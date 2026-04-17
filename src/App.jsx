import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Banner from "./components/Banner";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Planner from "./components/Planner";
import Performance from "./components/Performance";
import Challenges from "./components/Challenges";
import Footer from "./components/Footer";
import './App.css';

const Home = () => (
  <>
    <Hero />
    <Tools />
    <Banner />
    <About />
    <Pricing />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/desempenho" element={<Performance />} />
        <Route path="/desafios" element={<Challenges />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;