import { useState } from "react";
export default function Array() {
  const [array, setArray] = useState<string[]>([]);
  const handleClick = () => {
    setArray([...array, "click"]);
  };
  return (
    <div>
      <button onClick={handleClick}>Push</button>
      <ol>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
