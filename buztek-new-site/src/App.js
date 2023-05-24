import "./sass/main.scss";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Services />
      <Process />
      <Contact />
    </div>
  );
}

export default App;
