/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-26 03:44:29 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-26 03:58:21
 */
import React from 'react';
import { Box, Text, Heading } from 'gestalt';
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
    <NavLink to="/signin">
      <Text size="x1" color="white">
        Sign In
      </Text>
    </NavLink>

    {/* Title and Logo */}
    <NavLink to="/">
      <Heading size="xs" color="orange">
        MyShop
      </Heading>
    </NavLink>

    {/* Sign Up Link */}
    <NavLink to="/signup">
      <Text size="x1" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
)

export default Navbar;
