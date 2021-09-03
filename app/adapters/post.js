import RESTAdapter from '@ember-data/adapter/rest';

export default class IndexAdapter extends RESTAdapter {
  host = 'https://gorest.co.in';
  namespace = 'public/v1/';
  
  pathForType() {
    return 'posts';
  }
}
