import React, { useState } from 'react';

import { Box, Textarea, Container, Text, Heading, Center, Button } from '@chakra-ui/react';

const Editor: React.FC = () => {
  const [value, setValue] = useState('');

  console.log(value);

  return (
    <Container width="80vw" ml="10vw" my={5}>
      <Box>
        <Text>Want to check your writing for biases? Use our editor below!</Text>
      </Box>

      <Box my={5}>
        <Textarea
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
          placeholder="Type or paste your text here"
          minHeight="500px"
        />

        <Button float="right" my={5}>
          Check for Bias
        </Button>
      </Box>
    </Container>
  );
};

export default Editor;
