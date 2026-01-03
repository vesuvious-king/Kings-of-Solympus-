export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "radial-gradient(ellipse at top, #0a0a0a, #000)",
          color: "#d8c48f",
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
          <a href="/" style={{ color: "#d6c08d", textDecoration: "none" }}>
            Home
          </a>
          <a href="/preview" style={{ color: "#d6c08d", textDecoration: "none" }}>
            Preview
          </a>
        </nav>

        <div style={{ paddingTop: "80px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
