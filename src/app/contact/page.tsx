import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you're building."
        subtitle="Drop us a line. We'll respond within one business day with next steps — typically a 30-minute scoping call."
      />
      <ContactSection />
      <Footer />
    </main>
  );
}
