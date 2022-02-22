import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
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

// const useStyles = makeStyles((theme) => ({
//   toolbarMargin: {
//     ...theme.mixins.Toolbar,
//   },
// }));

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
}));

const Header = () => {
  //   const classes = useStyles();

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Image alt='company logo' src={logo} />
            <Tabs sx={{ marginLeft: 'auto' }}>
              <StyledTab label='Home' />
              <StyledTab label='Services' />
              <StyledTab label='The Revolution' />
              <StyledTab label='About us' />
              <StyledTab label='Contact Us' />
            </Tabs>
            {/* <Typography variant='h3'>Neo Development</Typography> */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <MyDiv />
    </Fragment>
  );
};

export default Header;
