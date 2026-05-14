import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AboutUs from "@/components/Homepage_Components/AboutUs";
import ChargingServices from "@/components/Homepage_Components/ChargingServices";
import Hero from "@/components/Homepage_Components/Hero";
import InsuranceOpportunities from "@/components/Homepage_Components/InsuranceOpportunities";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ChargingServices/>
      <InsuranceOpportunities/>
      <AboutUs/>
      <Footer/>
    </main>
  );
}