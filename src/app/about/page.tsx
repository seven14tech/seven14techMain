import PageHeader from "@/components/PageHeader";
import IntroCard from "@/components/IntroCard";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main style={{ minHeight: "100vh" }}>
        <PageHeader 
        title="About Us" 
        subtitle="We are a creative agency dedicated to building digital experiences that matter."
      />
      <IntroCard />
      <Testimonials />
      <Footer />
    </main>
  );
}
