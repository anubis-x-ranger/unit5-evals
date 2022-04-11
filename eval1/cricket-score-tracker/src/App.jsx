import React,{useState} from 'react'
import './app.css';
function App() {
    const [runs,setRuns]=React.useState(76);
    const [wickets,setWickets]=React.useState(2);
    const [balls,setballs]=React.useState(50);

    const handleincrease=(inc)=>{
        setRuns(runs+inc);
    }
    const wicketsincrease=(wik)=>{
        setWickets(wickets+wik);
    }
    const ballsincrease=(b)=>{
        setballs(balls+b);
    }
    return (
      <div className="App">
        <h3>India:</h3>
        <div className="banner">
          <div>
            Score:
            <h1 className="scoreCount">
              {runs}
            </h1>
          </div>
          <div>
            Wicket:{" "}
            <h1 className="wicketCount">
              {wickets}
            </h1>
          </div>
  
          <div>
            Over:{" "}
            <h1 className="overCount">
              
            </h1>
          </div>
        </div>
  
        <div className="addScore">
          Add Score
          {/* these buttons should add the respective amount in the score */}
          <button className="addScore1" onClick={()=>handleincrease(1)}>Add 1</button>
          <button className="addScore4" onClick={()=>handleincrease(4)}>Add 4</button>
          <button className="addScore6" onClick={()=>handleincrease(6)}>Add 6</button>
        </div>
  
        <div className="addWicket">
          Add Wicket
          {/* Increase the count of wicket */}
          <button onClick={()=>wicketsincrease(1)}>Add 1 wicket</button>
        </div>
  
        <div className="addBall">
          Add ball
          {/* Increase the total number of balls thrown here. */}
          <button onClick={()=>ballsincrease(1)}>Add 1</button>
        </div>
  
        {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      </div>
    );
  }
  
  export default App;
