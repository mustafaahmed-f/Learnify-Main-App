import PageWrapper from "@/_components/general/PageWrapper";
import HeroSection from "./_subComponents/HeroSection/HeroSection";
import MetricsSection from "./_subComponents/Metrics/MetricsSection";
import AllInOneSection from "./_subComponents/AllInOne/AllInOneSection";
import AboutPlatformSection from "./_subComponents/AboutPlatform/AboutPlatformSection";

function LandingPage() {
  return (
    <PageWrapper heading="Landing">
      <div className="landing-page">
        <HeroSection />
        <MetricsSection />
        <AllInOneSection />
        <AboutPlatformSection />
      </div>
    </PageWrapper>
  );
}

export default LandingPage;
