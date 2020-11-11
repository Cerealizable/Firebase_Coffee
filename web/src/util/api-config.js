let apiPath;
//const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

// if(hostname === 'realsite.com') {
//   backendHost = 'https://api.realsite.com';
// } else if(hostname === 'staging.realsite.com') {
//   backendHost = 'https://staging.api.realsite.com';
// } else if(/^qa/.test(hostname)) {
//   backendHost = `https://api.${hostname}`;
// } else {
//   backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:8080';
// }

//export const API_ROOT = `${backendHost}/api/${apiVersion}`;

if(process.env.REACT_APP_SERVICE_API_URL) {
  apiPath = process.env.REACT_APP_SERVICE_API_URL;
} else if (hostname === 'localhost') {
  apiPath = 'http://localhost:5000/cereal-coffee/us-central1/api';
} else  {
  apiPath = 'https://us-central1-cereal-coffee.cloudfunctions.net/api';
}


export const API_PATH = apiPath;