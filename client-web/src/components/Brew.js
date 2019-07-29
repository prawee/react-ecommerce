/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-29 14:27:32 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-29 17:12:59
 */
import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import { Box, Heading, Text, Image, Card, Button } from 'gestalt';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class Brew extends React.Component {
  state = {
    brews: [],
    brand: ''
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
    const { brand, brews } = this.state;

    return (
      <Box
        marginTop={4}
        display="flex"
        justifyContent="center"
        alignItems="start"
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
      </Box>
    );
  }
}

export default Brew;
