import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import background from './assets/img/background.jpg'
import LandingPage from "./components/LandingPage/LandingPage";
import LoginForm from "./components/LoginForm/LoginForm";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  return (
    <Router>
      <div style={{
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;
