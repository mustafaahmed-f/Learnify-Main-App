import PageWrapper from "@/_components/general/PageWrapper";
import HeroSection from "./_subComponents/HeroSection/HeroSection";
import MetricsSection from "./_subComponents/Metrics/MetricsSection";
import AllInOneSection from "./_subComponents/AllInOne/AllInOneSection";
import AboutPlatformSection from "./_subComponents/AboutPlatform/AboutPlatformSection";
import FeaturesSection from "./_subComponents/Features/FeaturesSection";
import MainReviewsSection from "./_subComponents/MainReviews/MainReviewsSection";

function LandingPage() {
  return (
    <PageWrapper heading="Landing">
      <div className="landing-page" id="landing-page">
        <HeroSection />
        <MetricsSection />
        <AllInOneSection />
        <AboutPlatformSection />
        <FeaturesSection />
        <MainReviewsSection />
      </div>
    </PageWrapper>
  );
}

export default LandingPage;
