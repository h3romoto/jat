import { UnAuthenticatedError } from "../errors/index.js";

// UnAuthenticatedError is the same as UnAuthorized
const checkPermissions = (requestUser, resourceUserId) => {
    // if (requestUser.role === 'admin') return
    if (requestUser.userId === resourceUserId.toString()) return;
    throw new CustomError.UnAuthenticatedError(
      'Not authorized to access this route'
    );
  };

export default checkPermissions