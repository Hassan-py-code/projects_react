


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
     const [flippedCards,setFlippedCards]=useState([]);


     const  initilaizeGame=()=>{
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
        
        const newFlippedCards= [...flippedCards,card.id];
        setFlippedCards(newFlippedCards);
        
        //check for match if tow cards are flipped
        if(flippedCards.length == 1){
            const firstCard= cards[flippedCards[0]];

            if(firstCard.value === card.value){
                 alert("Match");
            }
            else{

                 setTimeout(()=>{
            
                 // flipped back card 1,card 2
                 const flippedBackCard = newCards.map((c)=>{
                    if( newFlippedCards.includes(c.id) || c.id === card.id){
                         return  {...c , isFlipped: false}; 
                    }else{
                        return c;
                    }
                 });

                 setCards(flippedBackCard);
                 setFlippedCards([]);
                }, 1000)
            }
        
     };

    };


     return(
         
         <>
            
             <div className="app">
            <GameHeader score={3} moves={3}/>
            <div className="cards-grid">
                {cards.map((card) =>(
                    <Card card={card} onClick={handleCardClick} />
                ))}
            </div>
        </div>
         
         </>

     );
};
export default App;