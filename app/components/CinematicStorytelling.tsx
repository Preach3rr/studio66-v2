"use client";

export default function CinematicStorytelling() {
  return (
    <main
      style={{
        background: "#070707",
        color: "#fff",
        minHeight: "100vh",
        padding: "120px 7%",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <p
          style={{
            color: "#C9A55A",
            letterSpacing: ".45em",
            marginBottom: "18px",
            fontWeight: 600,
          }}
        >
          CINEMATIC STORYTELLING
        </p>

        <h1
          style={{
            fontSize: "52px",
            fontWeight: 800,
            marginBottom: "22px",
          }}
        >
          Every Frame Has A Story
        </h1>

        <p
          style={{
            color: "#BDBDBD",
            fontSize: "18px",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          We create timeless films and photographs that preserve emotions, details
          and unforgettable memories.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "28px",
        }}
      >
        <video
          controls
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/videos/1.mp4"
          style={{
            width: "100%",
            maxWidth: "1200px",
            minHeight: "360px",
            backgroundColor: "#000",
            borderRadius: "20px",
            display: "block",
          }}
        >
          <source src="/videos/1.mp4" type="video/mp4" />
          Browserul tău nu suportă elementul video.
        </video>
      </div>
    </main>
  );
}