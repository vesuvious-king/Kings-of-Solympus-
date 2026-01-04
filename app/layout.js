export const metadata = {
  title: "Kings of Solympus",
  description: "Broken kingdoms and buried legends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "black", color: "#e6c36a" }}>
        <nav
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontFamily: "inherit",
            zIndex: 1000,
          }}
        >
          <a href="/" style={linkStyle}>Home</a>
          <a href="/book" style={linkStyle}>The Book</a>
          <a href="/nft" style={linkStyle}>The NFT</a>
          <a href="/archive" style={linkStyle}>Art Archive</a>
          <a href="/community" style={linkStyle}>Join Our Community</a>
          <a href="/promotion" style={linkStyle}>Art Promotion Area</a>
          <a href="/merch" style={linkStyle}>Merchandise</a>
          <a href="/magic-eden" style={linkStyle}>Magic Eden</a>
          <a href="/roadmap" style={linkStyle}>Roadmap</a>
          <a href="/donations" style={linkStyle}>Donations</a>
          <a href="/about" style={linkStyle}>About / Contact</a>
        </nav>

        <main style={{ paddingLeft: "200px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#e6c36a",
  fontSize: "16px",
};
