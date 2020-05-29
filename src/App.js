import React from "react";
import Equipment from "./components/Equipment";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Workouts from "./components/Workouts";

function App() {
  return (
    <main className="app">
      <Header />
      <Hero />
      <Slider />
      <Workouts />
      <Equipment />
      <Footer />
    </main>
  );
}

export default App;
