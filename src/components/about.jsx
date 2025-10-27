import React from "react";

function About() {
  return (
    <div className="about-container" style={{ padding: "2rem", textAlign: "center", color: "#fff" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Tune Quest</h1>
      <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6", fontSize: "1.1rem", color: "#ddd" }}>
        Tune Quest is your personal gateway to the world of music.  
        Discover trending tracks, explore new genres, and find your next favorite artist — all in one place.  
        We believe music isn’t just something you listen to, it’s something you *feel*.
      </p>
      <p style={{ marginTop: "1.5rem", color: "#aaa", fontSize: "0.95rem" }}>
        Dive in, explore, and let the rhythm guide you 🎶
      </p>
    </div>
  );
}

export default About;
