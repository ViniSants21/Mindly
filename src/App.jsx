import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

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
import Login from "./components/Login";

import "./App.css";

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

function Layout() {
  const location = useLocation();
  const noLayoutRoutes = ["/login"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* 🔐 ROTAS PROTEGIDAS */}
        <Route
          path="/planner"
          element={
            <PrivateRoute>
              <Planner />
            </PrivateRoute>
          }
        />

        <Route
          path="/desempenho"
          element={
            <PrivateRoute>
              <Performance />
            </PrivateRoute>
          }
        />

        <Route
          path="/desafios"
          element={
            <PrivateRoute>
              <Challenges />
            </PrivateRoute>
          }
        />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;