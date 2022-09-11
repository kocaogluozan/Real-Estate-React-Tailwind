import React, { useState, useEffect, createContext } from "react";

//import HousesData
import { housesData } from "../data";

//create Context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  const HouseContextProviderValues = {
    houses,
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    loading,
  };

  return (
    <HouseContext.Provider value={HouseContextProviderValues}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
