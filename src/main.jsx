// src/main.jsx
import React from "react";//option its not nessesary in old version it is compalsary
import { createRoot } from "react-dom/client";
import App from './Reciepes.jsx'
import Data from './data.js';
import './index.css';
import "./App.css";


 

const root=createRoot(document.getElementById("root"))

  function Cards(){
    // Filter recipes by meal type
    const breakfastItems = Data.filter(item => 
        item.type.includes("Breakfast") || item.type.includes("Beverage")
    );
    
    const lunchItems = Data.filter(item => 
        item.type.includes("Main Course") || item.type.includes("Snack")
    );
    
    const dinnerItems = Data.filter(item => 
        item.type.includes("Dessert") || item.RecipeName.includes("Biryani") || item.RecipeName.includes("Butter Chicken")
    );

    return(
        <>
        <header className="menu">
        Restaurant Menu Cards
        </header>

        <div className="mainRoot">

         
            {/* Breakfast Section */}
            <div className="meal-section">
                <h2 className="meal-header breakfast-header">🌅 BREAKFAST</h2>
                <div className="meal-cards">
                    {breakfastItems.map((item, index) => (
                        <App key={`breakfast-${index}`} item={item}/>
                    ))}
                </div>
            </div>

            {/* Lunch Section */}
            <div className="meal-section">
                <h2 className="meal-header lunch-header">☀️ LUNCH</h2>
                <div className="meal-cards">
                    {lunchItems.map((item, index) => (
                        <App key={`lunch-${index}`} item={item}/>
                    ))}
                </div>
            </div>

            {/* Dinner Section */}
            <div className="meal-section">
                <h2 className="meal-header dinner-header">🌙 DINNER</h2>
                <div className="meal-cards">
                    {dinnerItems.map((item, index) => (
                        <App key={`dinner-${index}`} item={item}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

 
root.render(<Cards/>
);
