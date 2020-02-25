import React from "react";
import "./RichTextComponent.css";

export class RichTextComponent extends React.Component {
  render() {
    return (
      <article className={"col-" + this.props.col}>
        <header className="row">
          <span className="col pl-md-0 rtc-header">{this.props.title}</span>
        </header>
        <div className="row">
          {/* Parse html from page.json like this: require('html-react-parser')(stringToParse) */}
          <div className="col pl-md-0">{require("html-react-parser")(this.props.text)}</div>
        </div>
      </article>
    );
  }
}
