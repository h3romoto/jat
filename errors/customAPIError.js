// custom error class, extended by other classes to include status code(s)
class customAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

export default customAPIError;