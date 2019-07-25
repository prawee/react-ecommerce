/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-26 03:44:29 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-26 04:17:57
 */
import React from 'react';
import { Box, Text, Heading, Image } from 'gestalt';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Sign In Link */}
    <NavLink activeClassName="active" to="/signin">
      <Text size="x1" color="white">
        Sign In
      </Text>
    </NavLink>

    {/* Title and Logo */}
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="MyShop Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        <Heading size="xs" color="orange">
          MyShop
        </Heading>
      </Box>
    </NavLink>

    {/* Sign Up Link */}
    <NavLink activeClassName="active" to="/signup">
      <Text size="x1" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
)

export default Navbar;
