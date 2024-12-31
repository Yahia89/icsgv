import React, { useEffect, useState } from "react";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      color: "#e63946",
      title: "Welcome",
      content: "Scroll down to explore more",
    },
    {
      color: "#457b9d",
      title: "About Us",
      content: "Learn about our journey",
    },
    {
      color: "#1d3557",
      title: "Services",
      content: "Discover what we offer",
    },
    {
      color: "#2a9d8f",
      title: "Contact",
      content: "Get in touch with us",
    },
  ];

  return (
    <div
      style={{
        height: `${sections.length * 100}vh`,
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {sections.map((section, index) => {
        const progress =
          (scrollPosition - index * window.innerHeight) / window.innerHeight;
        const translateY = Math.max(0, Math.min(100, progress * 100));

        return (
          <div
            key={index}
            style={{
              position: "fixed",
              top: `${index * 25}vh`, // Each section starts 25vh lower than the previous
              height: "100vh",
              backgroundColor: section.color,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              zIndex: sections.length - index,
              transform: `translateY(-${translateY}vh)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <h1
              style={{
                fontSize: "3.5rem",
                marginBottom: "1rem",
                fontWeight: "bold",
                transform: `translateY(${
                  (scrollPosition - index * window.innerHeight) * 0.1
                }px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {section.title}
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                maxWidth: "600px",
                textAlign: "center",
                lineHeight: "1.6",
                opacity: 0.9,
              }}
            >
              {section.content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
