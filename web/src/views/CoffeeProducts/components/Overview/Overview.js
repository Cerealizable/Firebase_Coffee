import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    borderRadius: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingBottom: 0,
    },
  },
  textWhite: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 22,
  },
  image: {
    objectFit: 'contain',
    maxWidth: '90%',
    width: 300,
  },
  imageLeft: {
    objectFit: 'cover',
  },
  copy: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 2),
  },
}));

const Overview = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container data-aos="fade-up">
        <Grid item container alignItems="flex-start" xs={12} md={4}>
          <Image
            src="/images/photos/coffee/true-stone.jpg"
            srcSet="/images/photos/coffee/true-stone.jpg"
            className={clsx(classes.image, classes.imageLeft)}
            lazy={false}
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          className={classes.copy}
        >
          <SectionHeader
            title={
              <span className={clsx(classes.textWhite, classes.title)}>
                More products
              </span>
            }
            subtitle={
              <span className={classes.textWhite}>
                
              </span>
            }
            ctaGroup={[
              <Button variant="contained" color="default" size="large">
                Show more
              </Button>,
            ]}
            align="center"
            disableGutter
          />
        </Grid>
        <Grid item container justify="flex-end" xs={12} md={4}>
          <Image
            src="/images/photos/coffee/true-stone.jpg"
            srcSet="/images/photos/coffee/true-stone.jpg"
            className={classes.image}
            lazy={false}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Overview.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Overview;
