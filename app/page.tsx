import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#F6F9FC] text-[#2e2e2e]">
        <Navbar/>
        <HomePage/>
        <Certificate/>
        <Projects/>
        
        <Footer/>
    </div>
  );
}
