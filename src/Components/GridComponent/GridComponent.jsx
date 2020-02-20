import React from "react";
import "./GridComponent.css";
import { RichTextComponent } from "../RichTextComponent/RichTextComponent";

export class GridComponent extends React.Component {
  render() {
    return (
      <section className="row bg-light">
        <RichTextComponent />
        <RichTextComponent />
      </section>
    );
  }
}
