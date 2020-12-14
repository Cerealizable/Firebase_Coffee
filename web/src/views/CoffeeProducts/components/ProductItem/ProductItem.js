import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from 'contexts/CartContext';
import { formatNumber } from 'helpers/utils';

import clsx from 'clsx';
import { 
  makeStyles, 
  // useTheme
 } from '@material-ui/core/styles';
import {
    // useMediaQuery,
    colors,
    Button,
    Card,
    CardMedia,
    CardContent,
    Typography,
  } from '@material-ui/core';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
    root: {},
    card: {
      boxShadow: '0 9px 18px 0 rgba(0, 0, 0, 0.1)',
      borderRadius: theme.spacing(2),
    },
    cardMedia: {
      height: 290,
      padding: theme.spacing(3, 3, 0, 3),
      position: 'relative',
      background: colors.indigo[50],
    },
    cardContent: {
      padding: theme.spacing(3),
    },
    image: {
      objectFit: 'contain',
    },
    fontWeightBold: {
      fontWeight: 'bold',
    },
    hearIconContainer: {
      position: 'absolute',
      top: theme.spacing(3),
      right: theme.spacing(3),
    },
    // ratingContainer: {
    //   margin: theme.spacing(2, 0),
    // },
    // ratingIcon: {
    //   color: colors.yellow[700],
    //   marginRight: theme.spacing(1 / 2),
    // },
    priceCta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }));


const ProductItem = ({product}) => {
    const classes = useStyles();

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    // const theme = useTheme();
    // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    //     defaultMatches: true,
    // });

    return ( 
        <div className={clsx(classes.root)}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia}>
                    <Image
                        src={product.photo + '?v=' + product.id}
                        alt={product.name}
                        className={classes.image}
                        lazyProps={{
                          width: '100%',
                          height: '100%',
                        }}
                    />
                    {/*  keep for possible future implementation of favorites feature */}
                    {/* <div className={classes.hearIconContainer}>
                        <IconAlternate
                        fontIconClass="far fa-heart"
                        size="small"
                        shape="circle"
                        color={colors.yellow}
                        />
                    </div> */}
                </CardMedia>
                
                <CardContent className={classes.cardContent}>
                    <h4>{product.name}</h4>
                    <div className={classes.priceCta}>
                      <Typography
                          color="textPrimary"
                          variant="h6"
                          className={classes.fontWeightBold}
                      >
                        {formatNumber(product.price)} /lb 
                      </Typography>
                    </div>
                    <div className="text-right">
                        <Link  to="/" className="btn btn-link btn-sm mr-2">Details</Link>

                        {
                            isInCart(product) && 
                            <Button 
                                onClick={() => increase(product)}
                                variant="contained" 
                                color="primary"
                            >
                              Add more
                            </Button>
                        }

                        {
                            !isInCart(product) && 
                            <Button 
                                onClick={() => addProduct(product)}
                                variant="contained" 
                                color="primary"
                            >
                              Add to cart
                            </Button>
                        }
                    
                    </div>
                    {/* <Typography
                        color="textPrimary"
                        variant="h6"
                        className={classes.fontWeightBold}
                    >
                        {item.title}
                    </Typography>
                    <div className={classes.priceCta}>
                        <Typography
                        color="primary"
                        variant="h6"
                        className={classes.fontWeightBold}
                        >
                        {item.price}
                        </Typography>
                        <Button variant="contained" color="primary">
                        quick add
                        </Button>
                    </div> */}
                </CardContent>
            </Card>
        </div>
     );
}
 
export default ProductItem;