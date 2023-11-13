import { useState } from "react";

export default function MeuContador() {    
    const [contador, setContador] = useState(0);
    function Incrementar() {             
       setContador(contador + 1);
    }
    return (
    <div>
        <h1>Meu Contador </h1>
        <h2>{contador}</h2>
        <button onClick={Incrementar}> Incrementar</button>
    </div>
 );
}
