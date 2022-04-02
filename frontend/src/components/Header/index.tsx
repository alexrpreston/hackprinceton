import React from 'react';

import { AppBar, Typography, Toolbar } from '@mui/material';

interface Props {}

const Header: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">Right with Sway</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
