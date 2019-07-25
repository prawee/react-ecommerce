/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-26 03:44:29 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-26 03:53:28
 */
import React from 'react';
import { Box, Text } from 'gestalt';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <Box
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

    {/* Sign Up Link */}
    <NavLink to="/signup">
      <Text size="x1" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
)

export default Navbar;
