import React, { useEffect, useState } from "react";
import Contador from "./components/contador";

export default function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscaDados() {
      try {
        const resultado = await fetch('https://jsonplaceholder.typicode.com/todos');
        const resultadoFinal = await resultado.json();
        setTarefas(resultadoFinal);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    buscaDados();
  }, []);

  return (
   
    <div>
      <h1>Estilização com classes e CSS Modules</h1>
      <Contador />
    </div>    
           
  );
}
