import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname.replace("/", "");
    if (currentPath !== activeComponent) {
      setActiveComponent(currentPath);
    }
  }, []);

  return (
    <div className="grid h-screen w-screen grid-cols-6 overflow-hidden">
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <div className="col-span-5 flex h-full flex-col justify-between overflow-y-auto bg-slate-100">
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
