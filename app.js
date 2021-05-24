import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Import bootstrap
import 'bootstrap';

// Import your app functionality
import './home'

// Create and bootstrap application
const requires = [
  'ui.router',
  'home'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);