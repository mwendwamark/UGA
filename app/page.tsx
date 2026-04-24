import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { HomeHero } from "./_home/HomeHero/HomeHero";
import HomeIntro from "./_home/HomeIntro/HomeIntro";
import WhyUGA from "./_home/WhyUGA/WhyUGA";
import HomeAbout from "./_home/HomeAbout/HomeAbout";
import HomePrincipal from "./_home/HomePrincipal/HomePrincipal";

export default function Page() {
  return (
    <main>
      <Navbar variant="primary" />
      <HomeHero />
      <HomeIntro />
      <WhyUGA />
      <HomeAbout />
      <HomePrincipal />
      <Footer />
    </main>
  );
}
