import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import background from "./assets/img/background.jpg";
import LandingPage from "./components/LandingPage/LandingPage";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import UserProvider from "./context/UserContext";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import LoginMobile from "./pages/LoginMobile";
import SubjectPage from "./pages/SubjectPage";

function App() {
  return (
    <Router>
      <UserProvider>
        <div
          style={{
            height: "100vh",
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "scroll"
          }}
        >
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginMobile />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/subjecttable" element={<SubjectPage />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
