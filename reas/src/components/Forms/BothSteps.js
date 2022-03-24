import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function BothSteps() {

  const [step, setstep] = useState(1);

  
  const [formData, setFormData] = useState({
    propertyType: "",
    region: "",
    district: "",
    name: "",
    phoneNumber: "",
    email: "",
  });

  
  const nextStep = () => {
    setstep(step + 1);
  };

  
  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = (input) => (e) => {
    
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    default:
      return <div className="App"></div>;
  }
}

export default BothSteps;
