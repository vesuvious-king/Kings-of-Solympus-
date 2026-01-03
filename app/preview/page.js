"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "22014754.png",
  "1005275.png",
  "1037807.png",
  "1042053.png",
  // keep adding filenames
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Preview() {
  const containerRef = useRef(null);
  const [deck, setDeck] = useState([]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setDeck(shuffle(images));
  }, []);

  useEffect(() => {
    if (!started || !deck.length) return;

    const cycle = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((i) => {
          if (i + 1 >= deck.length) {
            setDeck(shuffle(images));
            return 0;
          }
          return i + 1;
        });
        setVisible(true);
      }, 600);
    }, 1800);

    return () => clearInterval(cycle);
  }, [deck, started]);

  const enterFullscreen = () => {
    if (containerRef.current?.requestFullscreen) {
      containerRef.current.requestFullscreen();
    }
    setStarted(true);
    setVisible(true);
  };

  return (
    <main
      ref={containerRef}
      onClick={enterFullscreen}
      style={{
        background: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {!started && (
        <div style={{ color: "#666", fontSize: "14px" }}>
          TAP TO ENTER
        </div>
      )}

      {started && visible && deck[index] && (
        <img
          src={`/ART/${deck[index]}`}
          alt=""
          style={{
            maxHeight: "92vh",
            maxWidth: "92vw",
            opacity: visible ? 1 : 0,
            transform: "scale(1.03)",
            transition: "opacity 0.8s ease, transform 6s ease",
          }}
        />
      )}
    </main>
  );
}
