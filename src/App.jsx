import "./App.css";
import {Navbar, Main} from "./Components/index";
import {Hero, About, Services, Projects, Contact, Footer} from "./Sections/index";

function App() {

  return (
    <>
      <Navbar />
        <Main>
          <Hero />
          <About/>
          <Services/>
          <Projects/>
          <Contact/>
        </Main>
      <Footer />
    </>
  );
}

export default App;