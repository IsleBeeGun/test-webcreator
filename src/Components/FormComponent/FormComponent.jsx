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
      <form className="row">
        <div className="col">
          <div className="row">
            <span className="col formcomponent-header">{this.props.title}</span>
          </div>
          <div className="row">
            {/* Here comes the main group of inputs, it's nested in a column */}
            <div className={this.props.field_groups.main}>
              <div className="row">
                {main.map((field, index) => {
                  if (field.type === "date") {
                    return (
                      <div
                        className="form-group col-md-6 input_group"
                        key={index + "-" + field.name}
                      >
                        <label htmlFor={index + "-" + field.name}>
                          {field.label}
                        </label>
                        <div className="gradient-border-trick">
                          <input
                            type={field.type}
                            id={index + "-" + field.name}
                            name={field.name}
                            required={field.required}
                            className="form-control input_field_main"
                          />
                        </div>
                      </div>
                    );
                  } else
                    return (
                      <div
                        className="form-group col-md-6 input_group"
                        key={index + "-" + field.name}
                      >
                        <label htmlFor={index + "-" + field.name}>
                          {field.label}
                        </label>
                        <div className="gradient-border-trick">
                          <input
                            type={field.type}
                            id={index + "-" + field.name}
                            name={field.name}
                            required={field.required}
                            className="form-control input_field_main"
                          />
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>
            {/* Here comes the additional group of inputs in column (right now only single entry in page.json) */}
            <div className={this.props.field_groups.additional}>
              <div className="row">
                {additinal.map((field, index) => {
                  return (
                    <div
                      className="form-group col"
                      key={index + "-" + field.name + "-textarea"}
                    >
                      <label htmlFor={index + "-" + field.name + "-textarea"}>
                        {field.label}
                      </label>
                      <div className="gradient-border-trick">
                        <textarea
                          type={field.type}
                          rows="3"
                          id={index + "-" + field.name + "-textarea"}
                          name={field.name}
                          required={field.required}
                          className="form-control input_field_additional"
                        />
                      </div>
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
                <div className="col gdpr">
                  <div className="gradient-border-trick-checkbox">
                    <input
                      type={field.type}
                      name={field.name}
                      id={index + "-" + field.name}
                      required={true}
                      className="gdpr_checkbox"
                    />
                  </div>
                  <label
                    htmlFor={index + "-" + field.name}
                    className="gdpr_label"
                  >
                    {require("html-react-parser")(field.label)}
                  </label>
                </div>
              </div>
            );
          })}

          <div className="row">
            <div className="col">
              <button type="submit" className="btn submit_button">
                {this.props.submit_button.text}
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
