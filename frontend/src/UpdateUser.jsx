import React, { useEffect, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";

function UpdateUser() {
 const {id} = useParams()

const[name,setName]=useState()
 const[email,setEmail]=useState()
 const[age,setAge]=useState()
 const navigate=useNavigate()

useEffect(()=>{
axios.get(import.meta.env.VITE_BACKEND_URL+'/getUser/'+id)
    .then(result=>{console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err=>console.log(err))
 },[])

 const handleSubmit=(e)=>{
  e.preventDefault();
  axios.put(import.meta.env.VITE_BACKEND_URL+'/UpdateUser/'+id,{name,email,age})
  .then(result=>{
    console.log(result) 
    navigate('/')
  })
  .catch(err=>console.log(err))
 }

  return (
    <Container className="mt-5">
      <Card className="shadow p-4">
        <h2 className="text-center mb-4">Edit User</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              value={name}
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
              value={email}
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
              value={age}
              onChange={(e)=>setAge(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-20">
            Edit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default UpdateUser;