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
            {/* Here comes the main group of inputs, it's nested in a column */}
            <div className={this.props.field_groups.main}>
              <div className="row">
                {main.map((field, index) => {
                  return (
                    <div
                      className="form-group col-md-6"
                      key={index + "-" + field.name}
                    >
                      <label htmlFor={index + "-" + field.name}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={index + "-" + field.name}
                        name={field.name}
                        required={field.required}
                        className="form-control"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Here comes the additional group of inputs in column (right now only single entry in page.json) */}
            <div className={this.props.field_groups.additional}>
              <div className="row h-75">
                {additinal.map((field, index) => {
                  return (
                    <div
                      className="form-group col"
                      key={index + "-" + field.name}
                    >
                      <label htmlFor={index + "-" + field.name}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={index + "-" + field.name}
                        name={field.name}
                        required={field.required}
                        className="form-control w-100 h-75"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Here GDPR checkbox is added (right now there is only one entry in page.json) */}
          {gdpr.map((field, index) => {
            return (
              <div className="row" key={index + "-" + field.name}>
                <div className="col-auto">
                  <div className="custom-control custom-checkbox">
                    <input
                      type={field.type}
                      name={field.name}
                      id={index + "-" + field.name}
                      required={true}
                      className="custom-control-input"
                    />
                    <label
                      htmlFor={index + "-" + field.name}
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
            <button type="submit" className="col-auto btn btn-success btn-lg">
              {this.props.submit_button.text}
            </button>
          </div>
        </div>
      </form>
    );
  }
}
