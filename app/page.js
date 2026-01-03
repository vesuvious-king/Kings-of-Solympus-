export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        color: "#d6c08d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
        textAlign: "center",
        fontFamily: "serif",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          letterSpacing: "0.08em",
          marginBottom: "16px",
        }}
      >
        KINGS OF SOLYMPUS
      </h1>

      <p
        style={{
          maxWidth: "520px",
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#9f9a7a",
          marginBottom: "40px",
        }}
      >
        A 1/1 generational archive of goblins and skellies.
        Born unfinished. Reforged by hand.  
        Gold is fashion. Crowns are boredom.
      </p>

      <div style={{ display: "flex", gap: "24px" }}>
        <a
          href="/preview"
          style={{
            color: "#d6c08d",
            textDecoration: "none",
            borderBottom: "1px solid #d6c08d",
            paddingBottom: "4px",
            letterSpacing: "0.08em",
          }}
        >
          ENTER THE VAULT
        </a>

        <a
          href="/archive"
          style={{
            color: "#9f9a7a",
            textDecoration: "none",
            borderBottom: "1px solid #9f9a7a",
            paddingBottom: "4px",
            letterSpacing: "0.08em",
          }}
        >
          VIEW ARCHIVE
        </a>
      </div>
    </main>
  );
}
