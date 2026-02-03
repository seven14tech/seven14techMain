import styles from "./page.module.css";
import HeaderPortfolio from "@/components/HeaderPortfolio";
import IntroCard from "@/components/IntroCard";
import ContentStrips from "@/components/ContentStrips";
import Testimonials from "@/components/Testimonials";
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
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
