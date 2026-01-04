export const dynamic = "force-static";

export default function ArchivePage() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {ART_FILES.map((file, index) => (
          <img
            key={index}
            src={`/ART/${file}`}
            alt="Kings of Solympus Archive"
            style={styles.image}
            loading="lazy"
          />
        ))}
      </div>
    </main>
  );
}

const ART_FILES = [
  "9371785.png",
  "2179515.png",
  "2492515.png",
  "17824347.png",
  "52620708.png",
  "1070771.png",
  "3364424.png",
  "1144630.png",
  "1813092.png",
  "2579332.png",
  "1804698.png",
  "7449594.jpg",
  "3401614.png"
];

const styles = {
  main: {
    minHeight: "100vh",
    backgroundColor: "black",
    padding: "40px 20px",
  },
  container: {
    columnCount: 3,
    columnGap: "20px",
  },
  image: {
    width: "100%",
    marginBottom: "20px",
    breakInside: "avoid",
    borderRadius: "6px",
    display: "block",
  },
};
