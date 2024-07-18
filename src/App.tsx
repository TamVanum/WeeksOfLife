import { useState } from "react";
import "./App.css";
import {
  weeksToLiveOrchestrator,
  calculateWeeksLeftToLive,
} from "./services/WeeksServices";
import BirthDateField from "./components/common/BirthDateField";
import LifeExpentancyField from "./components/common/LifeExpentancyField";

function App() {
  const [weeksLeft, setWeeksLeft] = useState<number>(0);
  const [weeks, setWeeks] = useState<JSX.Element[]>([]);
  const [birthDate, setBirthDate] = useState("14/05/2002");

  const [lifeExpectancy, setLifeExpectancy] = useState(40);
  return (
    <>
      <h1>Weeks Of Life</h1>
      <div className="form-grid">
        <BirthDateField
          value={birthDate}
          setValue={setBirthDate}
          title="Birth Date"
        />
        <LifeExpentancyField
          value={lifeExpectancy}
          setValue={setLifeExpectancy}
          title="Life Expectancy"
        />
      </div>
      <div className="card">
        <button
          onClick={() => {
            setWeeks(weeksToLiveOrchestrator(birthDate, lifeExpectancy));
            setWeeksLeft(calculateWeeksLeftToLive(birthDate, lifeExpectancy));
          }}
        >
          Calculate Weeks Lived
        </button>
      </div>
      <center>
        <h2>Weeks Left To Live: {weeksLeft}</h2>
      </center>
      <div className="weeks-grid">{...weeks}</div>
      {/* <div className="weeks-grid">{weeksLeft}</div> */}
    </>
  );
}

export default App;
