import styles from "./page.module.css";
import HeaderPortfolio from "@/components/HeaderPortfolio";
import IntroCard from "@/components/IntroCard";
import ContentStrips from "@/components/ContentStrips";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className={styles.main}>
      <LoadingScreen />
      <HeaderPortfolio />
      <IntroCard />
      <ContentStrips />
      <Process />
      <TechStack />
      <Testimonials />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
