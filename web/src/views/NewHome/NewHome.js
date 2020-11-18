import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { IconAlternate } from 'components/molecules';
import { Section, Parallax } from 'components/organisms';
import {
  Welcome,
  Arabica,
  Process,
  Robusta,
  Reviews,
  Contact,
  Partners,
  Features,
  Liberica
} from './components';

import { 
  reviews,
  partners,
  services, 
  process, 
  // reviews 
} from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  fullHeight: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disablePaddingTop: {
    paddingTop: 0,
  },
  scrollIcon: {
    background: 'transparent !important',
    border: `2px solid ${colors.amber[500]}`,
    cursor: 'pointer',
  },
  scrollTopIcon: {
    margin: '0 auto',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(12),
    },
  },
  arabicaSection: {
    backgroundColor: '#0000008a',
  },
  robustaSection: {
    backgroundColor: '#0000008a',
  },
  libericaSection: {
    backgroundColor: '#0000008a',
  },
}));

const NewHome = () => {
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
      <div className={classes.fullHeight}>
        <Section className={classes.disablePaddingTop}>
          <Welcome />
        </Section>
        <IconAlternate
          shape="circle"
          fontIconClass="fas fa-chevron-down"
          color={colors.amber}
          size="small"
          className={classes.scrollIcon}
          onClick={() => scrollTo('home-robusta')}
        />
      </div>
      <Partners data={partners} />
      <Parallax
        backgroundImage="/images/photos/coffee/coffee-parallax-cup.jpg"
        id="home-robusta"
      >
        <div className={clsx(classes.fullHeight, classes.robustaSection)}>
          <Section>
            <Robusta />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('home-process')}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <div className={classes.fullHeight} id="home-process">
        <Section>
          <Process data={process} />
        </Section>
        <IconAlternate
          shape="circle"
          fontIconClass="fas fa-chevron-down"
          color={colors.amber}
          size="small"
          className={classes.scrollIcon}
          onClick={() => scrollTo('home-arabica')}
          data-aos="fade-up"
        />
      </div>
      <Parallax
        backgroundImage="/images/photos/coffee/coffee-parallax-splash.jpg"
        id="home-arabica"
      >
        <div className={clsx(classes.fullHeight, classes.arabicaSection)}>
          <Section>
            <Arabica />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('home-features')}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <div className={classes.fullHeight} id="home-features">
        <Section>
          <Features data={services} />
        </Section>
        <IconAlternate
          shape="circle"
          fontIconClass="fas fa-chevron-down"
          color={colors.amber}
          size="small"
          className={classes.scrollIcon}
          onClick={() => scrollTo('home-liberica')}
          data-aos="fade-up"
        />
      </div>
      <Parallax
        backgroundImage="/images/photos/coffee/coffee-parallax-pour.jpg"
        id="home-liberica"
      >
        <div className={clsx(classes.fullHeight, classes.robustaSection)}>
          <Section>
            <Liberica />
          </Section>
          <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('home-reviews')}
            data-aos="fade-up"
          />
        </div>
      </Parallax>
      <Section id="home-reviews">
        <Reviews data={reviews} />
        <IconAlternate
            shape="circle"
            fontIconClass="fas fa-chevron-down"
            color={colors.amber}
            size="small"
            className={classes.scrollIcon}
            onClick={() => scrollTo('home-contact')}
            data-aos="fade-up"
          />
      </Section>
      <Divider />
      <Section id="home-contact">
        <Contact />
      </Section>
      <IconAlternate
        shape="circle"
        fontIconClass="fas fa-chevron-up"
        color={colors.amber}
        size="small"
        className={clsx(classes.scrollIcon, classes.scrollTopIcon)}
        onClick={() => scrollTo('home-robusta')}
        data-aos="fade-up"
      />
      <Divider />
    </div>
  );
};

export default NewHome;