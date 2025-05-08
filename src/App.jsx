import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashVivus from './components/SplashVivus';
import { HelmetProvider } from 'react-helmet-async';
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
import HajjUmrahCommittee from "./components/HajjUmrahCommittee";
import BanquetHall from "./components/BanquetHall";
import Funeral from "./components/Funeral";
import ScrollToTop from "./components/ScrollToTop";
import { MantineProvider } from "@mantine/core";
import NotFound from './components/NotFound';
import WeekendSchool from "./components/WeekendSchool";
import Donate from "./components/Donate";
import TermsOfUse from "./components/TermsOfUse";


function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashEnd = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashVivus onAnimationEnd={handleSplashEnd} />
      ) : (
        <Router>
          <MantineProvider>
            <HelmetProvider>
              <ScrollToTop />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/prayertimes" element={<PrayerTimes />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/services" element={<Services />} />
              <Route path="/stream" element={<LiveStream />} />
              <Route path="/about" element={<About />} />
              <Route path="/library" element={<Library />} />
              <Route path="/clinic" element={<Clinic />} />
              <Route path="/matrimonial" element={<Matrimonial />} />
              <Route path="/banquet" element={<BanquetHall />} />
              <Route path="/funeral-services" element={<Funeral />} />
              <Route path="/tripstomecca" element={<HajjUmrahCommittee />} />
              <Route path="/weekendislamicschool" element={<WeekendSchool />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/termsofuse" element={<TermsOfUse />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
              <Footer />
            </HelmetProvider>
          </MantineProvider>
        </Router>
      )}
    </>
  );
}

export default App;
