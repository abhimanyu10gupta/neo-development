import React, { Fragment, useState, useEffect } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button, Box } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

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
  height: '8em',
});

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: '25px',
}));

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === '/estimate' && value !== 5) {
      setValue(5);
    }
  }, [value]);

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Button
              sx={{ padding: 0 }}
              component={Link}
              to='/'
              onClick={() => setValue(0)}
              disableRipple
            >
              <Image alt='company logo' src={logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor='inherit'
              sx={{ marginLeft: 'auto' }}
            >
              <StyledTab component={Link} to='/' label='Home' />
              <StyledTab component={Link} to='/services' label='Services' />
              <StyledTab
                component={Link}
                to='/revolution'
                label='The Revolution'
              />
              <StyledTab component={Link} to='/about' label='About us' />
              <StyledTab component={Link} to='/contact' label='Contact Us' />
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
