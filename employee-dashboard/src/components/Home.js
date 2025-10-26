import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // show only first 8 employees
        setEmployees(data.slice(0, 8));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 fw-bold text-primary">
        Employee Dashboard
      </h2>

      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2">Loading Employees...</p>
        </div>
      ) : (
        <Row className="g-4">
          {employees.map((emp) => (
            <Col key={emp.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-lg border-0 rounded-4 hover-card">
                <Card.Body className="text-center">
                  <Card.Title className="fw-semibold text-dark">
                    {emp.name}
                  </Card.Title>
                  <Card.Subtitle className="text-muted mb-2">
                    ID: {emp.id}
                  </Card.Subtitle>
                  <Card.Text className="text-secondary small">
                    📧 {emp.email}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Home;
