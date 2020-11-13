import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const Robusta = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>ROBUSTA</span>}
        titleVariant="h1"
        subtitle={
          <span className={classes.textWhite}>
            For a more robust feeling
          </span>
        }
        ctaGroup={[
          <Button variant="outlined" color="secondary" size="large">
            See Robusta products
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Robusta.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Robusta;
