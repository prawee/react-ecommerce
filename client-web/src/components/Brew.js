/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-29 14:27:32 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-29 17:31:38
 */
import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import { Box, Heading, Text, Image, Card, Button, Mask } from 'gestalt';
import { Link } from 'react-router-dom';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class Brew extends React.Component {
  state = {
    brews: [],
    brand: '',
    cartItems: []
  }
  async componentDidMount() {
    // console.log(this.props.match.params.brandId);
    try {
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            brand(id: "${this.props.match.params.brandId}") {
              _id
              name
              brews {
                _id
                name
                description
                image {
                  url
                }
                price
              }
            }
          }
          `
        }
      });
      // console.log(response);
      this.setState({
        brews: response.data.brand.brews,
        brand: response.data.brand.name
      });
      console.log(this.state);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    const { brand, brews, cartItems } = this.state;

    return (
      <Box
        marginTop={4}
        display="flex"
        justifyContent="center"
        alignItems="start"
        dangerouslySetInlineStyle={{
          __style: {
            flexWrap: 'wrap-reverse'
          }
        }}
      >
        {/* Brew Section */}
        <Box display="flex" direction="column" alignItems="center">
          {/* Brew Heading */}
          <Box margin={2}>
            <Heading color="orchid">{brand}</Heading>
          </Box>
          {/* Brews */}
          <Box
            dangerouslySetInlineStyle={{
              __style: {
                backgroundColor: '#bdcdd9'
              }
            }}
            shape="rounded"
            display="flex"
            justifyContent="center"
            padding={4}
          >
            {brews.map(brew => (
              <Box
              paddingY={4}
              margin={2}
              width={210}
              key={brew._id}
            >
              <Card
                image={
                  <Box height={250} width={200}>
                    <Image
                      fit="cover"
                      alt="Brand"
                      naturalHeight={1}
                      naturalWidth={1}
                      src={`${apiUrl}${brew.image.url}`}
                    />
                  </Box>
                }
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                >
                  <Box margin={2}>
                    <Text bold size="xl">
                      {brew.name}
                    </Text>
                  </Box>
                  <Text>{brew.description}</Text>
                  <Text color="orchid">${brew.price}</Text>
                  <Box marginTop={2}>
                    <Text bold size="xl">
                      <Button color="blue" text="Add to Cart" />
                    </Text>
                  </Box>
                </Box>
              </Card>
            </Box>
            ))}
          </Box>
        </Box>

        {/* User Cart */}
        <Box marginTop={2} marginLeft={8}>
          <Mask shape="rounded" wash>
            <Box display="flex" direction="column" alignItems="center" padding={2}>
              {/* User Cart Heading */}
              <Heading align="center" size="md">Your Cart</Heading>
              <Text color="gray" italic>
                {cartItems.length} items selected
              </Text>

              {/* Cart Items (will add) */}
              <Box display="flex" alignItems="center" justifyContent="center" direction="column" >
                <Box margin={2}>
                  {cartItems.length === 0 && (
                    <Text color="red">Please select some items</Text>
                  )}
                </Box>
                <Text size="lg">Total: $3.99</Text>
                <Text>
                  <Link to="/checkout">Checkout</Link>
                </Text>
              </Box>
            </Box>
          </Mask>
        </Box>
      </Box>
    );
  }
}

export default Brew;
