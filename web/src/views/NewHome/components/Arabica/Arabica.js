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

const Arabica = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>Arabica</span>}
        titleVariant="h1"
        subtitle={<span className={classes.textWhite}>The respectable flavor</span>}
        ctaGroup={[
          <Button variant="outlined" color="secondary" size="large">
            See Arabica products
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Arabica.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Arabica;
