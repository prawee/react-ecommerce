/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-29 14:27:32 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-29 14:39:13
 */
import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class Brew extends React.Component {
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
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <div>Brew</div>
    );
  }
}

export default Brew;
