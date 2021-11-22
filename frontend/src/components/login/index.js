import React, { useState } from 'react';
import {Form , Button}from 'react-bootstrap'

function LogIn(){
    const[userName,setuserName]=useState();
    const[passWord,setpassWord]=useState();
    return(
        <div>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicuser">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="username" placeholder="Enter User Name" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
export default LogIn;