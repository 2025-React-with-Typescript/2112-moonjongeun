import Bootstrap from "./pages/Bootstrap";
import Icon from "./pages/Icon";
import Style from "./pages/Style";
import UsingIcon from "./pages/UsingIcon";
import "./App.css";
import UsingIconWithCSSClass from "./pages/UsingIconWithCSSClass";

function App() {
  return (
    <>
      <button className="btn btn-primary">TEST</button>
      <Bootstrap />
      <Style />
      <Icon />
      <UsingIcon />
      <UsingIconWithCSSClass />
    </>
  );
}

export default App;
