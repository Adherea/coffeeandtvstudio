import About from "./components/About";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portofolio from "./components/Portofolio";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="w-full h-full bg-cover bg-center">
        <About />
        <Clients />
        <Portofolio />
        <Profile />
        <Footer />
      </section>
    </>
  );
}
