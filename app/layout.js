export const metadata = {
  title: "Kings of Solympus",
  description: "A medieval dark fantasy universe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "black",
          color: "#c9b37e",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            marginLeft: "240px",
            padding: "40px",
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
