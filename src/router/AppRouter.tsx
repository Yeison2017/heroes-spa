import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import DcPage from "../heroes/pages/Dcpage";
import MarvePage from "../heroes/pages/MarvePage";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="marvel" element={<MarvePage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    );
};

export default AppRouter;
