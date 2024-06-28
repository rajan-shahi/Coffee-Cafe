import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import AppStore from "../components/AppStore/AppStore";
import Testimonials from "../components/Testimonials/Testimonials";
import Order from "../daspages/Order";

export default function Home() {
  return (
    <div>
      <Hero />
      <Order />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
    </div>
  );
}
