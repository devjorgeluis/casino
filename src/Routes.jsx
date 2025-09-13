import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile/Profile";
import MobileProfileHistory from "./pages/Profile/MobileProfileHistory";
import MobileProfileChangePassword from "./pages/Profile/ChangePassword";
import SportRules from "./pages/SportRules";
import Ultim8SportRules from "./pages/Ultim8SportRules";
import MarketDescription from "./pages/MarketDescription";
import TypeOfBet from "./pages/TypeOfBet";
import Layout from "./components/Layout";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/pay-history" element={<MobileProfileHistory />} />
                <Route path="/profile/change-password" element={<MobileProfileChangePassword />} />
                <Route path="/sport-rules" element={<SportRules />} />
                <Route path="/ultim8-sport-rules" element={<Ultim8SportRules />} />
                <Route path="/market-description" element={<MarketDescription />} />
                <Route path="/tipos-de-apuestas" element={<TypeOfBet />} />
            </Route>
        </Routes>
    );
}