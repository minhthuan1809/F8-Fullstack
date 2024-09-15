import ClientsSay from "./components/body/ClientsSay";
import MyProjects from "./components/body/MyProjects";
import MyResume from "./components/body/MyResume";
import Skills from "./components/body/Skills";
import ClientLogos from "./components/Header/ClientLogos";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Contact from "./components/about/Contact";

import Footer from "./footer/Footer";
import PopularClients from "./logo/PopularClients";

import "./index.css";
function App() {
  return (
    <>
      <Nav /> {/*menu*/}
      <Header />
      <ClientLogos />
      <Skills />
      <MyProjects />
      <MyResume />
      <ClientsSay />
      <PopularClients />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
