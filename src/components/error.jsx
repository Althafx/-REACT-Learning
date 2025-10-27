import React from "react";
import { useRouteError, Link } from "react-router-dom";

function Error() {
  const err = useRouteError();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d0d0d",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "5rem", color: "#ff4d4d" }}>
        {err?.status || "404"}
      </h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        {err?.statusText || "Oops! Page Not Found"}
      </h2>
      <p style={{ color: "#aaa", maxWidth: "400px", marginBottom: "2rem" }}>
        Seems like this page went off tune 🎶  
        The link you’re trying to hit doesn’t play anymore.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "#ff4d4d",
          color: "#fff",
          padding: "0.8rem 1.5rem",
          borderRadius: "8px",
          textDecoration: "none",
          transition: "0.2s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6666")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4d4d")}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Error;
