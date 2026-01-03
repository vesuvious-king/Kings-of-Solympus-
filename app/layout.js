export const metadata = {
  title: "Kings of Solympus",
  description: "A mythic NFT universe on Solana"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
