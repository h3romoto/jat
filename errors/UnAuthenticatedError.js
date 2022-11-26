import { StatusCodes } from "http-status-codes";
import customAPIError from "./customAPIError.js"

// extends customAPI, adds 300 status code
class UnAuthenticatedError extends customAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }  
}

export default UnAuthenticatedError;