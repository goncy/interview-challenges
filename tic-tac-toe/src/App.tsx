const GRID = Array.from(Array(9).keys());

function App() {
  return (
    <main>
      {GRID.map((i) => (
        <div key={i} className="square">
          {""}
        </div>
      ))}
    </main>
  );
}

export default App;
