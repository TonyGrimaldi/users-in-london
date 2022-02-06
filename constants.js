export const APP_NAME = 'USERS IN LONDON';

export const API_URL = 'https://bpdts-test-app.herokuapp.com';

export const LONDON_COORDINATES = {
  lat: 51.509865,
  lon: -0.118092,
};

export const WELCOME_MSG =
  'Welcome, this API returns users listed as living in London or users whose current coordinates are within 50 miles from London.\nTo get users listed as living in London use the\x1b[36m /listed\x1b[0m endpoint e.g.\x1b[36m curl http://localhost:3000/listed \x1b[0m\nTo get users whose current coordinates are within a 50 miles radius from London use the\x1b[36m /gps50miles\x1b[0m endpoint e.g.\x1b[36m curl http://localhost:3000/gps50miles\x1b[0m';
