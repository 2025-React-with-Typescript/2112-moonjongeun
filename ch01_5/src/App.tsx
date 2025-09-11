import "./App.css";
import * as D from "./data";
function App() {
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" alt="avatar" />
      <img src={D.randomImage()} height="300" alt="somewhere" />
    </div>
  );
}

export default App;
