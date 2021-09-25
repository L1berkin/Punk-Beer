import Api from '../core/Api';

export default class GetBeer extends Api {
  defaultParameters = {};

  endpoint = '/beers';

  send(data) {
    return this.get(data).then((res) => res.data);
  }
}
