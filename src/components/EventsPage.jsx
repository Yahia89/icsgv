// Remove unused imports
import React, { useState } from 'react';
import Modal from 'react-modal';
import SEO from './SEO';
import event1 from '../assets/eventsandannouncements/arabic_class.jpg';
import event2 from '../assets/eventsandannouncements/arabic_class(en).jpg';
import event3 from '../assets/eventsandannouncements/foodbank.png';
import event4 from '../assets/eventsandannouncements/funeral_flyer_2.png';
import event6 from '../assets/eventsandannouncements/hijrah.jpg';
import event7 from '../assets/eventsandannouncements/iqra_school.jpg';
import event8 from '../assets/eventsandannouncements/land_pledge.jpg';
import event9 from '../assets/eventsandannouncements/littleangels.jpg';
import event10 from '../assets/eventsandannouncements/quba_school_flyer.jpg';
import event12 from '../assets/eventsandannouncements/special_bayan.jpg';
import event13 from '../assets/eventsandannouncements/tahfiz.png';
import event14 from '../assets/eventsandannouncements/tajweed.png';
import event15 from '../assets/eventsandannouncements/telecounseling.png';
import event16 from '../assets/eventsandannouncements/weekend_school.jpg';
import event17 from '../assets/eventsandannouncements/mail(5).jpg';
import jummahJam from '../assets/eventsandannouncements/jummah_jam.jpg';

