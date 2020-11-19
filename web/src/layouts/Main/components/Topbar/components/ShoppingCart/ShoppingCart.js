import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Button,
  Divider,
  List,
  ListItem,
} from '@material-ui/core';

import ListItemText from '@material-ui/core/ListItemText';

import CountUpNumber from 'components/molecules/CountUpNumber';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  }
});

const ShoppingCart = props => {
  const {data} = props;

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  let sum = data.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {data.map((item, index) => (
          <ListItem button key={item.title}>
            <ListItemText primary={item.title} />
            <ListItemText primary={item.quantity} />
            $<ListItemText primary={item.price} /> /lb
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem className={classes.listItem}>
          <CountUpNumber end={sum} prefix="$" label="Total" />
      </ListItem>
      <Divider />
      <ListItem className={classes.listItem}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          component="a"
          target="blank"
          className={classes.listItemButton}
        >
          Purchase
        </Button>
      </ListItem>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
                size="large"
                variant="contained"
                color="primary"
                className={classes.listItemButton}
                onClick={toggleDrawer(anchor, true)}
              >
            <i class="fas fa-shopping-cart"></i>
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ShoppingCart;