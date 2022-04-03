import React, { useState } from 'react';

import { Box, Input, Button } from '@chakra-ui/react';

const Search = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults([]);
    fetch(`/api/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
      <Box>
        {results.map((result) => (
          <Box>{result.title}</Box>
        ))}
      </Box>
    </Box>
  );
};

export default Search;
