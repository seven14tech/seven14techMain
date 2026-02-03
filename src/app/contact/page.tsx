import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <PageHeader 
        title="Get in Touch" 
        subtitle="Ready to start your next project? We'd love to hear from you."
      />
      <div style={{ paddingTop: '50px' }}>
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
