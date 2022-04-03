import React, { useState } from 'react';

import {
  Box,
  Input,
  Button,
  Container,
  HStack,
  VStack,
  Text,
  Spinner,
  Center,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import axios from 'axios';

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  biasLevel: string;
}

const defaultSearchResults: SearchResult[] = [
  {
    title: 'This is a test title',
    url: 'test',
    snippet:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    biasLevel: 'low bias',
  },
  {
    title: 'This is a test title',
    url: 'test',
    snippet:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    biasLevel: 'low bias',
  },
  {
    title: 'This is a test title',
    url: 'test',
    snippet:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    biasLevel: 'low bias',
  },
  {
    title: 'This is a test title',
    url: 'test',
    snippet:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    biasLevel: 'low bias',
  },
  {
    title: 'This is a test title',
    url: 'test',
    snippet:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    biasLevel: 'low bias',
  },
];

const Search = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = process.env.API_URL || 'https://gcp-api-gikn36sjla-uc.a.run.app';
  // const baseUrl = 'http://localhost';

  const handleSubmit = (e?: React.SyntheticEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setIsLoading(true);

    axios
      .post(`${baseUrl}/api/v1/search?query=${search}`)
      .then((res) => {
        console.log(res);
        const order = ['Not biased', 'Somewhat biased', 'Extremely biased'];
        setResults(
          res.data?.sort(
            (a: SearchResult, b: SearchResult) =>
              order.indexOf(a.biasLevel) - order.indexOf(b.biasLevel),
          ),
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    // fetch(`/api/search?q=${search}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setResults(data);
    //   });
  };

  return (
    <Container>
      <Box my={10}>
        <form onSubmit={handleSubmit}>
          <HStack>
            <Input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit" onClick={() => handleSubmit()}>
              Search
            </Button>
          </HStack>
        </form>
        {!isLoading && results.length === 0 && (
          <Center height="300px">
            <Text>Enter a search term to get started!</Text>
          </Center>
        )}
        {isLoading && (
          <Center width="100%" height="300px">
            <Spinner size="xl" />
          </Center>
        )}
        {!isLoading && (
          <VStack spacing={5} my={5}>
            {results.map((result) => (
              <Box width="100%" border="1px solid gray" p={2}>
                <a href={result.url} target="_blank">
                  <Text color="rgb(49, 130, 206)" fontSize="lg" fontWeight="bold">
                    {result.title}
                  </Text>
                </a>
                <Text fontSize="md">{result.biasLevel}</Text>
                <Box>
                  {result.snippet.substring(0, 64)} {result.snippet.length > 64 && '...'}
                </Box>
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    </Container>
  );
};

export default Search;
