/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-26 03:19:59 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-29 22:35:50
 */
import React from 'react';
import { Container, Box, Button, Heading, Text, TextField } from 'gestalt';

class SignUp extends React.Component {
  render() {
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
          <form style={{
            display: 'inlineBlock',
            textAlign: 'center',
            maxWidth: 450
          }}>
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
              color="blue"
              text="Submit"
              type="submit"
            />
          </form>
        </Box>
      </Container>
    )
  }
}

export default SignUp;
