
import React, { useState } from "react";
import "./App.css"; 
import Data from "./data.js"    //dentation

export default function App( props) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="recipe-card">
       {/* Like Button in top right corner */}
       <div className="like-button" onClick={handleLikeClick}>
         <span className="heart">❤️</span>
         <span className="like-count">{likeCount}</span>
       </div>

       <div className="header">
        <h2>{props.item.RecipeName}</h2>
      <p>{props.item.time}</p>
    </div>
     
       <div className="divide">
      <div>
          <div className="details">
      <p><strong>{props.item.Serves}</strong> </p>
      <p><strong>{props.item.level}</strong></p>
      <p><strong>{props.item.type}</strong></p>
     
      </div>
    
      </div>

       
       <img className="foodimg" src={props.item.image} alt="" />
    
       </div>

    <div className="footer">
      <p>{props.item.owner}</p>
    </div> 
    </div>
  );
}
 




 