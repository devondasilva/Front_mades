
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/Contact/contact-us";
import Formation from "./pages/Formations/formations";
import BeachTennis from "./pages/Formations/BeachTennis/beachTennis";
import PadelSport from "./pages/Formations/PadelSport/padelSport";
import Squash from "./pages/Formations/Squash/Squash";
import Tennis from "./pages/Formations/LawnTennis/Tennis";
import Gallery from "./components/formation/gallery/gallery";
import Dossier from "./pages/Dossier";
import Articles from "./pages/Article";
import AboutUs from "./pages/AboutUs/aboutUs";
import 'aos/dist/aos.css';
import { Suspense } from 'react'; // Import Suspense
import '../i18n.js';
import Header from './components/Header/header.js';
import Dos from './pages/Dos.js';




function App() {

return (
<>
  <Suspense fallback={<div>Loading translations...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Formation" element={<Formation />} />
          <Route path="/Formation/BeachTennis" Component={BeachTennis} />
          <Route path="/Formation/Padel" Component={PadelSport} />
          <Route path="/Formation/Squash" Component={Squash} />
          <Route path="/A_propos" Component={AboutUs} />
          <Route path="/Formation/Tennis" element={<Tennis />} />
          <Route path="/Nos_contacts" element={<ContactUs />} />
          <Route path="/Galerie" element={<Gallery />} />
          <Route path="/Dossier" element={<Dossier />} />
          <Route path="/Article" element={<Articles />} />
          <Route path="/Dossier1" element={<Dos />} />

        </Routes>
      </Router>
    </Suspense>
</>
)
}

export default App

