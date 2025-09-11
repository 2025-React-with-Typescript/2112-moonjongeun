import { Component } from "react";
export type ClassComponentProp = {
  href: string;
  text: string;
};
export default class ClassComponent extends Component<ClassComponentProp> {
  render() {
    const { href, text } = this.props;
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    );
  }
}
