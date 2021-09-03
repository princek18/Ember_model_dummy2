import Model from '@ember-data/model';
import { attr, belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @belongsTo("user") user_id;
  @attr title;
  @attr body;
}
