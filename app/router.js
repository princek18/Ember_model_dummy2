import EmberRouter from '@ember/routing/router';
import config from 'model-exp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('/');
  this.route('posts');
  this.route('employee', { path: 'employee/:id' });
});
