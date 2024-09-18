import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "ecommerce_db",
};

const connection = await mysql.createConnection(config);

export class UserModel {
  static async getAllUsers() {
    const [movies] = await connection.query(
      "SELECT user_handle, email_address, first_name FROM users"
    );

    return movies;
  }
}
