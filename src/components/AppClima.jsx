import React from "react";
import { Formulario } from "./Formulario";
import { Resultado } from "./Resultado";
import useclima from "../hooks/useClima";
import { Spinner } from "./spinner";

export const AppClima = () => {
  const { resultado, cargando, noResultado } = useclima();

  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {cargando ? (
          <Spinner />
        ) : resultado?.name ? (
          <Resultado />
        ) : noResultado ? (
          <p>{noResultado}</p>
        ) : (
          <p>El Clima se va a mostrar aqui </p>
        )}
      </main>
    </>
  );
};
