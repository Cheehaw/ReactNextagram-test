import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'

class LoginForm extends Component {
  state = {
    email: '',
    username: '',
    password: ''
  }

  Login = () =>
  {
    axios(
    {
      method: 'POST',
      url: 'https://insta.nextacademy.com/api/v1/login',
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then (result =>
      {
        console.log(result.data)
        console.log(result.status)
      })
  }

  testing()
  {
    
  }

  handleLogin = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render() {
    return (
      <Form onSubmit={this.Login}>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="At least 5 characters"
            onChange={this.handleLogin}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" onChange={this.handleLogin} />
        </FormGroup>
        <p onClick={this.props.toggleForm} className="text-info">Click here to sign up</p>
        <Button color="info">Submit</Button>
      </Form>
    )
  }
}

export default LoginForm