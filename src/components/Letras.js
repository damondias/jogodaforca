import React from "react";
import {palavrajogo} from "./Jogo.js"

function Letras({letter, startdisabled, setstartdisabled, prevletters, setprevletters, markletter, setmarkletter, wordcolor, setwordcolor, errors, seterrors, chosenword, setchosenword }){

   // console.log(props); 
    const desmarcada = "letras";
    const marcada = "letras marcadas";    
    let arr = [];

    function CheckWin() {
        if(String(arr) === String(palavrajogo)){
            setmarkletter(marcada);
            setwordcolor("palavraescolhida verde");
            setstartdisabled(true);
            
        }
    }
    
    function MarcarLetras(letraescolhida) {        
    
        setprevletters([...prevletters ,letter]);

        if (markletter === desmarcada){
            
        if(palavrajogo.includes(letraescolhida)){
            
            for(let i = 0; i < palavrajogo.length; i++){
                if(palavrajogo[i] === letraescolhida){
                    arr = [...arr, letraescolhida];
                                 
        
                } else {
                        arr= [...arr, chosenword[i]];
                       }
            }        
            setchosenword(arr);
        } else {
                seterrors(errors + 1);
                if(errors > 4){
                    setmarkletter(marcada);
                    setchosenword(palavrajogo);
                    setwordcolor("palavraescolhida vermelho");
                    setstartdisabled(true);
                }   
            }
        CheckWin();
    }
    
    }                
   
    return (
        <button
            className={prevletters.includes(letter) ? marcada : markletter}
            disabled={prevletters.includes(letter) ? true : startdisabled}
            onClick={() => MarcarLetras(letter.toLowerCase())}
            data-test="letter">
                {letter} 
        </button>
    );
}

export default Letras;