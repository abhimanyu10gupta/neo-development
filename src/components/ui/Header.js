import React, { Fragment, useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled } from '@mui/system';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const MyDiv = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: '3em',
}));

const Image = styled('img')({
  height: '7em',
});

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: '25px',
  //   color: 'white',
}));

const Header = () => {
  const [value, setValue] = useState('home');

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Image alt='company logo' src={logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              textColor='inherit'
              sx={{ marginLeft: 'auto' }}
            >
              <StyledTab value='home' label='Home' />
              <StyledTab label='Services' />
              <StyledTab label='The Revolution' />
              <StyledTab label='About us' />
              <StyledTab label='Contact Us' />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              sx={(theme) => ({
                ...theme.typography.estimate,
                borderRadius: '50px',
                marginLeft: '50px',
                marginRight: '25px',
                height: '45px',
              })}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <MyDiv />
    </Fragment>
  );
};

export default Header;
