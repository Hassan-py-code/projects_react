


import {GameHeader} from "./components/GameHeader"



import { Card } from "./components/Card";
import { useEffect, useState } from "react";
const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];


function App(){
     
     const [cards, setCards]=useState([]);
     const initilaizeGame=()=>{
         // shaffle the cards
        console.log(cardValues);
        const finalCards = cardValues.map((value , index)=>({
                
                    id:index,
                    value,
                    isFlipped: false,
                    isMatched:false,

                
        }));

        setCards(finalCards);
     };

     useEffect(()=>{
          initilaizeGame();
     }, []);
      
     const handleCardClick= (card) => {
         //don't allow clicking if card is alerady fllioing
        if(card.isFlipped || card.isMatched){
                return;
          }
        
        //updade card flipped state

        const newCards=cards.map((c)=>{
            
            if(c.id === card.id ){
                
                return{...c , isFlipped:true};
            }else{
                 return c;
            }
        });

        setCards(newCards);
        
     }


     return(
         
         <div className="app">
            <GameHeader score={3} moves={3}/>
            <div className="cards-grid">
                {cardValues.map((card) =>(
                    <Card card={card} onClick={handleCardClick} />
                ))}
            </div>
        </div>
     );
}

export default App;