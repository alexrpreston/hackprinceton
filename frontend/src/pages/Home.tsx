import React from 'react';

import { Box, Container, Text, Center, HStack, Button, Spacer } from '@chakra-ui/react';

import { FiRightArrow } from 'react-icons/fi';

import Typist from '../components/Typist';

const Home = () => (
  <Container>
    <Center width="100%" height="300px">
      <Box>
        <Box as="h1" fontSize="6xl" fontWeight="bold">
          <Typist text={'Right with Sway.'} />
        </Box>

        <Box>
          <HStack>
            <Spacer />
            <Button>
              Check out the Editor <FiRightArrow />
            </Button>
          </HStack>
        </Box>
      </Box>
    </Center>
    <Box height="1000px" bgColor="gray">
      xyz
    </Box>
  </Container>
);

export default Home;
