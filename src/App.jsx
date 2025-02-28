import React, { useState } from "react";
import Inputs from "./components/Inputs";
import Result from "./components/Result";

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const handleInvestmentData = (e) => {
    setInvestmentData((previousState) => ({
      ...previousState,
      [e.target.name]: Number(e.target.value),
    }));
  }
  return (
    <>
      <Inputs investmentData={investmentData} handleInvestmentData={handleInvestmentData} />
      <Result investmentData={investmentData} />
    </>
  );
}

export default App;
