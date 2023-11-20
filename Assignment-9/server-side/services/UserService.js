const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "hsdfgdhdljsiuyiturf12345678789orjsvscdrtyuynbvcdcwd25634756";

class UserService {
  static async createUser(fullName, email, password) {
    try {
      //to encrypt password
      const encryptedpassword = await bcrypt.hash(password, 10);

      // Check if email or password is invalid
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        throw new Error("Invalid email address");
      }

      if (
        !password.match(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/
        )
      ) {
        throw new Error(
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character, and have a minimum length of 8 characters"
        );
      }

      // Create a new user
      const user = new User({
        fullName,
        email,
        password: encryptedpassword,
      });

      await user.save();

      return { message: "User created successfully" };
    } catch (err) {
      console.error(err);
      throw new Error("Server error");
    }
  }

  static async getUsers() {
    try {
      const users = await User.find({}, "fullName email password");
      return users;
    } catch (err) {
      console.error(err);
      throw new Error("Server error");
    }
  }

  static async updateUser(email, fullName, password) {
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }

      // Check if full name or password is invalid
      if (fullName && (fullName.length < 3 || fullName.length > 50)) {
        throw new Error("Full name must be between 3 and 10 characters");
      }

      if (
        password &&
        !password.match(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/
        )
      ) {
        throw new Error(
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character, and have a minimum length of 8 characters"
        );
      }

      // Update user details
      user.fullName = fullName || user.fullName;
      user.password = password
        ? await bcrypt.hash(password, 10)
        : user.password;

      await user.save();

      return { message: "User updated successfully" };
    } catch (err) {
      console.error(err);
      throw new Error("Server error");
    }
  }

  static async deleteUser(email) {
    try {
      // Check if user exists
      const user = await User.findOneAndDelete({ email });
      if (!user) {
        throw new Error("User not found");
      }

      return { message: "User deleted successfully" };
    } catch (err) {
      console.error(err);
      throw new Error("Server error");
    }
  }

  static async login(email, password) {
    try {
      const user = await User.findOne({ email });
      //to check if email is registered
      if (!user) {
        throw new Error("User not found");
      }

      //to check if password matches the emailid
      const verifypass = await bcrypt.compare(password, user.password);
      console.log(verifypass)
      if (!verifypass) {
        throw new Error("Invalid Password");
      }
      return { message: "User loggedin Successfully"};
    } catch (error) {
      console.log("error")
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
