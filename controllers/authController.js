const register = (req, res) => {
  res.send("register user")
}

const login = (req, res) => {
  res.send("user login")
  
}

const updateUser = (req, res) => {
  res.send("update user")
}

export {register, login, updateUser}