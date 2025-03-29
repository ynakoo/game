import { useState } from "react";
import "./index.css"; // Import CSS file for styling

export default function Tracker() {
  const [Cards, setCards] = useState(48);
  const [Social_Connections, setSocial_Connections] = useState(0);
  const [Personl, setPersonl] = useState(0);
  const [EverydayStuff, setEverydayStuff] = useState(0);
  const [acads, setAcads] = useState(0);
  const [Entertainment, setEntertainment] = useState(0);
  const [Health, setHealth] = useState(0);

  function addActivity(setActivity) {
    setActivity((t) => t + 1);
    setCards((t) => t - 1);
  }

  function reset() {
    setCards(48);
    setEntertainment(0);
    setEverydayStuff(0);
    setHealth(0);
    setPersonl(0);
    setSocial_Connections(0);
    setAcads(0);
  }

  return (
    <div className="container">
      <h2 className="title">Time Tracker Game</h2>
      <p className="description">Each card represents 30 minutes of your day. Assign them to different activities and get a report of how you spend your time!</p>

      {Cards > 0 ? (
        <div>
          <div className="grid">
            {[
              ["Social Connections", Social_Connections, setSocial_Connections],
              ["Personal Development", Personl, setPersonl],
              ["Entertainment", Entertainment, setEntertainment],
              ["Everyday Essentials", EverydayStuff, setEverydayStuff],
              ["Academics", acads, setAcads],
              ["Unknown", Health, setHealth],
            ].map(([title, value, setter], index) => (
              <div key={index} className="card">
                <h3>{title}</h3>
                <p>Cards: {value}</p>
                <button onClick={() => addActivity(setter)} className="button">Add</button>
              </div>
            ))}
          </div>
          <h1 className="total">Total Cards Left: {Cards}</h1>
        </div>
      ) : (
        <div>
          <h2 className="report-title">Your Daily Report</h2>
          <p>You spend {((Social_Connections * 30) / 60).toFixed(1)} hours on Social Connections.</p>
          <p>You spend {((Personl * 30) / 60).toFixed(1)} hours on Personal Development.</p>
          <p>You spend {((Entertainment * 30) / 60).toFixed(1)} hours on Entertainment.</p>
          <p>You spend {((EverydayStuff * 30) / 60).toFixed(1)} hours on Everyday Essentials.</p>
          <p>You spend {((acads * 30) / 60).toFixed(1)} hours on Academics.</p>
          <p>You spend {((Health * 30) / 60).toFixed(1)} hours on Unknown.</p>
          <button onClick={reset} className="button">Reset</button>
        </div>
      )}
    </div>
  );
}
