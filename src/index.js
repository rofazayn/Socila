import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import FontFaceObserver from 'fontfaceobserver';

// const montserratFont = new FontFaceObserver('Montserrat');
// const openSansFont = new FontFaceObserver('Open Sans');

const rootElement = <App />;
const rootDiv = document.getElementById('root');

// Promise.all([montserratFont.load(), openSansFont.load()]).then(() =>
//   ReactDOM.render(rootElement, rootDiv)
// );

ReactDOM.render(rootElement, rootDiv);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
