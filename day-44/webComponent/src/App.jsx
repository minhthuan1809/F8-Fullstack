import MyProjects from "./components/body/MyProjects";
import MyResume from "./components/body/MyResume";
import Skills from "./components/body/Skills";
import ClientLogos from "./components/Header/ClientLogos";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";

import "./index.css";
import "animate.css";
function App() {
  return (
    <>
      <Nav /> {/*menu*/}
      <Header />
      <ClientLogos />
      <Skills />
      <MyProjects />
      <MyResume />
    </>
  );
}
export default App;
