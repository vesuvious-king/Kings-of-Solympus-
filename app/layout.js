export const metadata = {
  title: "Kings of Olympus",
  description: "A medieval horror mythos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: "black", color: "#d4b46a" }}>

        {/* LEFT NAVIGATION */}
        <nav
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            fontFamily: "inherit",
            zIndex: 1000,
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.8em" }}>
            <li><a href="/" style={{ color: "#d4b46a", textDecoration: "none" }}>Home</a></li>
            <li><a href="/book" style={{ color: "#d4b46a", textDecoration: "none" }}>The Book</a></li>
            <li><a href="/nft" style={{ color: "#d4b46a", textDecoration: "none" }}>The NFT</a></li>
            <li><a href="/art-archive" style={{ color: "#d4b46a", textDecoration: "none" }}>Art Archive</a></li>
            <li><a href="/community" style={{ color: "#d4b46a", textDecoration: "none" }}>Join Our Community</a></li>
            <li><a href="/promotion" style={{ color: "#d4b46a", textDecoration: "none" }}>Art Promotion Area</a></li>
            <li><a href="/merch" style={{ color: "#d4b46a", textDecoration: "none" }}>Merchandise</a></li>
            <li><a href="/magic-eden" style={{ color: "#d4b46a", textDecoration: "none" }}>Magic Eden</a></li>
            <li><a href="/roadmap" style={{ color: "#d4b46a", textDecoration: "none" }}>Roadmap</a></li>
            <li><a href="/donations" style={{ color: "#d4b46a", textDecoration: "none" }}>Donations</a></li>
            <li><a href="/about" style={{ color: "#d4b46a", textDecoration: "none" }}>About / Contact</a></li>
          </ul>
        </nav>

        {/* PAGE CONTENT */}
        <main style={{ paddingTop: "80px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}
