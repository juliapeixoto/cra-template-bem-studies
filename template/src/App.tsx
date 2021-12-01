import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__background" />
      <div className="app__card">
        <Card />
      </div>
    </div>
  );
}

export default App;
