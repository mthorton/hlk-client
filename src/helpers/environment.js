let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case 'hook-line-and-keeper-app.heroku.com':
        APIURL = 'https://hlk-server.herokuapp.com'
}

export default APIURL