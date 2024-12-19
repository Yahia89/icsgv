import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import EventsPage from "./components/EventsPage";
import PrayerTimes from "./components/PrayerTimes"
import About from "./components/About"
import Resources from "./components/Resources";
import Services from "./components/Services";

function App() {
  return (
    <Router basename="/icsgv/">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/prayertimes" element={<PrayerTimes />} />
        <Route path="/prayertimes" element={<PrayerTimes />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
