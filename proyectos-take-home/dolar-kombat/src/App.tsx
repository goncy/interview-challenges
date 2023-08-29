const PRICE = 750;

function App() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <img alt="1 dollar" src="/dollar.png" />
        <p style={{backgroundColor: "black", color: "white"}}>
          {PRICE.toLocaleString("es-AR", {style: "currency", currency: "ARS"})}
        </p>
      </div>
      <img alt="Tower" src="/tower.png" />
    </main>
  );
}

export default App;