Modal.setAppElement('#root');

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);


  
  // Add the styles to the document
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes modalFade {
        from {
          transform: translate(-50%, -48%);
          opacity: 0;
        }
        to {
          transform: translate(-50%, -50%);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(styleSheet);
  }

  const events = [
    { 
      id: 1, 
      image: jummahJam, 
      title: "Jummah Jam", 
      description: "Join us on Friday, June 13th at 5:30 PM for an evening of fun, games, and community vibes! Watch NBA Finals LIVE and enjoy Table Tennis, Basketball, Carrom Board, Ludo, Checkers & More! Food and fellowship for all ages. For Info: (949) 616-9438 Ahmed" 
    },
    { id: 2, image: event17, title: "Burial Plots", description: "Burial Plots Available" },
    { id: 2, image: event4, title: "Funeral Services", description: "Mortuary | Funeral | Burial | Transport" },
    { id: 3, image: event2, title: "Iqra School", description: "Learn Arabic School" },
    { id: 4, image: event6, title: "Hijrah Club", description: "Hijrah Club Season 3" },
    { id: 5, image: event7, title: "Arabic School", description: "Arabic School on the weekend" },
    { id: 6, image: event8, title: "Land Pledge", description: "Help pay the land next door" },
    { id: 7, image: event9, title: "Little Angels Pre-School", description: "Giving children best start in life" },
    { id: 8, image: event10, title: "Quba Fulltime Islamic School", description: "Private Fulltime Islamic School" },
    { id: 9, image: event3, title: "Food Bank", description: "Walk-in Food distribution" },
    { id: 10, image: event12, title: "Special Bayan", description: "Special Bayan" },
    { id: 11, image: event13, title: "Tafsir", description: "Sisters Tafsir & Fiqh of Salah | Quran" },
    { id: 12, image: event14, title: "Quran Program", description: "Quran | Tajweed | Hifdh" },
    { id: 13, image: event15, title: "Telecounseling", description: "Free Telecounseling for All ICSGV members" },
    { id: 14, image: event16, title: "Weekend Islamic School", description: "Quality weekend Islamic school" },
    { id: 15, image: event1, title: "مدرسة إقرأ", description: "تعلم العربية" },
    { id: 1, 
      image: jummahJam, 
      title: "Jummah Jam", 
      description: "Join us on Friday, June 13th at 5:30 PM for an evening of fun, games, and community vibes! Watch NBA Finals LIVE and enjoy Table Tennis, Basketball, Carrom Board, Ludo, Checkers & More! Food and fellowship for all ages. For Info: (949) 616-9438 Ahmed"  }
  ];

  return (
    <>
          <SEO 
        title="Events, Programs & Announcements | Islamic Center of San Gabriel Valley (ICSGV)"
        description="Discover upcoming events and programs at ICSGV including Arabic classes, Islamic education, community services, and special programs."
      />
    <div class="main">
        <div class="wrapper" style={{backgroundImage:"inherit"}}>
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              مسجد قباء
            </text>
          </svg>
        </div>
        <h5 class="Assalamualaikum">Assalamualaikum</h5>
        <h1 class="welcome">
          Welcome to the Islamic Center of San Gabriel Valley (ICSGV)
        </h1>
    <div style={{ 
      padding: '20px',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      backgroundImage: 'inherit',
      backgroundAttachment: 'fixed',
      backgroundSize: '600px',
      backgroundRepeat: 'repeat',
      backdropFilter: 'blur(5px)',
      borderRadius: '15px',
      zIndex: 1
    }}>
      <h2 style={{
        textAlign: 'center',
        margin: '20px 0',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        color:"#000"
      }}>Upcoming Events</h2>
      <h3 style={{
        textAlign: 'center',
        margin: '10px 0',
        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
        color: "#666",
        fontWeight: 'normal',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>Here you can find up to date events, programs & announcements.</h3>
            <p style={{
        textAlign: 'center',
        margin: '15px 0',
        fontSize: 'clamp(0.8rem, 1.8vw, 1.1rem)',
        color: "#777",
        fontWeight: 'normal',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontStyle: 'italic',
        lineHeight: '1.5'
      }}>Note: Our events and programs cater to both the general community and our educational institutions. Feel free to reach out to the masjid or respective schools for more information about any specific event.</p>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(20px, 3vw, 30px)',  // Increased gap between cards
        padding: 'clamp(20px, 3vw, 40px)',  // Increased padding around grid
        margin: '0 auto',
      }}>
        {events.map((event) => (
          <div
            key={event.id}
            style={{ 
              cursor: 'pointer',
              backgroundColor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              // padding: 'clamp(10px, 2vw, 15px)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
            onClick={() => setSelectedEvent(event)}
          >
            <img 
              src={event.image} 
              alt={event.title} 
              style={{ 
                width: '100%',
                height: 'clamp(150px, 30vw, 200px)',
                objectFit: 'cover',
                borderRadius: '8px'
              }} 
            />
            <h3 style={{ 
              color: '#0078D4',
              marginTop: '10px',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)'
            }}>{event.title}</h3>
            <p style={{ 
              color: '#666',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              marginTop: 'auto'
            }}>{event.description}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedEvent}
        onRequestClose={() => setSelectedEvent(null)}
        style={{
          overlay: { 
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000
          },
          content: { 
            maxWidth: '90vw',
            width: '500px',
            margin: 'auto',
            padding: 'clamp(15px, 3vw, 20px)',
            borderRadius: '10px',
            textAlign: 'center',
            height: 'fit-content',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            opacity: 1,
            transition: 'all 0.5s ease-in-out',
            animation: 'modalFade 0.5s ease',
            color:"black"
          }
        }}
      >
        {selectedEvent && (
          <>
            <button 
              onClick={() => setSelectedEvent(null)} 
              style={{ 
                position: 'absolute',
                right: '10px',
                top: '10px',
                border: 'none',
                background: 'none',
                fontSize: 'clamp(20px, 4vw, 24px)',
                cursor: 'pointer',
                padding: '5px 10px',
                color: "black"
              }}>×</button>
            {/* Add Previous Button */}
            <button
              onClick={() => {
                const currentIndex = events.findIndex(e => e.id === selectedEvent.id);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : events.length - 1;
                setSelectedEvent(events[prevIndex]);
              }}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
                lineHeight: '1'
              }}
            >←</button>
            {/* Add Next Button */}
            <button
              onClick={() => {
                const currentIndex = events.findIndex(e => e.id === selectedEvent.id);
                const nextIndex = currentIndex < events.length - 1 ? currentIndex + 1 : 0;
                setSelectedEvent(events[nextIndex]);
              }}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
                lineHeight: '1'
              }}
            >→</button>
            <img 
              src={selectedEvent.image} 
              alt={selectedEvent.title} 
              style={{ 
                width: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '8px'
              }} 
            />
            <h2 style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              margin: '15px 0'
            }}>{selectedEvent.title}</h2>
            <p style={{ 
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
            }}>{selectedEvent.description}</p>
          </>
        )}
      </Modal>
      </div>
    </div>
    </>
  );
};

export default EventsPage;
