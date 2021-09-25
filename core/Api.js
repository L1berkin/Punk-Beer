import ApiError from './ApiError';

export default class Api {
  getUrlParams = (params) => {
    let result = '';
    const keys = Object.keys(params);
    if (keys.length) {
      result += '?';
      keys.forEach((key, idx) => {
        result += `${key}=${params[key]}`;
        if (keys.length !== idx + 1) result += '&';
      });
    }
    return result;
  }

  transformResponse = (response) => {
    if (response.data && response.data.success === false) {
      throw new ApiError([
        {
          message: response.data.message || 'Unknown error',
        },
      ]);
    }
    return response;
  }

  transformError = (error) => {
    throw new ApiError(error);
  }

  async get(parameters) {
    return this.axios
      .get(this.endpoint + this.getUrlParams(parameters))
      .then(this.transformResponse)
      .catch(this.transformError);
  }
}
