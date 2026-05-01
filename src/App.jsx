import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Admin from "./components/Admin";
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

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/desempenho" element={<Performance />} />
        <Route path="/desafios" element={<Challenges />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;