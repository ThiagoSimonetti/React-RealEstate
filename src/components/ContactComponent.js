import React, { Component } from "react";
import { Button, Label, Col, Row } from "reactstrap";

import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      agree: false,
      contactType: "By Phone",
      feedback: "",
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
    // this.props.resetFeedbackForm();
    // this.props.postFeedback(values);
  }

  render() {
    return (
      <React.Fragment>
        <div className="contact-us">
          <div className="container">
            <div className="row">
              <div className="col text-center py-5">
                <h1 className="title-padding">Contato</h1>
              </div>
            </div>

            {/* <div className="row row-content align-items-center">
          <div className="col-sm-4">
            <h5>Our Address</h5>
            <address>
              1 Nucamp Way
              <br />
              Seattle, WA 98001
              <br />
              U.S.A.
            </address>
          </div>
          <div className="col">
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              <i className="fa fa-phone" /> 1-206-555-1234
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:fakeemail@fakeemail.co"
            >
              <i className="fa fa-envelope-o" /> campsites@nucamp.co
            </a>
          </div>
        </div> */}
            <div className="row row-content">
              <div className="col-12 text-center">
                <h3>Estamos Prontos à Atende-lo</h3>
                <br />
              </div>
              <div className="col-md-10">
                <Form
                  model="feedbackForm"
                  onSubmit={(values) => this.handleSubmit(values)}
                >
                  <Row className="form-group">
                    {/* <Label htmlFor="firstName" md={2}>
                  First Name
                </Label> */}
                    <Col md={{ size: 10, offset: 2 }}>
                      <Control.text
                        model=".firstName"
                        id="firstName"
                        name="firstName"
                        placeholder="Nome"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(2),
                          maxLength: maxLength(15),
                        }}
                      />
                      <Errors
                        className="bg-danger text-white rounded"
                        model=".firstName"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          minLength: "Must be at least 2 characters",
                          maxLength: "Must be 15 characters or less",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    {/* <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label> */}
                    <Col md={{ size: 10, offset: 2 }}>
                      <Control.text
                        model=".lastName"
                        id="lastName"
                        name="lastName"
                        placeholder="Sobrenome"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(2),
                          maxLength: maxLength(15),
                        }}
                      />
                      <Errors
                        className="bg-danger text-white rounded"
                        model=".lastName"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          minLength: "Must be at least 2 characters",
                          maxLength: "Must be 15 characters or less",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    {/* <Label htmlFor="phoneNum" md={2}>
                  Phone
                </Label> */}
                    <Col md={{ size: 10, offset: 2 }}>
                      <Control.text
                        model=".phoneNum"
                        id="phoneNum"
                        name="phoneNum"
                        placeholder="Telefone"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(10),
                          maxLength: maxLength(15),
                          isNumber,
                        }}
                      />
                      <Errors
                        className="bg-danger text-white rounded"
                        model=".phoneNum"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          minLength: "Must be at least 10 numbers",
                          maxLength: "Must be 15 numbers or less",
                          isNumber: "Must be a number",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    {/* <Label htmlFor="email" md={2}>
                  Email
                </Label> */}
                    <Col md={{ size: 10, offset: 2 }}>
                      <Control.text
                        model=".email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        validators={{
                          required,
                          validEmail,
                        }}
                      />
                      <Errors
                        className="bg-danger text-white rounded"
                        model=".email"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          validEmail: "Invalid email address",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={{ size: 4, offset: 2 }}>
                      <div className="form-check">
                        <Label check>
                          <Control.checkbox
                            model=".agree"
                            name="agree"
                            className="form-check-input"
                          />{" "}
                          <strong>Preferência de Contato?</strong>
                        </Label>
                      </div>
                    </Col>
                    <Col md={4}>
                      <Control.select
                        model=".contactType"
                        name="contactType"
                        className="form-control"
                      >
                        <option>Telefone</option>
                        <option>Email</option>
                      </Control.select>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    {/* <Label htmlFor="feedback" md={2}>
                  Your Feedback
                </Label> */}
                    <Col md={{ size: 10, offset: 2 }}>
                      <Control.textarea
                        model=".feedback"
                        id="feedback"
                        name="feedback"
                        placeholder="Mensagem"
                        rows="10"
                        className="form-control"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group mb-5">
                    <Col md={{ size: 10, offset: 2 }}>
                      <Button type="submit" color="primary">
                        Enviar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;