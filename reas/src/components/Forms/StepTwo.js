import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import axios from "axios";

const StepTwo = ({ handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.name) ||
      validator.isEmpty(values.email) ||
      validator.isEmpty(values.phoneNumber)
    ) {
      setError(true);
    } else {
      console.log(values.region);
      const newPerson = {
        EstateType: values.propertyType,
        Fullname: values.name,
        Phone: values.phoneNumber,
        Email: values.email,
        Region: values.region,
        District: values.district,
      };
      console.log(newPerson);
      axios.post("http://localhost:3001/lead", newPerson);
    }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Jméno</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="Jméno"
                onChange={handleFormData("name")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Toto je povinné pole
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefonní číslo</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="Telefonní číslo"
                onChange={handleFormData("phoneNumber")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Toto je povinné pole
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="email"
                onChange={handleFormData("email")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Toto je povinné pole
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Předchozí
              </Button>

              <Button variant="primary" type="submit">
                Odeslat
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;
