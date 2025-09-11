// import { Component } from "react";
import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";
import P from "./p";

// export default class App extends Component {
// }
export default function App() {
  const texts = ["Hello", "world"].map((item, index) => (
    <P key={index} children={item} />
  ));
  return <div>{texts}</div>;
}
