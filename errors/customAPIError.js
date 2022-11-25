// custom error class, extended to include status code(s)
class customAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

export default customAPIError;