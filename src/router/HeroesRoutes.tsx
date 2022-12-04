import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroPage, MarvePage, SearchPage } from "../heroes/pages";
import { Navbar } from "../ui/components";

const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvePage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    );
};

export default HeroesRoutes;
