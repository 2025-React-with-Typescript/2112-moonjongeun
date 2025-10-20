import { useEffect, useState } from "react";
import Clock from "./pages/Clock";

function App() {
  const [today, setToday] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setToday(new Date());
    }, 1000);
    console.log(id);
  }, []);
  return <Clock today={today} />;
}
export default App;
