import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginForm from "./components/LoginForm/LoginForm";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
