export default function Home() {
  function enterRealm() {
    alert("Welcome to the Realm of Solympus ⚡");
  }

  return (
    <main style={{ padding: "40px", fontFamily: "serif" }}>
      <h1>Kings of Solympus</h1>

      <p>
        A strategy universe where gods, kings, and mortals compete for dominion.
      </p>

      <button
        onClick={enterRealm}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Enter the Realm
      </button>
    </main>
  );
}
