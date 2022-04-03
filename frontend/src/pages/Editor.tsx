import React, { useState } from 'react';

import {
  Box,
  Textarea,
  Spacer,
  Text,
  Heading,
  Center,
  Button,
  Flex,
  HStack,
} from '@chakra-ui/react';

import axios from 'axios';

import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';

const Editor: React.FC = () => {
  const [value, setValue] = useState('');
  const [updated, setUpdated] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    setIsLoading(true);
    axios
      .post(`https://hackprinceton-hlcv3.ondigitalocean.app/remove-bias`, value)
      .then((res) => {
        setUpdated(res.data?.choices[0].text);
        console.log(res);
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
          {updated && (
            <>
              <Spacer />
              <Button onClick={onClick} float="right" isLoading={isLoading}>
                Retry
              </Button>
              <Button onClick={() => setUpdated('')} float="right">
                Reset
              </Button>
            </>
          )}
        </HStack>
      </Box>

      <Flex>
        {!updated && (
          <Box my={5} flex="1">
            <Textarea
              width="100%"
              value={value}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
              placeholder="Type or paste your text here"
              minHeight="500px"
            />

            <Button
              float="right"
              my={5}
              isLoading={isLoading}
              disabled={isLoading}
              onClick={onClick}
            >
              Check for Bias
            </Button>
          </Box>
        )}

        {updated && (
          <Box my={5} flex="1">
            <Box my={5}>
              <ReactDiffViewer
                oldValue={value}
                newValue={updated}
                splitView={true}
                hideLineNumbers={true}
                compareMethod={DiffMethod.WORDS}
              />
            </Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Editor;
