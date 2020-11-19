import React  from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  colors,
} from '@material-ui/core';

import {
  ShoppingCart,
} from './components';

import { cartItems } from './data';

import { Image } from 'components/atoms/index';



const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: theme.palette.white,
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  navLink: {
    fontWeight: 300,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  navLinkText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
}));

const Topbar = props => {
  const { className, onSidebarOpen, pages, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      position="relative"
      className={clsx(classes.root, className)}
    >
      <Toolbar disableGutters className={classes.toolbar}>
        <div className={classes.logoContainer}>
          <a href="/" title="thefront">
            <Image
              className={classes.logoImage}
              src="/images/logos/cerealLogo.png"
              alt="thefront"
              lazy={false}
            />
          </a>
        </div>
        <div className={classes.flexGrow} />
        <Hidden smDown>
          <List className={classes.navigationContainer}>
            <ListItem className={classes.listItem}>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.navLinkText}
                component="a"
                target="blank"
              >
                Sign in
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.navLinkText}
                component="a"
                target="blank"
              >
                Sign Up
              </Typography>
            </ListItem>
            <ListItem className={classes.navLink}>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.navLinkText}
                component="a"
                target="blank"
              >
                Products
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ShoppingCart data={cartItems} />
            </ListItem>
          </List>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            onClick={onSidebarOpen}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
};

export default Topbar;
