export default class ApiError extends Error {
  constructor(errors) {
    super(errors);
    let { message } = errors;
    if (errors.response && errors.response.data && errors.response.data.error) {
      message = errors.response.data.error;
    }
    const errorMessage = Array.isArray(errors)
      ? errors.map((error) => error && error.message).join(', ')
      : message;
    this.response = errors.response;
    this.errors = Array.isArray(errors) ? errors : [];
    this.message = errorMessage;
  }
}
