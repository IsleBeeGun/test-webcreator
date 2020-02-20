import React from "react";
import "./RichTextComponent.css";

export class RichTextComponent extends React.Component {
  render() {
    return (
      <article className={"col-" + this.props.col}>
        <header className="row">
          <span className="col">{this.props.title}</span>
        </header>
        <div className="row">
          <p className="col">{this.props.text}</p>
        </div>
      </article>
    );
  }
}
