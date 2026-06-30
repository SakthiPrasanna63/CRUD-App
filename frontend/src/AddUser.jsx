import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
 const[name,setName]=useState()
 const[email,setEmail]=useState()
 const[age,setAge]=useState()
 const navigate=useNavigate()

 const handleSubmit=(e)=>{
  e.preventDefault();
  const {data}=axios.post(import.meta.env.VITE_BACKEND_URL+'/AddUser',{name,email,age})
  .then(result=>{
    console.log(result)
    navigate('/')
  })
  .catch(err=>console.log(err))
 }

  return (
    <Container className="mt-5">
      <Card className="shadow p-4">
        <h2 className="text-center mb-4">Add User</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={(e)=>setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              placeholder="Enter Age"
             onChange={(e)=>setAge(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-20">
            Add User
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default AddUser;