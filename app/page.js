export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        color: "#f5d77a",
        fontFamily: "'Comic Neue', cursive",
        textAlign: "center",
        padding: "60px",
        textShadow: "2px 2px 6px rgba(0,0,0,0.8)"
      }}
    >
      <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>
        Kings of Solympus
      </h1>

      <p style={{ fontSize: "22px", maxWidth: "800px", margin: "0 auto" }}>
        A mythic realm of power, legacy, and creation.
        <br />
        Ten thousand unique Kings will rise.
      </p>
    </main>
  );
}
