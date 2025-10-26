import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Employee Added:
Name: ${formData.name}
Designation: ${formData.designation}
Location: ${formData.location}
Salary: ${formData.salary}`);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Add Employee</h2>
      <Form onSubmit={handleSubmit} className="border p-4 rounded bg-light shadow">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Designation</Form.Label>
          <Form.Control name="designation" value={formData.designation} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control name="location" value={formData.location} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control name="salary" value={formData.salary} onChange={handleChange} required />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EmployeeForm;
