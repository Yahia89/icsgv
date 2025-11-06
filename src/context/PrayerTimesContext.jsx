import { createContext, useState, useContext } from 'react';

const PrayerTimesContext = createContext();

export function PrayerTimesProvider({ children }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  
  return (
    <PrayerTimesContext.Provider value={{ iframeLoaded, setIframeLoaded }}>
      {children}
    </PrayerTimesContext.Provider>
  );
}

export function usePrayerTimes() {
  return useContext(PrayerTimesContext);
}