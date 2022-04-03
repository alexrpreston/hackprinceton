import React, { useState, useEffect } from 'react';

import { Box, Container, Text, HStack, Button, Icon, Heading } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { FiChrome, FiPenTool, FiSearch, FiArrowRight } from 'react-icons/fi';

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
                    Eliminate bias with our Editor <Icon as={FiArrowRight} ml={2} />
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

      <AnimatePresence>
        {isTyping && (
          <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box pb={5}>
              <HStack pb={1}>
                <FiChrome size={20} />
                <Heading size="md">Identify bias in the media</Heading>
              </HStack>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna eu
                congue consectetur, nisi nisl aliquam nunc, eget egestas nisl nisi eu nisi.
              </Text>
            </Box>

            <Box py={5}>
              <HStack pb={1}>
                <FiPenTool size={20} />
                <Heading size="md">Understand hidden biases in your own work</Heading>
              </HStack>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna eu
                congue consectetur, nisi nisl aliquam nunc, eget egestas nisl nisi eu nisi.
              </Text>
            </Box>

            <Box py={5}>
              <HStack pb={1}>
                <FiSearch size={20} />
                <Heading size="md">Search in a bias-conscious manner</Heading>
              </HStack>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna eu
                congue consectetur, nisi nisl aliquam nunc, eget egestas nisl nisi eu nisi.
              </Text>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Home;
