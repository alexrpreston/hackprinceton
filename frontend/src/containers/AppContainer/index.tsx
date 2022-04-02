import React from 'react';

import { Box, Text, Center, HStack, Flex, Spacer } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const AppContainer: React.FC<Props> = ({ children }) => (
  <Box>
    <HStack w="100vw" bgColor="white" borderBottom="1px solid gray" px={3} py={1}>
      <Box w={200} />

      <Spacer />

      <Link to="/">
        <HStack spacing={1.5}>
          <Text>Right with</Text>
          <Text fontStyle="italic">Sway</Text>
        </HStack>
      </Link>

      <Spacer />

      <Box float="right" w={200} textAlign="right">
        <Link to="/editor">
          <Text>Check out our Editor!</Text>
        </Link>
      </Box>
    </HStack>

    <Box>{children}</Box>
  </Box>
);

export default AppContainer;
