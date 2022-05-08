import "./App.css";
import Navbar from "./commponents/navbar";
import Hero from "./commponents/hero";
import Footer from "./commponents/Footer";
import LastFooter from "./commponents/LastFooter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <section className=" bg ">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Footer />
        <LastFooter />
      </BrowserRouter>
    </section>
  );
}

export default App;
