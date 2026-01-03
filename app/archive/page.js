"use client";

import { useState } from "react";

const images = [
  // add ALL filenames from /public/ART here
  "22014754.png",
  "1005275.png",
  "1037807.png",
  "1042053.png",
  "1214638.png",
  "1225804.jpg",
];

export default function Archive() {
  const [open, setOpen] = useState(null);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        padding: "24px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "12px",
        }}
      >
        {images.map((img) => (
          <img
            key={img}
            src={`/ART/${img}`}
            onClick={() => setOpen(img)}
            style={{
              width: "100%",
              height: "auto",
              cursor: "pointer",
              borderRadius: "6px",
              transition: "transform 0.2s ease",
            }}
          />
        ))}
      </div>

      {open && (
        <div
          onClick={() => setOpen(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <img
            src={`/ART/${open}`}
            style={{
              maxWidth: "92vw",
              maxHeight: "92vh",
            }}
          />
        </div>
      )}
    </main>
  );
}
