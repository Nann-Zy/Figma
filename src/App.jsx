import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Main />
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
