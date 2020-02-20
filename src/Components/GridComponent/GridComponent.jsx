import React from "react";
import "./GridComponent.css";
import { RichTextComponent } from "../RichTextComponent/RichTextComponent";

export class GridComponent extends React.Component {
  render() {
    return (
      <section className="row bg-light">
        {this.props.components.map(component => {
          return (
            <RichTextComponent
              col={component.col}
              title={component.metadata.title}
              text={component.metadata.text}
            />
          );
        })}
      </section>
    );
  }
}
