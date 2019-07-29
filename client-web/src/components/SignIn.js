/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-26 03:20:50 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-30 02:37:19
 */
import React from 'react';
import { Container, Box, Button, Heading, Text, TextField } from 'gestalt';
import { setToken } from '../utils';
import ToastMessage from './ToastMessage';
import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class SignIn extends React.Component {

  state = {
    username: '',
    password: '',
    toast: false,
    toastMessage: '',
    loading: false
  }

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    
    if (this.isFormEmpty(this.state)) {
      this.showToast('Fill in all fields');
      return;
    }
    
    // sign up users
    try {
      // set loading true
      this.setState({ loading: true });
      // make request to register user with strapi
      const response = await strapi.login(username, password);
      // set loading false
      this.setState({ loading: false });
      // put token (to mange user session) in local storage
      setToken(response.jwt);
      // redirect user to home page
      this.redirectUser('/');
    } catch (err) {
      // set loading to false
      this.setState({ loading: false });
      // show error message with toast message
      this.showToast(err.message);
    }
  }

  redirectUser = path => this.props.history.push(path);

  isFormEmpty = ({ username, password }) => {
    return !username || !password;
  }

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: '' }), 5000);
  }

  render() {
    const { toastMessage, toast, loading } = this.state;

    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: '#d6a3b1'
            }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Sign In Form */}
          <form 
            style={{
              display: 'inlineBlock',
              textAlign: 'center',
              maxWidth: 450
            }}
            onSubmit={this.handleSubmit}
          >
          {/* Sign In Form Heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight">Welcome Back!</Heading>
            </Box>

            {/* Username Input */}
            <TextField
              id="username"
              type="text"
              name="username"
              placeholder="Username"
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
              disabled={loading}
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

export default SignIn;
