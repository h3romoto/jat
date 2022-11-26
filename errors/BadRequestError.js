import { StatusCodes } from "http-status-codes";
import customAPIError from "./customAPIError.js"

// extends customAPI, adds 300 status code
class BadRequestError extends customAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }  
}

export default BadRequestError