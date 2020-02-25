import React from "react";
import "./FormComponent.css";
// Following imports are required for datepicker
import Datetime from "react-datetime/DateTime";
import "react-datetime/css/react-datetime.css";
require("moment/locale/ru");

export class FormComponent extends React.Component {
  render() {
    const main = this.props.fields.filter(field => field.group === "main");
    const additinal = this.props.fields.filter(
      field => field.group === "additional"
    );
    const gdpr = this.props.fields.filter(field => field.name === "agreement");
    return (
      <form className="row">
        <div className="pl-md-0 col">
          <div className="row">
            <span className="col formcomponent-header">{this.props.title}</span>
          </div>
          <div className="row">
            {/* Here comes the main group of inputs, it's nested in a column. */}
            <div className={this.props.field_groups.main}>
              <div className="row">
                {main.map((field, index) => {
                  // Checking array for date field, as there are special rules for it.
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
                          <Datetime
                            inputProps={{
                              className:
                                "form-control input_field_main input_field_date",
                              required: field.required,
                              name: field.name,
                              id: index + "-" + field.name
                            }}
                          />
                          <svg
                            className="date_icon"
                            onClick={() => {
                              document.querySelector(".input_field_date").focus();
                            }}
                            htmlFor={index + "-" + field.name}
                            width="22"
                            height="24"
                            viewBox="0 0 22 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.88889 10.8H7.33333V13.2H4.88889V10.8ZM22 4.8V21.6C22 22.92 20.9 24 19.5556 24H2.44444C1.79614 24 1.17438 23.7471 0.715961 23.2971C0.257539 22.847 0 22.2365 0 21.6L0.0122222 4.8C0.0122222 3.48 1.08778 2.4 2.44444 2.4H3.66667V0H6.11111V2.4H15.8889V0H18.3333V2.4H19.5556C20.9 2.4 22 3.48 22 4.8ZM2.44444 7.2H19.5556V4.8H2.44444V7.2ZM19.5556 21.6V9.6H2.44444V21.6H19.5556ZM14.6667 13.2H17.1111V10.8H14.6667V13.2ZM9.77778 13.2H12.2222V10.8H9.77778V13.2Z"
                              fill="url(#paint0_linear)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear"
                                x1="-0.572917"
                                y1="4.57143"
                                x2="21.8758"
                                y2="5.22789"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#93E08C" />
                                <stop offset="1" stopColor="#78CEBF" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    );
                  } // All other fields are passed in here.
                  else
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
            {/* Here comes the additional group of inputs (right now there ia only one in page.json). */}
            <div className={this.props.field_groups.additional}>
              <div className="row">
                {additinal.map((field, index) => {
                  return (
                    <div
                      className="form-group col input_group"
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
                          name={index + "-" + field.name + "-textarea"}
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
          {/* Here GDPR checkbox is added (right now there is only one entry in page.json). */}
          {gdpr.map((field, index) => {
            return (
              <div className="row" key={index + "-" + field.name + "-X"}>
                <label
                  className="col checkbox"
                  htmlFor={index + "-" + field.name + "-X"}
                >
                  <input
                    type={field.type}
                    name={field.name}
                    id={index + "-" + field.name + "-X"}
                    required={true}
                  />
                  <span className="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="12"
                      viewBox="0 0 15 12"
                      fill="none"
                      className="icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15 1.89474L5 12L0 6.94737L1.875 5.05263L5 8.21053L13.125 0L15 1.89474Z"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-0.390625"
                          y1="2.28572"
                          x2="14.9041"
                          y2="2.89561"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#93E08C" />
                          <stop offset="1" stopColor="#78CEBF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className="gdpr_label">
                    {require("html-react-parser")(field.label)}
                  </div>
                </label>
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
