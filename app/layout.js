export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "black",
          color: "#d6c08d",
          fontFamily: "serif",
        }}
      >
        <nav
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(6px)",
            zIndex: 100,
          }}
        >
          <a
            href="/"
            style={{
              color: "#d6c08d",
              textDecoration: "none",
              letterSpacing: "0.12em",
              fontSize: "14px",
            }}
          >
            KINGS OF SOLYMPUS
          </a>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/preview" style={linkStyle}>
              PREVIEW
            </a>
            <a href="/archive" style={linkStyle}>
              ARCHIVE
            </a>
          </div>
        </nav>

        <div style={{ paddingTop: "80px" }}>{children}</div>
      </body>
    </html>
  );
}

const linkStyle = {
  color: "#9f9a7a",
  textDecoration: "none",
  fontSize: "12px",
  letterSpacing: "0.12em",
};
