/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-26 03:20:47 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-30 04:45:45
 */
import React from 'react';
import { Container, Box, Heading, TextField, Text } from 'gestalt';
import ToastMessage from './ToastMessage';
import { getCart, calculatePrice } from '../utils';
// import Strapi from 'strapi-sdk-javascript/build/main';

// const apiUrl = process.env.API_URL || 'http://localhost:3000';
// const apiUrl ='http://devsecret.com:3000';
// const strapi = new Strapi(apiUrl);

class CheckOut extends React.Component {

  state = {
    cartItems: [],
    address: '',
    postalCode: '',
    city: '',
    confirmationEmailAddress: '',
    toast: false,
    toastMessage: ''
  }

  componentDidMount() {
    this.setState({ cartItems: getCart() });
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
    const { toast, toastMessage, cartItems } = this.state;

    return (
      <Container>
        <Box
          color="darkWash"
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          {/* Checkout Form Heading */}  
          <Heading color="midnight">Checkout</Heading>

          {cartItems.length > 0 ? <React.Fragment>
            {/* user cart */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              direction="column"
              marginTop={2}
              marginBottom={6}
            >
              <Text color="darkGray" italic>{cartItems.length} for Checkout</Text>
              <Box padding={2}>
                {cartItems.map(item =>(
                  <Box key={item._id} padding={1}>
                    <Text color="midnight">
                      {item.name} x {item.quantity} - ${item.quantity * item.price}
                    </Text>
                  </Box>
                ))}
              </Box>
              <Text bold>Total Amount: {calculatePrice(cartItems)}</Text>
            </Box>

            {/* Checkout Form */}
            <form 
              style={{
                display: 'inlineBlock',
                textAlign: 'center',
                maxWidth: 450
              }}
              onSubmit={this.handleConfirmOrder}
            >
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
          </React.Fragment> : (
            //default text if no time in cart
            <Box color="darkWash" shape="rounded" padding={4}>
              <Heading align="center" color="watermelon" size="xs">Your Cart is Empty</Heading>
              <Text align="center" italic color="green">Add some brews!</Text>
            </Box>
          )}

        </Box>
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    )
  }
}

export default CheckOut;
