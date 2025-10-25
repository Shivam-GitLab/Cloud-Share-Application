import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import CTASection from "../components/landing/CTASection";
import FooterSection from "../components/landing/FooterSection";
import { features as featuresData, pricingPlans as pricingPlansData, testimonials as testimonialsData } from "../assets/data";
import { useClerk, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
const Landing = () => {
  const { openSignIn, openSignUp } = useClerk ? useClerk() : { openSignIn: () => { }, openSignUp: () => { } };
  const { isSignedIn } = useUser ? useUser() : { isSignedIn: false };
  const navigate = useNavigate ? useNavigate() : () => { };


  // Fallbacks to prevent runtime errors
  const features = Array.isArray(featuresData) ? featuresData : [];
  const pricingPlans = Array.isArray(pricingPlansData) ? pricingPlansData : [];
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData : [];
  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);
  return (
    <div className="landing-page bg-gradient-to-b from-gray-50">
      {/* Hero Section */}
      <HeroSection openSignIn={openSignIn} openSignUp={openSignUp} />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />

      {/* Pricing Section */}
      <PricingSection pricingPlans={pricingPlansData} openSignUp={openSignUp} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonialsData} />

      {/* CTA Section */}
      <CTASection openSignUp={openSignUp}/>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default Landing;