import AboutUs from "./components/AboutUs";
import { AppBar } from "./components/AppBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return <div className="flex flex-col items-center justify-center overflow-hidden">
  <AppBar />
  <Hero />
  <Content />
  <AboutUs />
  <Footer />
  </div>
}
