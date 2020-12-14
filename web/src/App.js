import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';


import theme from './theme';
import Routes from './Routes';

import 'swiper/swiper.scss';


// allows for a user created history to be stored in props
const browserHistory = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
  </ThemeProvider>
  );
}

export default App;
