import WrapTest from "./pages/WrapTest";
import CardContainer from "./pages/CardContainer";
import UserContainer from "./pages/UserContainer";
import AlignTest from "./pages/AlignTest";
import JustifyCenterTest from "./pages/JustifyCenterTest";
import MinMaxTest from "./pages/MinMaxTest";
import DirectionTest from "./pages/DirectionTest";
function App() {
  return (
    <div>
      <CardContainer />
      <UserContainer />
      <AlignTest />
      <JustifyCenterTest />
      <MinMaxTest />
      <WrapTest />
      <DirectionTest />
    </div>
  );
}
export default App;
