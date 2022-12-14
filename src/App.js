import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import UserProvider from "./context/UserContext";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import LoginMobile from "./pages/LoginMobile";
import SubjectPage from "./pages/SubjectPage";
import StudentsPage from "./pages/StudentsPage";
import UsersPage from "./pages/UsersPage";
import PrivateRoute from "./routes/PrivateRoute";
import PrivateRouteAdmin from "./routes/PrivateRouteAdmin";
import NormalStudentPage from "./pages/NormalStudentPage";
import SubjectsList from "./pages/SubjectsList";
import UsersIsAceptedPage from "./pages/UsersIsAceptedPage";
import SubjectProvider from "./context/SubjectContext";
import AlumnsProvider from "./context/AlumnsContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <SubjectProvider>
          <AlumnsProvider>
            <NavbarComponent />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route path="/login" element={<LoginMobile />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route
                path="/students"
                element={
                  <PrivateRoute>
                    <NormalStudentPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/subjects"
                element={
                  <PrivateRoute>
                    <SubjectsList />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Error404 />} />
              <Route
                path="/isacepted"
                element={
                  <PrivateRouteAdmin>
                    <UsersIsAceptedPage />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path="/admin"
                element={
                  <PrivateRouteAdmin>
                    <AdminPage />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path="/subject-admin"
                element={
                  <PrivateRouteAdmin>
                    <SubjectPage />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path="/students-admin"
                element={
                  <PrivateRouteAdmin>
                    <StudentsPage />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path="/users-admin"
                element={
                  <PrivateRouteAdmin>
                    <UsersPage />
                  </PrivateRouteAdmin>
                }
              />
            </Routes>
          </AlumnsProvider>
        </SubjectProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
