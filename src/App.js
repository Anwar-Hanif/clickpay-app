// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContent from "./components/pages/dashboard/DashboardContent";
import Area from "./components/pages/area/Area";
import Locality from "./components/pages/area/Locality";
import SubLocality from "./components/pages/area/SubLocality";
import Layout from "./components/layout/Layout";
import NoPage from "./components/pages/area/NoPage";
import Logout from "./components/logout/Logout";
import Profile from "./components/users/Profile";
import AddCityModal from "./components/pages/area/modals/AddCityModal";
import EditCityModal from "./components/pages/area/modals/EditCityModal";
import Login from "./components/login/Login";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductListing/>} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/Login" element={<Login />} />
            <Route path="DashboardContent" element={<DashboardContent />} />
            <Route path="Area" element={<Area />} />
            <Route path="Locality" element={<Locality />} />
            <Route path="SubLocality" element={<SubLocality />} />
            <Route path="Logout" element={<Logout />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="AddCityModal" element={<AddCityModal />} />
            <Route path="EditCityModal" element={<EditCityModal />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
