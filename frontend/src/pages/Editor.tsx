import React, { useState } from 'react';

import { Box, Input } from '@chakra-ui/react';

const Editor: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <Box>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </Box>
  );
};

export default Editor;
