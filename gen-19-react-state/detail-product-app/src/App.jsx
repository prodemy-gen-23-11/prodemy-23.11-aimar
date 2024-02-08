import React from "react";
import Header from "./layout/Header";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="bg-gray-600">
      <div className="bg-white m-1 mt-0 p-3 rounded-lg shadow-lg">
        <Header />
      </div>
      <div
        className="bg-white mt-5 ml-1 mr-1 p-5 rounded-lg shadow-lg
      "
      >
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
