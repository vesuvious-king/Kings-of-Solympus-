export const metadata = {
  title: "Kings of Solympus",
  description: "A mythic archive of broken kingdoms and buried legends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "black",
          color: "#e6c98a",
          fontFamily: "inherit",
        }}
      >
        {/* LEFT MENU */}
        <nav
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          <a href="/" style={{ color: "#e6c98a", textDecoration: "none" }}>
            Home
          </a>
          <a href="/book" style={{ color: "#e6c98a", textDecoration: "none" }}>
            The Book
          </a>
          <a href="/nft" style={{ color: "#e6c98a", textDecoration: "none" }}>
            The NFT
          </a>
          <a href="/archive" style={{ color: "#e6c98a", textDecoration: "none" }}>
            Art Archive
          </a>
          <a href="/preview" style={{ color: "#e6c98a", textDecoration: "none" }}>
            Join Our Community
          </a>
          <a href="/preview" style={{ color: "#e6c98a", textDecoration: "none" }}>
            Art Promotion Area
          </a>
          <a href="/preview" style={{ color: "#e6c98a", textDecoration: "none" }}>
            Merchandise
          </a>
          <a
            href="https://magiceden.io"
            target="_blank"
            style={{ color: "#e6c98a", textDecoration: "none" }}
          >
            Magic Eden
          </a>
          <a href="/preview" style={{ color: "#e6c98a", textDecoration: "none" }}>
            Roadmap
          </a>
          <a href="/preview" style={{ color: "#e6c98a", textDecoration: "none" }}>
            Donations
          </a>
          <a href="/preview" style={{ color: "#e6c98a", textDecoration: "none" }}>
            About / Contact
          </a>
        </nav>

        {/* PAGE CONTENT */}
        <main
          style={{
            paddingLeft: "160px",
            paddingTop: "40px",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
