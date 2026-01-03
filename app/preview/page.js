"use client";

import { useEffect, useState } from "react";

const ART_FILES = [
  "/ART/1005275.png",
  "/ART/1037807.png",
  "/ART/1042053.png",
  "/ART/1214638.png",
  "/ART/1225804.jpg",
  "/ART/123611.png",
  "/ART/132239.png",
  "/ART/134058.png",
  "/ART/140716.png",
  "/ART/146958.png",
  "/ART/1531844.png",
  "/ART/1644525.png",
  "/ART/1713917.png"
  // 👉 KEEP ADDING FILES HERE AS YOU UPLOAD MORE
];

export default function PreviewPage() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const shuffled = [...ART_FILES].sort(() => Math.random() - 0.5);

    let i = 0;

    const interval = setInterval(() => {
      setShow(false);

      setTimeout(() => {
        i = (i + 1) % shuffled.length;
        setIndex(i);
        setShow(true);
      }, 300); // black frame duration
    }, 1300); // 1 sec art + black

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      {show && (
        <img
          src={ART_FILES[index]}
          alt="NFT Preview"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transition: "opacity 0.2s ease-in-out"
          }}
        />
      )}
    </div>
  );
}
