// import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import Clients from "./components/Clients";
import Hire from "./components/Hire";

function App() {
  return (
    <div className="bg-body text-white font-poppins pb-14">
      <div className="h-screen">
        <Navbar />
        <Header />
      </div>
      <Work />
      <Clients />
      <Hire />
    </div>
  );
}

export default App;
