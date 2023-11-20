const UserService = require('../services/UserService');

class UserController {
  static async createUser(req, res, next) {
    try {
      const { fullName, email, password } = req.body;

      // Create a new user
      const user = await UserService.createUser(fullName, email, password);

      res.status(201).json({ message: "User created successfully", data: user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await UserService.getUsers();

      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }

  static async updateUser(req, res) {
    try {
      const { email, fullName, password } = req.body;

      // Update user details
      const user = await UserService.updateUser(email, fullName, password);

      res.json({ message: "User updated successfully", data: user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { email } = req.body;

      // Delete user
      await UserService.deleteUser(email);

      res.json({ message: "User deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;

    try {
      console.log(email, password);
      const result = await UserService.login(email, password);
      console.log(result,"result")
      if(!result){
        // console.log("dfghjm");
        res.status(400).json({ message: "Invalid email" });
      }else{
        // console.log("12345");
        res.status(200).json({ message: "User logged in successfully" });
      }
    } catch (err) {
      res.status(400).json({ message: "Invalid email or password" });
      next(err)
    }
  }
}

module.exports = UserController;
