import React from "react";

function Jogo(){

    const imgsforca = ["assets/forca0.png", 
                       "assets/forca1.png", 
                       "assets/forca2.png", 
                       "assets/forca3.png", 
                       "assets/forca4.png", 
                       "assets/forca5.png", 
                       "assets/forca6.png"];

    return (
        <div className="areaforca">
            <div>
                <img src= {imgsforca[0]}
                     alt= "imagem"
                     className="forca" 
                     data-test="game-image"/>
            </div>
            <div className="botaoepalavra">
                <div className="escolherpalavra" 
                     data-test="choose-word">
                        Escolher Palavra
                </div>
                <div className="palavraescolhida" 
                    data-test="word">
                        _ _ _ _ _
                </div>
            </div>
        </div>
      );
}

export default Jogo;