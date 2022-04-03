import React, { useState, useEffect } from 'react';

import { Box, Container, Text, HStack, Button, Icon, Heading } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { FiChrome, FiPenTool, FiSearch, FiArrowRight } from 'react-icons/fi';

import { motion, AnimatePresence } from 'framer-motion';

import Typist from '../components/Typist';

const MotionBox = motion(Box);

const Home: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTyping(true);
    }, 2000);
  }, []);

  return (
    <Container>
      <Box width="100%">
        <Box width="100%">
          <Box as="h1" fontSize="6xl" fontWeight="bold">
            <Typist text={'Sway.'} />
          </Box>

          <AnimatePresence>
            {isTyping && (
              <MotionBox width="100%" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Text mb={5}>
                  Fighting bias in the media by raising awareness and providing a platform for
                  people to eliminate bias in their writing.
                </Text>
                {/* <HStack spacing={4}> */}
                {/*   <Button as={Link} to="/editor"> */}
                {/*     Eliminate bias with our Editor <Icon as={FiArrowRight} ml={2} /> */}
                {/*   </Button> */}
                {/*   <Button colorScheme="blue"> */}
                {/*     Get the Extension <Icon as={FiArrowRight} ml={2} /> */}
                {/*   </Button> */}
                {/* </HStack> */}

                <hr />
              </MotionBox>
            )}
          </AnimatePresence>
        </Box>
      </Box>

      <AnimatePresence>
        {isTyping && (
          <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} my={5}>
            <Box pb={5}>
              <HStack pb={1}>
                <FiChrome size={20} />
                <Heading size="md">Identify bias in the media</Heading>
              </HStack>
              <Text>
                Sway helps identify bias in the media by providing a simple chrome extension. The
                extension provides a degree of bias and the cause of the bias (if any exists) for
                any website, all with the click of a button.
              </Text>
              <Button size="sm" mt={2}>
                Chrome Extension <Icon as={FiArrowRight} ml={2} />
              </Button>
            </Box>

            <Box py={5}>
              <HStack pb={1}>
                <FiPenTool size={20} />
                <Heading size="md">Understand hidden biases in your own work</Heading>
              </HStack>
              <Text>
                Sway's writing editor helps users write without bias by identifying and summarizing
                potential areas of bias in their text. This is especially useful for implicit
                sources of bias.
              </Text>
              <Button as={Link} to="/editor" size="sm" mt={2}>
                Online Editor <Icon as={FiArrowRight} ml={2} />
              </Button>
            </Box>

            <Box py={5}>
              <HStack pb={1}>
                <FiSearch size={20} />
                <Heading size="md">Search in a bias-conscious manner</Heading>
              </HStack>
              <Text>
                Sway Search provides an interface to rank search results based on the degree of bias
                of a website's content. Get the search quality of Google with the trustworthiness of
                Sway.
              </Text>
              <Button as={Link} size="sm" mt={2} to="/search">
                Search <Icon as={FiArrowRight} ml={2} />
              </Button>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Home;
