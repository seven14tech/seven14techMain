import PageHeader from "@/components/PageHeader";
import IntroCard from "@/components/IntroCard";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <PageHeader
        eyebrow="About"
        title="A studio of senior product builders."
        subtitle="We're a small team of engineers and designers shipping ambitious web and desktop products since 2024. Independent, opinionated, obsessed with craft."
      />
      <IntroCard />
      <Process />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
