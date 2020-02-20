import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";


function App() {
    
    const [planets, setPlanets] = useState([]);
    let url = "https://lh3.googleusercontent.com/proxy/7jGGdiWpMIUOBm7XHp78bQO3EQ_t1FqHVTOYqvEiJJJ7CrKvG6avj5Dm8KO2tiABaq_j4GdFWYx1pXDd15e7e1kkYb3yhfPu8gDU-zpY1PKqydwzn4JIYlBEbwWg70HYrR6FE7eNXK4WsxiUuujhvTCxY-DE-mL8nUVA7GUtUEQNY6GZ"

const fetchSpace = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=qGXu0u8klvk6zWxUEdFhAsGmagoOWGMMZZQYjk1O`)
    .then(res => res.json())
   .then(planets => setPlanets(planets))
    
    
    .catch(err => console.log(`error! ${err}`))



};

useEffect(() => {
    fetchSpace();
},[])




return (
    
        <div id="top" className="App-header">
        <header id="top" >
        <div className="App-logo-spin">
        <div className="App-logo"></div>
        <div className="App-logo"></div>
        <div className="App-logo">🚀</div>    
                
        </div>
        <div className="retro">{planets.date}</div>
        </header>
        <div className="liftUp">
        
        
           <div class="imgs">
            <img className="stubborn" width="68%" src={planets.url}/>
            <img className="nasa" src={url}/>
            </div>
        
        <p className="title">{planets.title}</p>
        <div id="bottom">{planets.explanation}</div>   
        </div>  

        <header>
          <div className="App-logo-spin">
        <div className="App-logo"></div>
        <div className="App-logo">🚀</div>
        <div className="App-logo"></div>
            </div> 
        
        </header>
        </div>
            
);

    
}


ReactDOM.render(<App />, document.getElementById("root"));
