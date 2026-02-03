import PageHeader from "@/components/PageHeader";
import ContentStrips from "@/components/ContentStrips";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* Optional: Add LoadingScreen here too if desired, or keep it exclusive to Home */}
      <PageHeader 
        title="Our Services" 
        subtitle="We offer a comprehensive suite of digital solutions to help your business grow and thrive in the modern age."
      />
      <ContentStrips /> {/* Reusing the strips as the main service showcase */}
      <Footer />
    </main>
  );
}
