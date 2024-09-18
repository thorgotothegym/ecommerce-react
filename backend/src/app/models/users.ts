import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "ecommerce_db",
};

const connection = await mysql.createConnection(config);

type GetAllUsers = {
  limit: number;
};

export class UserModel {
  static async getAllUsers({ limit = 20 }: GetAllUsers) {
    const [users] = await connection.query(
      `SELECT user_handle, email_address, first_name FROM users ORDER BY email_address DESC LIMIT ?`,
      [limit]
    );
    return users;
  }
}
