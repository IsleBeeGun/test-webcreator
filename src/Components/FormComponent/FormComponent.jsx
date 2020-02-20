import React from "react";
import "./FormComponent.css";

export class FormComponent extends React.Component {
  render() {
    const main = this.props.fields.filter(field => field.group === "main");
    const additinal = this.props.fields.filter(
      field => field.group === "additional"
    );
    const gdpr = this.props.fields.filter(field => field.name === "agreement");
    return (
      <form className="row bg-secondary text-light">
        <div className="col">
          <div className="row">
            <span className="col">{this.props.title}</span>
          </div>
          <div className="row">
            <span className="col">multiple fields</span>
          </div>
          {/* Here GDPR checkbox is added (right now there is only one entry in page.json) */}
          {gdpr.map((field, index) => {
            return (
              <div className="row" key={field.name+"-"+index}>
                <div className="col-auto">
                  <div className="custom-control custom-checkbox">
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.name+"-"+index}
                      required={true}
                      className="custom-control-input"
                    />
                    <label
                      htmlFor={field.name+"-"+index}
                      className="custom-control-label"
                    >
                      {require("html-react-parser")(field.label)}
                    </label>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="row">
            <button type="button" className="col-auto btn btn-success btn-lg">
              {this.props.submit_button.text}
            </button>
          </div>
        </div>
      </form>
    );
  }
}
