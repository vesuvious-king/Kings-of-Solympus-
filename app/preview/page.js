"use client";

import { useEffect, useState } from "react";

const images = [
  "22014754.png",
  "1005275.png",
  "1037807.png",
  "1042053.png",
  "1214638.png",
  "1225804.jpg",
  // add ALL filenames here
];

export default function Preview() {
  const [current, setCurrent] = useState(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false); // black screen

      setTimeout(() => {
        const random =
          images[Math.floor(Math.random() * images.length)];
        setCurrent(random);
        setShow(true);
      }, 500); // black duration
    }, 1500); // total cycle time

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        background: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {show && current && (
        <img
          src={`/ART/${current}`}
          alt="NFT"
          style={{ maxHeight: "90vh", maxWidth: "90vw" }}
        />
      )}
    </main>
  );
}
