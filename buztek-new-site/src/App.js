import "./sass/main.scss";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Services />
      <Process />
    </div>
  );
}

export default App;
