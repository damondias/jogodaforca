import React from "react";

function Letras({letter, startdisabled, setstartdisabled, prevletters, setPrevletters}){
    
    return (
        <button
            className="marcada" 
            disabled={prevletters.includes(letter) ? true : startdisabled}
            data-test="letter">
                {letter} 
        </button>
    );
}

export default Letras;