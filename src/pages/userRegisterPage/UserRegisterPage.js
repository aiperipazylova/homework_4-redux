import React, { useState } from 'react';
import { Row, Col, Form, Button, Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function UserRegisterPage() {

  const dispatch = useDispatch
  const {preloader} = useSelector(state => state.titleReducer)
  const [user, setUser] = useState({ 
      name: '', 
      username: '', 
      email: ''
  })

  const formValue = (event) => {
    setUser({ 
        ...user, 
        [event.target.name]: event.target.value
    })
  }

  const regName = /^[A-Za-z]+$/

  const addUser = (event) => {
      event.preventDefault()

      if(!user.name && !user.username && !user.email) {
        alert('Заполните все поля')
        return
      }
      if (!regName.test(user.name)) {
          alert('Имя должно содержать только буквы!')
          return
      }

      dispatch(addUserAction(user))
  }

  return (
    <Container>
      <h1>register user</h1>
        {
            preloader 
      ?
            <Spinner animation="border" variant="success" />
      :
        <Form onSubmit={addUser}>
          <Row>
            <Col lg={3}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Control 
                type="text" 
                placeholder="name" 
                name="name" 
                onChange={formValue}
                />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Control 
                type="text" 
                placeholder="username" 
                name="username" 
                onChange={formValue}
                />
              </Form.Group>
            </Col>
             <Col lg={3}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control 
                type="text" 
                placeholder="email" 
                name="email" 
                onChange={formValue}
                />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Button type="submit" variant="success" className="w-3">
                register user
              </Button>
            </Col>
          </Row>
        </Form>
      }
    </Container>
  );
}

export default UserRegisterPage;
