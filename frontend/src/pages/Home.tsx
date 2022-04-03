import React from 'react';

import { Box, Container, Text, Center } from '@chakra-ui/react';

import Typist from '../components/Typist';

const Home = () => (
  <Container>
    <Center width="100%" height="300px">
      <Box as="h1" fontSize="6xl" fontWeight="bold">
        <Typist text={'Right with Sway.'} />
      </Box>
    </Center>
    <Box height="1000px" bgColor="red">
      xyz
    </Box>
  </Container>
);

export default Home;
