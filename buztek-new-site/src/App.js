import "./sass/main.scss";
import Wireframe from "./images/wireframe-grid.svg";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
    </div>
  );
}

export default App;
