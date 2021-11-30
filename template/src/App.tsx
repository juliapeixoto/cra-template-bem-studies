import "./App.css";
import Abstract from "./components/Abstract";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="restes">
        <Card />
      </div>
      <Abstract />
    </div>
  );
}

export default App;
