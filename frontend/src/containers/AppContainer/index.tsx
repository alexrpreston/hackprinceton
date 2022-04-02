import React from 'react';

import { Box, Text, Center, HStack } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

const AppContainer: React.FC<Props> = ({ children }) => (
  <Box>
    <Box w="100vw" bgColor="white" borderBottom="1px solid gray">
      <Center>
        <HStack spacing={1.5}>
          <Text>Right with</Text>
          <Text fontStyle="italic">Sway</Text>
        </HStack>
      </Center>
    </Box>
    <Box>{children}</Box>
  </Box>
);

export default AppContainer;
