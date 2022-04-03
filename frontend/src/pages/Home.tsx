import React, { useState, useEffect } from 'react';

import { Box, Container, Text, Center, HStack, Button, Spacer, Icon } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import { motion, AnimatePresence } from 'framer-motion';

import Typist from '../components/Typist';

const MotionBox = motion(Box);

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTyping(true);
    }, 3000);
  }, []);

  return (
    <Container>
      <Box width="100%" minHeight="250px">
        <Box width="100%">
          <Box as="h1" fontSize="6xl" fontWeight="bold">
            <Typist text={'Right with Sway.'} />
          </Box>

          <AnimatePresence>
            {isTyping && (
              <MotionBox width="100%" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Text mb={5}>
                  Fighting bias in the media by raising awareness and providing a platform for
                  people to eliminate bias in their writing.
                </Text>
                <HStack spacing={4}>
                  <Button as={Link} to="/editor">
                    Check out the Editor <Icon as={FiArrowRight} ml={2} />
                  </Button>
                  <Button colorScheme="blue">
                    Get the Extension <Icon as={FiArrowRight} ml={2} />
                  </Button>
                </HStack>
              </MotionBox>
            )}
          </AnimatePresence>
        </Box>
      </Box>
      <Box height="1000px" bgColor="gray">
        xyz
      </Box>
    </Container>
  );
};

export default Home;
