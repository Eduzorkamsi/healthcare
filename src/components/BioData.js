import React from "react";
import "../styles/biodata.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BioData = () => {
  return (
    <>
      <div className="bio_data">
        <h4>Bio Data</h4>
        <div className="border_line_bio"></div>
        <div
          style={{
            marginLeft: "24px",
          }}
          className="bio_form"
        >
          <Form>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Col>
                <Form.Label
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  First Name
                </Form.Label>
                <Form.Control placeholder="First name" />
              </Col>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Form.Label>Middle Name</Form.Label>
                <Form.Control placeholder="Midlle name" />
              </Col>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Form.Label>Other Names</Form.Label>
                <Form.Control placeholder="Other name(s)" />
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Form.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                as={Col}
                controlId="formGridState "
              >
                <Form.Label>Sex</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>

              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Form.Label>Date of birth</Form.Label>
                <Form.Control placeholder="Date of birth" />
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Form.Label>Hospital ID</Form.Label>
                <Form.Control placeholder="Hospital ID" />
              </Col>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Form.Label>Date of appointment</Form.Label>
                <Form.Control placeholder="Date of Appointment" />
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Form.Label>Religon</Form.Label>
                <Form.Control placeholder="Religion" />
              </Col>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Form.Group
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  as={Col}
                  controlId="formGridState "
                >
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Farmer</option>
                    <option>Developer</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>

          <div className="bio_update_button">Update</div>
        </div>
      </div>
    </>
  );
};

export default BioData;
