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
    //set loading
    setLoading(true);
    //function that checks string include (any) or not.
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    //get min price of price range
    const minPrice = parseInt(price.split(" ")[0]);
    //get max price of price range
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all values selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      //if all values default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      //if country selected only
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      //if property type selected only
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
      //if price selected only
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (house.price >= minPrice && house.price <= maxPrice) {
          return house;
        }
      }
      //if price is NOT selected only
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      //if type is NOT selected only
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (house.price >= minPrice && house.price <= maxPrice) {
          return house.country === country;
        }
      }
      //if country is NOT selected only
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (house.price >= minPrice && house.price <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setTimeout(() => {
      setLoading(false);
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
    }, 1000);
    console.log(newHouses);
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
