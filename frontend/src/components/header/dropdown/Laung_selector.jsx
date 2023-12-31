import React, { useState } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // You can add logic here to change the language in your application
  };

  const languageOptions = [
    { code: "en", label: "English", symbol: "$" },
    { code: "hi", label: "Hindi", symbol: "₹" },
    // Add more language options as needed
    // { code: "fr", label: "Fr - €", symbol: "€" },
    // { code: "es", label: "Es - €", symbol: "€" },
    // ...
  ];

  return (
    <div className="language-selector">
      <div className="icon11" style={{ filter: 'invert(0%) sepia(1%) saturate(5%) hue-rotate(328deg) brightness(103%) contrast(100%)' }}>&#127760;</div>

      <select
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {languageOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
        {/* <span className="currency-symbol">
        {
          languageOptions.find((option) => option.code === selectedLanguage)
            ?.symbol
        }
      </span> */}
      </select>
      
    </div>
  );
};

export default LanguageSelector;
