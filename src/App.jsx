import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
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
import Register from "./components/Register";
import Profile from "./components/Profile";
import AdminProfile from "./components/AdminProfile"; // 🔥 NOVO
import EditProfile from "./components/EditProfile";

import "./App.css";

/* HOME */
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
  const { user } = useAuth(); // 🔥 pega usuário

  // Páginas sem Navbar/Footer
  const noLayoutRoutes = ["/login", "/cadastro"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ROTAS PROTEGIDAS */}
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

        {/* 🔥 PERFIL DINÂMICO */}
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              {user?.role === "admin" ? <AdminProfile /> : <Profile />}
            </PrivateRoute>
          }
        />

        {/* 🔥 (OPCIONAL) ROTA SÓ PRA ADMIN */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              {user?.role === "admin" ? (
                <AdminProfile />
              ) : (
                <Profile />
              )}
            </PrivateRoute>
          }
        />

        <Route
          path="/editar-perfil"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />

        {/* LOGIN / CADASTRO */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />

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