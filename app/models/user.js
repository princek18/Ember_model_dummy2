import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class IndexModel extends Model {
  @attr name;
  @attr email;
  @attr gender;
  @attr status;
}
