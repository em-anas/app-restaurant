import React from "react";
import { PageLayout } from "../../components";
import { ScrollToTop } from "../../components/common";
import About from "./components/About";
import { Features } from "./components/Features";
import Reservation from "./components/Reservation";
import Team from "./components/Team";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Menu } from "./components/Menu";
import FavoritesOverlay from "./components/Menu/Overlay";

const Home: React.FC = () => {
  return (
    <>
      <PageLayout>
        <Hero />
        <Features />
        <About />
        <Menu />
        <Reservation />
        <Team />
        <Testimonials />
        <ScrollToTop />
      </PageLayout>
      <FavoritesOverlay />
    </>
  );
};

export default Home;
