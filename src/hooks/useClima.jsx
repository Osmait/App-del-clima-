import { useContext } from "react";
import ClimaContext from "../context/ClimaProvider";

const useclima = () => {
  return useContext(ClimaContext);
};

export default useclima;
