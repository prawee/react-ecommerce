/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-26 03:20:47 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-30 03:09:39
 */
import React from 'react';
import { Container, Box, Heading, TextField } from 'gestalt';
import ToastMessage from './ToastMessage';
import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class CheckOut extends React.Component {

  state = {
    address: '',
    postalCode: '',
    city: '',
    confirmationEmailAddress: '',
    toast: false,
    toastMessage: ''
  }

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  }

  handleConfirmOrder = async event => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.showToast('Fill in all fields');
      return;
    }
  }

  isFormEmpty = ({ address, postalCode, city, confirmationEmailAddress }) => {
    return !address || !postalCode || !city || !confirmationEmailAddress;
  }

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: '' }), 5000);
  }
  
  render() {
    const { toast, toastMessage } = this.state;

    return (
      <Container>
        <Box
          color="darkWash"
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Checkout Form */}
          <form 
            style={{
              display: 'inlineBlock',
              textAlign: 'center',
              maxWidth: 450
            }}
            onSubmit={this.handleConfirmOrder}
          >
            {/* Checkout Form Heading */}  
            <Heading color="midnight">Checkout</Heading>
              
            {/* Shipping Address Input */}
            <TextField
              id="address"
              type="text"
              name="address"
              placeholder="Shipping Address"
              onChange={this.handleChange}
            />

            {/* Postal Code Address Input */}
            <TextField
              id="postalCode"
              type="number"
              name="postalCode"
              placeholder="Postal Code"
              onChange={this.handleChange}
            />

            {/* City Input */}
            <TextField
              id="city"
              type="text"
              name="city"
              placeholder="City of Residence"
              onChange={this.handleChange}
            />

            {/* Confirmation email address Input */}
            <TextField
              id="confirmationEmailAddress"
              type="email"
              name="confirmationEmailAddress"
              placeholder="Confirmation Email Address"
              onChange={this.handleChange}
            />
    
            <button id="strip__button" type="submit">Submit</button>
          </form>
        </Box>
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    )
  }
}

export default CheckOut;
