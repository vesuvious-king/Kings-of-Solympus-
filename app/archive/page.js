import { getArtFiles } from "@/lib/getArt";

export default function Archive() {
  const images = getArtFiles();

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
          <a key={img} href={`/ART/${img}`} target="_blank">
            <img
              src={`/ART/${img}`}
              style={{
                width: "100%",
                borderRadius: "6px",
              }}
            />
          </a>
        ))}
      </div>
    </main>
  );
}
