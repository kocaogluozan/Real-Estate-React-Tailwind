import React, { useState, useEffect, createContext, useContext } from "react";

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

  //return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    //remove dublicate countries
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    //set countries
    setCountries(uniqueCountries);
  }, []);

  //return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    //remove dublicate properties
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    //set properties
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    console.log("Clicked!");
  };
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
    handleClick,
  };

  return (
    <HouseContext.Provider value={HouseContextProviderValues}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
