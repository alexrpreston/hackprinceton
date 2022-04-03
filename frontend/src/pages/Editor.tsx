import React, { useState } from 'react';

import { Box, Textarea, Spacer, Text, Icon, Center, Button, Flex, HStack } from '@chakra-ui/react';

import axios from 'axios';

import { FiAlertCircle, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

const Editor: React.FC = () => {
  const [value, setValue] = useState('');
  const [bias, setBias] = useState('');
  const [biasLevel, setBiasLevel] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  console.log(process.env);

  const onClick = () => {
    setIsLoading(true);

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/classify-bias-level`, value)
      .then((res) => {
        console.log(res);
        setBiasLevel(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/summarize-bias`, value)
      .then((res) => {
        console.log(res);
        setBias(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <Box py={5} px={20}>
      <Box>
        <HStack>
          <Text>Want to check your writing for biases? Use our editor below!</Text>
        </HStack>
      </Box>

      {bias && (biasLevel === 'Extremely biased' || biasLevel === 'Somewhat biased') && (
        <HStack py={5} pb={2}>
          <Icon
            as={biasLevel === 'Extremely biased' ? FiAlertCircle : FiAlertTriangle}
            color={biasLevel === 'Extremely biased' ? 'red.500' : 'orange.500'}
            mx={2}
          />
          <Text fontWeight="bold">{bias}</Text>
        </HStack>
      )}

      {biasLevel === 'not_biased' && (
        <HStack py={5} pb={2}>
          <Icon as={FiCheckCircle} color="green.500" mx={2} />
          <Text fontWeight="bold">No major biases found.</Text>
        </HStack>
      )}

      <Flex>
        <Box my={5} flex="1">
          <Textarea
            width="100%"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
            placeholder="Type or paste your text here"
            minHeight="500px"
          />

          <Button float="right" my={5} isLoading={isLoading} disabled={isLoading} onClick={onClick}>
            Check for Bias
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Editor;
