/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-26 03:44:29 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-30 02:11:34
 */
import React from 'react';
import { Box, Text, Heading, Image, Button } from 'gestalt';
import { NavLink } from 'react-router-dom';
import { getToken } from '../utils';

const Navbar = () => {
  return getToken() !== null ? <AuthNav /> : <UnAuthNav />;
}

const AuthNav = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Checkout Link */}
    <NavLink activeClassName="active" to="/checkout">
      <Text size="xl" color="white">
        Checkout
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

    {/* Signout Button */}
    <Button
      color="transparent"
      text="sign Out"
      inline
      size="md"
    />
  </Box>
)

const UnAuthNav = () => (
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
      <Text size="xl" color="white">
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
      <Text size="xl" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
)

export default Navbar;
