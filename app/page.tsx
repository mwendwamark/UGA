import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { HomeHero } from "./_home/HomeHero/HomeHero";
import HomeIntro from "./_home/HomeIntro/HomeIntro";


export default function Page() {
  return (
    <main>
      <Navbar variant="primary" />
      <HomeHero />
      <HomeIntro />
      <Footer />
    </main>
  );
}
