import { createContext, useState } from "react";
import horoscopes from "../data/horoscopes.js";

const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Aquarius");
  const sign = horoscopes[currentSign];

  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export const HoroscopeContext = createContext();

export default HoroscopeProvider;
