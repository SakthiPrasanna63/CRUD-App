import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get(import.meta.env.VITE_BACKEND_URL)
    .then(result=>setUsers(result.data))
    .catch(err=>console.log(err))
  },[])

  const handleDelete=(id)=>{
    axios.delete(import.meta.env.VITE_BACKEND_URL+'/deleteUser/'+id)
    .then(result=>{console.log(result)
      window.location.reload()
    })
    .catch(err=>console.log(err))
  }

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>CRUD Table</h2>

       <Link to="/AddUser" className="text-decoration-none text-reset">
             <Button variant="success">+ Add User</Button>
        </Link>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <Link to={`/UpdateUser/${user._id}`} variant="warning" size="sm" className="me-2">
                <Button variant="warning">Edit</Button>
                 </Link>
                <Button variant="danger" size="sm" onClick={(e)=>handleDelete(user._id)}> Delete </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Home;