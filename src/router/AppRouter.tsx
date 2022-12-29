import { Route, Routes } from "react-router-dom";

import LoginPage from "../auth/pages/LoginPage";
import { Navbar } from "../ui/components/NavBar";
import HeroesRoutes from "./HeroesRoutes";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
