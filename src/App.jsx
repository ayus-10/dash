import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("home");
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="grid h-screen w-screen grid-cols-6 overflow-hidden">
      <Sidebar
        onButtonClick={handleButtonClick}
        activeComponent={activeComponent}
      />
      <div className="col-span-5 flex h-full flex-col justify-between overflow-y-auto bg-slate-100">
        <main className="grow">
          {activeComponent === "home" && <Home />}
          {activeComponent === "about" && <About />}
          {activeComponent === "services" && <Services />}
          {activeComponent === "pricing" && <Pricing />}
          {activeComponent === "contact" && <Contact />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
