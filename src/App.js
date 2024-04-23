import "./css/index.css";
import Hero from "./Pages/Hero";
import Nav from "./components/Nav";
import About from "./Pages/About";
import Random from "./Pages/Random";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Random />
    </div>
  );
}

export default App;
