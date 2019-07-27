import React from 'react';
import { Container, Box, Heading } from 'gestalt';
import './App.css';

function App() {
  return (
    <Container>
      {/* brands Section */}
      <Box
        display="flex"
        justifyContent="center"
        marginBottom={2}
      >
        {/* Brands Header */}
        <Heading color="midnight" size="md">
          Brew Brands
        </Heading>
      </Box>
    </Container>
  );
}

export default App;
