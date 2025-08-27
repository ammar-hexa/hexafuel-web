import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import { ThemeContext, Theme } from "./contexts/ThemeContext.tsx";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || Theme.LIGHT);

  useEffect(() => {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
