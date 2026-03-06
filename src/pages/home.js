import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider.js";
import HistorySection from "../components/HistorySection.js";
import DishesShowcase from "../components/DishesShowcase.js";
import RobotSection from "../components/RobotSection.js";
import ReservationSection from "../components/ReservationSection.js";
import Footer from "../components/Footer.js"; 
import Depoimentos from "../components/depoiments.js"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Espaço para compensar navbar fixa */}
      <main style={{ paddingTop: "80px" }}>
        <HeroSlider />
       
    <HistorySection />
     <DishesShowcase />
          <RobotSection />
       <ReservationSection />
       <Depoimentos/>
          <Footer /> 
      </main> 
    </>
  );
}