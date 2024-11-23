import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import EventsPage from "./components/EventsPage";
import PrayerTimes from "./components/PrayerTimes"
import About from "./components/About"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/prayertimes" element={<PrayerTimes />} />
        <Route path="/prayertimes" element={<PrayerTimes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
