import React, { useState, useEffect } from 'react';

import { Box, Container, Text, Center, HStack, Button, Spacer, Icon } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import Typist from '../components/Typist';

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTyping(true);
    }, 1000);
  }, []);

  return (
    <Container>
      <Center width="100%" height="300px">
        <Box width="100%">
          <Box as="h1" fontSize="6xl" fontWeight="bold">
            <Typist text={'Right with Sway.'} />
          </Box>

          {isTyping && (
            <Box my={3} width="100%">
              <HStack spacing={4}>
                <Button as={Link} to="/editor">
                  Check out the Editor <Icon as={FiArrowRight} ml={2} />
                </Button>
                <Button colorScheme="blue">
                  Get the Extension <Icon as={FiArrowRight} ml={2} />
                </Button>
              </HStack>
            </Box>
          )}
        </Box>
      </Center>
      <Box height="1000px" bgColor="gray">
        xyz
      </Box>
    </Container>
  );
};

export default Home;
