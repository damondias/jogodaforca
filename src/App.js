import React, {useState} from "react";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function App() {

  const [startdisabled, setStartdisabled] = useState(true);
  const [prevletters, setPrevletters] = useState(['']);

  return (
    <>
       <Jogo />
       <div className="caixadasletras">
                {alfabeto.map((letra) => <Letras key={letra} 
                                                 letter = {letra.toUpperCase()}
                                                 startdisabled={startdisabled} 
                                                 setstartdisabled={setStartdisabled} 
                                                 prevletters={prevletters} 
                                                 setPrevletters={setPrevletters} 

                                          />)}
            </div>
    </>
  );
}

export default App;
