import Route from '@ember/routing/route';

export default class EmployeeRoute extends Route {
    model(params) {
        const k = {
            posts: this.store.query('post', { user_id: params.id }),
            user: this.store.findRecord('user', params.id)
        };
        return k;
    }
}
