import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
import { IconAlternate } from 'components/molecules';
import clsx from 'clsx';
import { colors } from '@material-ui/core';

import {
  Categories,
  Hero,
  Overview,
  Products,
} from './components';

import {
  categories,
  featuredProducts,
} from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionFeaturedProducts: {
    background: theme.palette.secondary.main,
  },
  reviewSection: {
    background: theme.palette.primary.main,
  },
  alignCenter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const CoffeeProducts = () => {
  const classes = useStyles();

  const scrollTo = id => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Categories data={categories} />
        <div className={clsx(classes.alignCenter)}>
        <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('coffee-products-featured-products')}
            data-aos="fade-up"
          />
      </div>
      </Section>
      <Section>
        <Products id='coffee-products-featured-products' data={featuredProducts} />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Overview />
      </Section>
    </div>
  );
};

export default CoffeeProducts;
