/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-26 03:19:59 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-29 23:05:41
 */
import React from 'react';
import { Container, Box, Button, Heading, Text, TextField } from 'gestalt';
import ToastMessage from './ToastMessage';

class SignUp extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    toast: false,
    toastMessage: ''
  }

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    if (this.isFormEmpty(this.state)) {
      this.showToast('Fill in all fields');
      return;
    }
    console.log('submited');
  }

  isFormEmpty = ({ username, email, password }) => {
    return !username || !email || !password;
  }

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: '' }), 5000);
  }

  render() {
    const { toastMessage, toast } = this.state;

    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: '#ebe2da'
            }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Sign up Form */}
          <form 
            style={{
              display: 'inlineBlock',
              textAlign: 'center',
              maxWidth: 450
            }}
            onSubmit={this.handleSubmit}
          >
          {/* Sign Up Form Heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight">Let's Get Started</Heading>
              <Text italic color="orchid">Sign up to order some brews!</Text>
            </Box>

            {/* Username Input */}
            <TextField
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />

            {/* Email Address Input */}
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={this.handleChange}
            />

            {/* Password Input */}
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
    
            <Button
              inline
              color="blue"
              text="Submit"
              type="submit"
            />
          </form>
        </Box>
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    )
  }
}

export default SignUp;
