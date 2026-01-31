import PageWrapper from "@/_components/general/PageWrapper";
import HeroSection from "./_subComponents/HeroSection/HeroSection";
import MetricsSection from "./_subComponents/Metrics/MetricsSection";

function LandingPage() {
  return (
    <PageWrapper heading="Landing">
      <HeroSection />
      <MetricsSection />
    </PageWrapper>
  );
}

export default LandingPage;
