import React, { useState, useEffect } from 'react';

import { Box, Text, Center, HStack, Flex, Spacer } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const AppContainer: React.FC<Props> = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);

  return (
    <Box>
      {showNav && (
        <HStack
          w="100vw"
          bgColor="white"
          borderBottom="1px solid gray"
          px={3}
          py={1}
          top={0}
          left={0}
          position="fixed"
        >
          <Box w={200} />

          <Spacer />

          <Link to="/">
            <Text>
              Right with <i>Sway</i>
            </Text>
          </Link>

          <Spacer />

          <Box float="right" w={200} textAlign="right">
            <Link to="/editor">
              <Text>Check out our Editor!</Text>
            </Link>
          </Box>
        </HStack>
      )}

      <Box>{children}</Box>
    </Box>
  );
};

export default AppContainer;
