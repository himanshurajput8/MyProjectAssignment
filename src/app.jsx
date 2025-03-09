import "./app.css";
import { HeaderComponent } from "./Header/Header";
import { LandingPageComponent } from "./LandingPage/LandingPage";
import { ElevateManagementComponent } from "./VedioManagement/VedioElevate";
import { ElevateEngageComp } from "./VedioEngagement/VedioEngage";
import { Testimonials } from "./Testimonials/Testimonials";
import { OttMediaComponent } from "./OttMedia/OttMedia";
import { VedioBannerComp } from "./VedioBanner/VedioBanner";
import { Carousel } from "./Carousel/Carousel";
import { MediaFeatureComp } from "./MediaFeatures/Media";
import { FaqQuestionComp } from "./FaqQuestion/Faq";
import { ContactForm } from "./Contact_Form/ContactForm";
import { FooterComponent } from "./Footer/Footer";

export function App() {
  return (
    <>
      <HeaderComponent />
      <LandingPageComponent />
      <ElevateManagementComponent />
      <ElevateEngageComp />
      <Testimonials />
      <OttMediaComponent />
      <VedioBannerComp />
      <Carousel />
      <MediaFeatureComp />
      <FaqQuestionComp />
      <ContactForm />
      <FooterComponent />
    </>
  );
}
