"use client";

import { useEffect, useState } from "react";

const images = [
  "22014754.png",
  "1005275.png",
  "1037807.png",
  "1042053.png",
  "1214638.png",
  "1225804.jpg",
  // ALL filenames here
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Preview() {
  const [deck, setDeck] = useState([]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setDeck(shuffle(images));
  }, []);

  useEffect(() => {
    if (!deck.length) return;

    const cycle = setInterval(() => {
      setVisible(false); // black void

      setTimeout(() => {
        setIndex((i) => {
          if (i + 1 >= deck.length) {
            setDeck(shuffle(images));
            return 0;
          }
          return i + 1;
        });
        setVisible(true);
      }, 600); // black pause
    }, 1800); // total rhythm

    return () => clearInterval(cycle);
  }, [deck]);

  return (
    <main
      style={{
        background: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {visible && deck[index] && (
        <img
          src={`/ART/${deck[index]}`}
          alt=""
          style={{
            maxHeight: "88vh",
            maxWidth: "88vw",
            opacity: visible ? 1 : 0,
            transform: "scale(1.03)",
            transition: "opacity 0.8s ease, transform 6s ease",
          }}
        />
      )}
    </main>
  );
}
