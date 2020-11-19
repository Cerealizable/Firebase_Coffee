import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Welcome = props => {
  const { className, gotoProducts, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx('jarallax', classes.root, className)} {...rest}>
      <SectionHeader
        title="We craft savory coffee."
        titleVariant="h2"
        subtitle="We carefully plant, tenderly harvest and diligently roast our beans with a strong consistency in quality."
        ctaGroup={[
          <Button variant="contained" color="primary" size="large" onClick={gotoProducts}>
            See Coffee
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Welcome.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Welcome;
