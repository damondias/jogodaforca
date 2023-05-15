import React from "react";
import palavras from "../palavras";


let palavrajogo = "";
let palavrajogo2 = "";

function Jogo( {errors, seterrors, wordcolor, setwordcolor, chosenword ,setchosenword, setstartdisabled, setprevletters, setmarkletter}){
    //console.log(props);

    const imgsforca = [ "assets/forca0.png", 
                        "assets/forca1.png", 
                        "assets/forca2.png", 
                        "assets/forca3.png", 
                        "assets/forca4.png", 
                        "assets/forca5.png", 
                        "assets/forca6.png"];

    function startGame() {
        
        if(wordcolor ==="palavraescolhida verde" || wordcolor ==="palavraescolhida verde"){ 
        
        }
        setchosenword("");
        seterrors(0);
        setstartdisabled(false);
        setprevletters([""]);
    
        reloadGame();

    }

    function reloadGame(){
        
        setwordcolor("palavraescolhida");
        let value = Math.random() * 188;
        palavrajogo = palavras[Math.round(value)];
        palavrajogo2 = palavrajogo;
        palavrajogo = palavrajogo.split('');
        setchosenword(palavrajogo.map(()  => "_"));
        setmarkletter("letras");   
    }



    return (
        <div className="areaforca">
            <div>
                <img src={imgsforca[errors]}
                     alt= {errors}
                     className="forca" 
                     data-test="game-image"/>
            </div>
            <div className="botaoepalavra">
                <div className="escolherpalavra" 
                     data-test="choose-word"
                     onClick={startGame} >
                        Escolher Palavra
                </div>
                <div className= {wordcolor}
                     data-answer={palavrajogo2}
                     data-test="word" >
                        {chosenword}
                </div>
            </div>
        </div>
      );
}

export {
        Jogo, 
        palavrajogo, 
        palavrajogo2,
       };