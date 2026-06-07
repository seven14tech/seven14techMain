import PageHeader from "@/components/PageHeader";
import ContentStrips from "@/components/ContentStrips";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to ship a great product."
        subtitle="From engineering to identity to growth. Hire us as your full product team or for the one piece you don't have in-house."
      />
      <ContentStrips />
      <Process />
      <TechStack />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
