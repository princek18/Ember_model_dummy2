import RESTSerializer from '@ember-data/serializer/rest';

export default RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const { data } = payload;
    payload = { post: data };
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});
