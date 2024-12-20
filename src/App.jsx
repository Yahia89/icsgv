import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import EventsPage from "./components/EventsPage";
import PrayerTimes from "./components/PrayerTimes";
import About from "./components/About";
import Resources from "./components/Resources";
import Services from "./components/Services";
import LiveStream from "./components/LiveStream";
import Library from "./components/Library";
import Clinic from "./components/Clinic";
import Matrimonial from "./components/Matrimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/icsgv/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/prayertimes" element={<PrayerTimes />} />
        <Route path="/prayertimes" element={<PrayerTimes />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stream" element={<LiveStream />} />
        <Route path="/about" element={<About />} />
        <Route path="/library" element={<Library />} />
        <Route path="/clinic" element={<Clinic />} />
        <Route path="/matrimonial" element={<Matrimonial />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
