export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "#f5d77a",
        fontFamily: "'Comic Neue', cursive",
        textAlign: "center",
        paddingTop: "30vh",
        textShadow: "3px 3px 0px #000"
      }}
    >
      <h1 style={{ fontSize: "72px", marginBottom: "24px" }}>
        KINGS OF SOLYMPUS
      </h1>

      <p style={{ fontSize: "24px", maxWidth: "720px", margin: "0 auto" }}>
        A mythic archive of goblins and skellies.
        <br />
        Born unfinished. Reforged by hand.
        <br />
        Gold is fashion. Crowns are boredom.
      </p>
    </main>
  );
}
