import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import Login from './components/Login';
import Signup from './components/Signup';
// import Swiper from 'swiper';

import theme from './theme';
import Routes from './Routes';

import 'swiper/swiper.scss';


// allows for a user created history to be stored in props
const browserHistory = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Routes />
      </Router>
  </ThemeProvider>
  );
}

export default App;
