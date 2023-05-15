import React, {useState} from "react";
import {Jogo} from "./components/Jogo"
import Letras from "./components/Letras"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function App() {

  const [startdisabled, setStartdisabled] = useState(true);
  const [prevletters, setPrevletters] = useState(['']);
  const [chosenword, setChosenword] = useState("");
  const [markletter, setMarkletter] = useState("letras marcadas");  
  const [errors, setErrors] = useState(0);
  const [wordcolor, setWordcolor] = useState("palavraescolhida");


  return (
    <>
       <Jogo setprevletters={setPrevletters}
             startdisabled={startdisabled} 
             setstartdisabled={setStartdisabled} 
             chosenword={chosenword} 
             setchosenword={setChosenword} 
             markletter={markletter} 
             setmarkletter={setMarkletter} 
             errors={errors} 
             seterrors={setErrors} 
             wordcolor={wordcolor} 
             setwordcolor={setWordcolor} 
        />
       <div className="caixadasletras">
                {alfabeto.map((letra) => <Letras key={letra} 
                                                 letter = {letra.toUpperCase()}
                                                 startdisabled={startdisabled} 
                                                 setstartdisabled={setStartdisabled} 
                                                 prevletters={prevletters} 
                                                 setprevletters={setPrevletters}
                                                 chosenword={chosenword} 
                                                 setchosenword={setChosenword} 
                                                 markletter={markletter} 
                                                 setmarkletter={setMarkletter} 
                                                 errors={errors} 
                                                 seterrors={setErrors} 
                                                 wordcolor={wordcolor} 
                                                 setwordcolor={setWordcolor} 
                                          />)}
            </div>
    </>
  );
}

export default App;
